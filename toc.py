
import os
import re
from datetime import datetime

def extract_title_skip_yaml(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        in_yaml_header = False
        yaml_header_end = False
        
        for i, line in enumerate(lines):
            line = line.strip()
            
            if not in_yaml_header and (line == '---' or line.startswith('```yaml') or line == '```'):
                in_yaml_header = True
                continue
            
            if in_yaml_header and not yaml_header_end:
                if line == '---' or line == '```':
                    yaml_header_end = True
                    in_yaml_header = False
                continue
            
            if not line:
                continue
            
            if in_yaml_header:
                continue
            
            if line.startswith('##'):
                title = line.lstrip('##').strip()
                return title if title else os.path.basename(file_path)
            else:
                return os.path.basename(file_path)
        
        return os.path.basename(file_path)
                
    except Exception as e:
        print(f"✗ Error occurred while reading {file_path}: {e}")
        return os.path.basename(file_path)

def get_file_mod_time(file_path):
    try:
        mod_time = os.path.getmtime(file_path)
        mod_date = datetime.fromtimestamp(mod_time)
        return mod_date.strftime("%y 年 %m 月 %d 日"), mod_time
    except Exception as e:
        print(f"✗ Error acquiring modification time {file_path}: {e}")
        return "Unknown time.", 0

def scan_markdown_files(root_dir):
    md_files = []
    
    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for file in files:
            if file.lower().endswith(('.md', '.markdown')):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_dir)
                title = extract_title_skip_yaml(file_path)
                mod_time_str, mod_timestamp = get_file_mod_time(file_path)
                
                md_files.append({
                    'path': rel_path,
                    'title': title,
                    'full_path': file_path,
                    'mod_time': mod_time_str,
                    'mod_timestamp': mod_timestamp,
                    'dirname': os.path.dirname(rel_path),
                    'filename': file
                })
    
    return md_files

def generate_directory_index(md_files, root_dir):
    md_files.sort(key=lambda x: x['mod_timestamp'], reverse=True)
    
    content = []
    content.append("## Categories\n")
    content.append(f"*文章总数: {len(md_files)}*\n")
    content.append(f"*Last update: {datetime.now().strftime('%Y 年 %m 月 %d 日 %H:%M')}*")
    content.append("")
    
    dir_files = {}
    for file_info in md_files:
        dir_path = file_info['dirname']
        if dir_path not in dir_files:
            dir_files[dir_path] = []
        dir_files[dir_path].append(file_info)
    
    for dir_path in sorted(dir_files.keys()):
        files_in_dir = dir_files[dir_path]
        
        for file_info in files_in_dir:
            html_path = file_info['path'].replace('.md', '.html').replace('.markdown', '.html')
            html_path = "posts\\" + html_path
            content.append(f"- [⌈{file_info['title']}⌋]({html_path})    *`{file_info['mod_time']}`*")
        content.append("")
    
    return "\n".join(content)


def main():
    target_directory = "posts"
    
    if not os.path.exists(target_directory):
        print(f"✗ Direct directory doesn't exist: {target_directory}")
        return
    
    print("-" * 7)
    
    md_files = scan_markdown_files(target_directory)
    
    directory_content = generate_directory_index(md_files, target_directory)
    
    output_filename = "categories.md"
        
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(directory_content)
        print(f"✓ Table of contents saved: {output_filename}")
    except Exception as e:
        print(f"✗ Error occurred while saving toc: {e}")

if __name__ == "__main__":
    main()
