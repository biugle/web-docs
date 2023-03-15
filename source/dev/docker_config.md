
> [!WARNING]
> Docker 前端镜像与 Nginx 配置

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

  client_max_body_size 100m; # 将该服务下的所有请求实体的大小限制为 100m

  server_name localhost;
  charset utf-8;
  root /usr/share/nginx/html;
  index index.html index.htm;
  fastcgi_connect_timeout 6000s;
  fastcgi_read_timeout 6000s;
  fastcgi_send_timeout 6000s;

  # 文件代理定向
  # location / {
  #   root html; # 项目目录
  #   index index.html; # 默认读取文件
  #   try_files $uri $uri/ /index.html; # 配置 history 模式的刷新空白
  # }

  # 后缀匹配 解决静态资源找不到问题
  # location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ {
  #   root html/static/;
  # }
  
  # PC 端和移动端使用不同的项目文件映射
  # location / {
  #   root /home/static/pc;
  #   if ($http_user_agent ~* '(mobile|android|iphone|ipad|phone)') {
  #     root /home/static/mobile;
  #   }
  #   index index.html;
  # }

  # 访问限制
  # location /static {
  #   root html;
  #   allow 39.xxx.xxx.xxx; # allow 允许
  #   deny ll; # deny  拒绝
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

### SSL 配置 HTTPS

```bash
server {
  listen 80;
  server_name www.xxx.com;
  # 将 http 重定向转移到 https
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl;
  server_name www.xxx.com;
  ssl_certificate /etc/nginx/ssl/www.xxx.com.pem;
  ssl_certificate_key /etc/nginx/ssl/www.xxx.com.key;
  ssl_session_timeout 10m;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;
  
  location / {
    root /html/xxx;
    index index.html index.htm index.md;
    try_files $uri $uri/ /index.html;
  }
}
```

### 配置负载均衡

```bash
upstream my_upstream {
  server http://localhost:9001;
  server http://localhost:9002;
  server http://localhost:9003;
}

server {
  listen 9000;
  server_name test.com;

  location / {
    proxy_pass my_upstream;
    proxy_set_header Host $proxy_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

### 单个 Web 服务配置多个项目

> 使用 location 匹配路由区别，**更推荐**参考本站 docker-compose 文档中的[范例(多个容器)](/dev/docker_compose_env)通过多个服务部署实现。

```bash
server {
  listen 80;
  server_name _;
  
  # 主应用
  location / {
    root html/main;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
  
  # 子应用一
  location ^~ /store/ {
    proxy_pass http://localhost:8001;
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  
  # 子应用二
  location ^~ /school/ {
    proxy_pass http://localhost:8002;
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  
  # 静态资源读取不到问题处理
  rewrite ^/api/profile/(.*)$ /(${替换成正确路径的文件的上一层目录})/$1 last;
}

# 子应用一服务
server {
  listen 8001;
  server_name _;
  location / {
    root html/store;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
  
  location ^~ /store/ {
    alias html/store/;
    index index.html index.htm;
    try_files $uri /store/index.html;
  }
  
  # 接口代理
  location  /api {
    proxy_pass http://localhost:10000;
  }
}

# 子应用二服务
server {
  listen 8002;
  server_name _;
  location / {
    root html/school;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
  
  location ^~ /school/ {
    alias html/school/;
    index index.html index.htm;
    try_files $uri /school/index.html;
  }
  
  # 接口代理
  location  /api {
    proxy_pass http://localhost:10010;
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
