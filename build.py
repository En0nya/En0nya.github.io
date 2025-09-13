
import os
import sys
import datetime
import subprocess
import markdown as mkd
from pathlib import Path
from git import Repo, GitCommandError


html_tmp = open("./template.html", "r", encoding = "utf-8").read()

def md_to_html(file_name, html_template = html_tmp):

    html_file_name = os.path.splitext(file_name)[0] + '.html'

    try:
        with open(file_name, "r", encoding = "utf-8") as f:
            md_content = f.read()

        html_content = mkd.markdown(
            md_content,
            extensions = ['extra', 'codehilite']
        )

        result_content = html_template.replace("{{content}}", html_content)

        with open(html_file_name, "w", encoding = "utf-8") as f:
            f.write(result_content)

        print(f"✓ Generated: {html_file_name}")
        return html_file_name

    except Exception as e:
        print(f"✗ Error occurred while generating {html_file_name}: {e}.")
        return None


def build_html(directory_path):

    md_files = []

    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.lowfile_pathwith(('.md', '.markdown')):
                file_path = os.path.join(root, file)
                md_files.append(file_path)
    
    print(f"🔍 {len(md_files)} md files were found.")
    
    success_count = 0
    
    for i, file_path in enumerate(md_files, 1):
        result = build(file_path)
        if result:
            success_count += 1

    print(f"❤️ Successfully convert {success_count} files.")
    

def depoly_to_git(repo_path = "./", commit_message = "Auto update"):

    repo = Repo(repo_path)

    try:
        if repo.is_dirty():
            repo.git.add('.')
            repo.index.commit(f"{commit_message} :{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

        origin = repo.remote(name = 'origin')
        origin.push()
        print("🎉Deployed to remote repo.")

    except GitCommandError as g:
        print(f"GitError: {g}")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":

    md_to_html("./404.md")
    md_to_html("./index.md")
    md_to_html("./links.md")
    md_to_html("./contact.md")
    md_to_html("./categories.md")
    build_html("posts")

    if len(sys.argv) > 2:
        message_argv = sys.argv[1]
    else:
        message_argv = "Auto update"
    depoly_to_git("./", message_argv)

