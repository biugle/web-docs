
> [!WARNING]
> Docker 前端镜像配置

## Nginx

### default.conf

```bash
server {
  listen 0.0.0.0:80;
  listen [::]:80;
  gzip on;
  gzip_min_length 1k;
  gzip_comp_level 9;
  gzip_types text/plain
    application/javascript
    application/x-javascript
    text/css
    application/xml
    text/javascript
    application/x-httpd-php
    image/jpeg
    image/gif
    image/png;
  gzip_vary on;
  gzip_disable "MSIE [1-6]\.";

  server_name localhost;
  charset utf-8;
  root /usr/share/nginx/html;
  index index.html index.htm;
  fastcgi_connect_timeout 6000s;
  fastcgi_read_timeout 6000s;
  fastcgi_send_timeout 6000s;

  # 文件代理定向
  # location / {
  #   try_files $uri $uri/ /main/index.html;
  # }

  location /api/ {
    proxy_pass http://xxx.com; # http://xxx.com/api/xxx
    # proxy_pass http://xxx.com/; # http://xxx.com/xxx
  }

  location /core {
    proxy_pass http://yyy.com;
    proxy_redirect off;
    proxy_set_header Host $host; # $http_host 是带端口的
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Authorization $http_Authorization;
  }

  # /api/ ===> http://128.128.128.5:8080/ 栗子：/api/user/1 ===> http://128.128.128.5:8080/user/1 # 原地址中的 /api/ 被替换为 /
  # /api ===> http://128.128.128.5:8080 栗子：/api/user/1 ===> http://128.128.128.5:8080/api/user/1 # 代理地址无 /，不替换。
  # /api/ ===> http://128.128.128.5:8080 栗子：/api/user/1 ===> http://128.128.128.5:8080/api/user/1 # 代理地址无 /，不替换。
  # /api ===> http://128.128.128.5:8080/ 栗子：/api/user/1 ===> http://128.128.128.5:8080//user/1 # 原地址中的 /api 被替换为 /

  ##########

  # /api/ ===> http://xxx.com/test/ 栗子：/api/user/1 ===> http://xxx.com/test/user/1 # 原地址中的 /api/ 被替换为 /test/
  # /api ===> http://xxx.com/test 栗子：/api/user/1 ===> http://xxx.com/test/user/1 # 原地址中的 /api/ 被替换为 /test
  # /api/ ===> http://xxx.com/test 栗子：/api/user/1 ===> http://xxx.com/testuser/1 # 原地址中的 /api/ 被替换为 /test
  # /api ===> http://xxx.com/test/ 栗子：/api/user/1 ===> http://xxx.com/test//user/1 # 原地址中的 /api 被替换为 /test/

  # 合并 //
  # merge_slashes off;
  # rewrite (.*)//(.*) $1/$2 permanent;
}

### 最简单配置
server {
  listen 0.0.0.0:80;
  listen [::]:80;
  gzip on;
  gzip_min_length 1k;
  gzip_comp_level 9;
  gzip_types text/plain
    application/javascript
    application/x-javascript
    text/css
    application/xml
    text/javascript
    application/x-httpd-php
    image/jpeg
    image/gif
    image/png;
  gzip_vary on;
  gzip_disable "MSIE [1-6]\.";

  server_name localhost;
  charset utf-8;
  root /usr/share/nginx/html;
  index index.html index.htm;
  fastcgi_connect_timeout 6000s;
  fastcgi_read_timeout 6000s;
  fastcgi_send_timeout 6000s;
}
```

### default.template

```bash
server {
  listen 0.0.0.0:80;
  listen [::]:80;
  gzip on;
  gzip_min_length 1k;
  gzip_comp_level 9;
  gzip_types text/plain
    application/javascript
    application/x-javascript
    text/css
    application/xml
    text/javascript
    application/x-httpd-php
    image/jpeg
    image/gif
    image/png;
  gzip_vary on;
  gzip_disable "MSIE [1-6]\.";

  server_name localhost;
  charset utf-8;
  root /usr/share/nginx/html;
  index index.html index.htm;
  fastcgi_connect_timeout 6000s;
  fastcgi_read_timeout 6000s;
  fastcgi_send_timeout 6000s;

  location /api/ {
    proxy_pass $API_URL;
  }

  location /test/ {
    proxy_pass $TEST_URL;
  }
}
```

## Dockerfile

### 基础通用

```bash
FROM nginx:1.23.2-alpine

COPY dist /usr/share/nginx/html # 注意只能使用同级或下级目录，不可用上级目录内容。

COPY nginx/default.conf /etc/nginx/conf.d
```

### 环境变量+模板

```bash
FROM nginx:1.23.2-alpine

COPY dist /usr/share/nginx/html

COPY nginx/nginx.template /etc/nginx/conf.d

WORKDIR /etc/nginx/conf.d

# 添加环境变量的写入，环境变量 API_URL、TEST_URL 可以自己设置，也可以通过 docker-compose 设置。
ENTRYPOINT envsubst '$API_URL,$TEST_URL'  < nginx.template > default.conf && cat default.conf && nginx -g 'daemon off;'
```
