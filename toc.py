
import os
from pathlib import Path

def extract_title_from_md(file_path):

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            first_line = f.readline().strip()
            
            if first_line.startswith("##"):
                title = first_line.lstrip("##").strip()
                return title if title else os.path.basename(file_path)
            else:
                return os.path.basename(file_path)
                
    except Exception as e:
        print(f"✗ Error occurred while reading {file_path}: {e}")
        return os.path.basename(file_path)

def generate_directory_index(root_dir, output_file=None):
    md_files = []
    
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(('.md', '.markdown')):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_dir)
                title = extract_title_from_md(file_path)
                md_files.append({
                    'path': rel_path,
                    'title': title,
                    'full_path': file_path
                })
    
    md_files.sort(key=lambda x: x['path'])
    
    directory_content = generate_directory_content(md_files, root_dir)
    
    if output_file:
        save_directory_index(directory_content, output_file)
    
    return directory_content, md_files

def generate_directory_content(md_files, root_dir):
    content = []
    content.append("## Categories\n")
    content.append(f"**Total posts**: {len(md_files)}")
    content.append("")
    
    file_dict = {}
    for file_info in md_files:
        dir_path = os.path.dirname(file_info['path'])
        if dir_path not in file_dict:
            file_dict[dir_path] = []
        file_dict[dir_path].append(file_info)
    
    for dir_path in sorted(file_dict.keys()):
        if dir_path == '.':
            content.append("### Root")
        else:
            content.append(f"### 📁 {dir_path}")
        content.append("")
        
        for file_info in file_dict[dir_path]:
            link_path = file_info['path'].replace('.md', '.html').replace('.markdown', '.html')
            content.append(f"- [{file_info['title']}]({link_path})")
        content.append("")
    
    return "\n".join(content)

def save_directory_index(content, output_file):

    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ TOC saved: {output_file}")

    except Exception as e:
        print(f"✗ Error occurred: {e}")

def display_directory_tree(md_files):
    print("=" * 7)
    
    current_dir = None
    for file_info in md_files:
        dir_path = os.path.dirname(file_info['path'])
        if dir_path != current_dir:
            if dir_path == '.':
                print("\n📂 /")
            else:
                print(f"\n📂 {dir_path}/")
            current_dir = dir_path
            print("─" * 30)
        
        print(f"  📄 {file_info['title']}")
        print(f"    → {file_info['path']}")

if __name__ == "__main__":

    target_directory = "posts"
    
    print(f"* Scanning: {os.path.abspath(target_directory)}")
    print("=" * 7)
    
    directory_content, md_files = generate_directory_index(target_directory)
    
    display_directory_tree(md_files)
    
    print("\n" + "=" * 7)
    
    output_filename = "categories.md"
        
    generate_directory_index(target_directory, output_filename)
    
