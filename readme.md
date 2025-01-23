# Hexploit User Guide
[Demo](https://m310ct.com/)
[中文文档](https://m310ct.com/2025/01/24/hexploit%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/)

## 1. Theme Installation
You can download the project to your local machine via `git clone` or by downloading a zip file. Create a folder named `hexploit` under the `/themes` directory of your blog, and place the project there (ensure the directory structure matches the one shown in the GitHub repository; `git clone` is recommended!).  
Open the `config` file in your blog directory (both the root and theme directories have `config` files—be careful not to confuse them):  
Change `theme: landscape` to:
```yml
theme: hexploit


## 2. Plugin Installation
### 1. RSS Plugin
Run the following command in your blog directory (refer to online resources for details about npm and blog setup):
```bash
npm install hexo-generator-feed --save
```
Open the `config` file in the blog directory and add the RSS configuration at the end:
```yml
feed:
  type: rss
  path: rss.xml
```

### 2. Search Plugin
Run the following command in your blog directory:
```bash
npm install hexo-generator-search --save
```
Open the `config` file in the blog directory and add the search configuration at the end:
```yml
search:
  path: search.json
  field: all
  format: html
  limit: 10000
```

## 3. Add Corresponding Pages
This theme supports three pages: `categories`, `tags`, and `about`.

### 1. Create New Pages
Run the following commands in your blog directory:
```bash
hexo new page categories
```
```bash
hexo new page tags
```
```bash
hexo new page about
```

### 2. Specify Layout Files
Take `categories` as an example. Open `/source/categories/index.md` and modify its content as follows:
```markdown
---
title: categories
layout: categories
---
```
Do the same for the other pages, replacing `categories` with `tags` and `about`.

### 3. Modify the Theme Configuration File
Open `/themes/hexploit/_config.yml`:
```yml
menu:
  - name: Home
    url: /
  - name: Archives
    url: /archives
  - name: Categories
    url: /categories
  - name: Tags
    url: /tags
  - name: About
    url: /about
  - name: RSS
    url: /rss.xml
sidebar: # Sidebar
  enable: true 
  widgets:
    - search # Search
    - notice # Notice
    - categories # Categories
    - tags # Tags
    - links # Links

  numlimit: # Limit the number of items shown in the sidebar
    categories: 5
    tags: 10
    
  links:
    - name: Baidu
      url: https://www.baidu.com
  notice: # Notice section content
    enable: true # Set to true to enable, false to disable
    content: "The blog is under optimization. Stay tuned for more content!" # Content displayed in the notice section
```
You can freely modify the order of the sidebar items or comment out unused items.

## 4. Code Highlighting
Modify your blog’s configuration file:
```yml
highlight:
  enable: true
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: true
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
```
The current theme uses `atmo-one-dark`, defined in `highlight.css`. You can customize it as needed.

