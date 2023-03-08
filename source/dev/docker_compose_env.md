
> [!WARNING]
> Docker Compose 与环境变量

## Docker-Compose 范例

### 通用部署

```yaml
# docker-compose 单个容器
version: '1'
services:
  test_container:
    image: test_container_image
    container_name: test_container
    restart: always
    environment:
      API_URL: 'http://128.128.128.5:8080/api/'
      TEST_URL: 'http://128.128.128.5:8000/test/'
    ports:
      - '8081:8081'
    expose:
      - '8081'
    networks:
      - my-test-network

networks:
  my-test-network:
    name:  my-test-network


# docker-compose 多个容器
version: '1'
services:
  custom_nginx:
    image: docker.xxx.cn/test/custom_nginx_image
    container_name: custom_nginx
    restart: always
    environment:
      test1_WEB_URL: 'http://test_container1:8080'
      test2_WEB_URL: 'http://test_container2:8080'
      test3_WEB_URL: 'http://test_container3:8080'
      API_URL: 'http://128.128.128.5:8080/api/'
      TEST_URL: 'http://128.128.128.5:8000/test/'
    ports:
      - '80:80'
    expose:
      - '80'
    # ports:
    #   - '443:443'
    # expose:
    #   - '443'
    # volumes:
    #   - ./ssl:/etc/ssl/
    networks:
      - my-custom-network
    depends_on:
      - test_container1
      - test_container2
      - test_container3

  test_container1:
    image: test_container3_image
    container_name: test_container1
    networks:
      - my-custom-network
    restart: always

  test_container2:
    image: test_container2_image
    container_name: test_container2
    networks:
      - my-custom-network
    restart: always

  test_container3:
    image: test_container3_image
    container_name: test_container1
    networks:
      - my-custom-network
    restart: always

networks:
  my-custom-network:
    name: my-custom-network
```

### custom_nginx Demo

```bash
# default.template
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

  location /test1 {
    proxy_pass $test1_WEB_URL;
  }

  location /test2 {
    proxy_pass $test2_WEB_URL;
  }

  location /test3 {
    proxy_pass $test3_WEB_URL;
  }

  location /api/ {
    proxy_pass $API_URL;
  }

  location /test/ {
    proxy_pass $TEST_URL;
  }
}

##########

# Dockerfile
FROM nginx:1.23.2-alpine

COPY nginx/nginx.template /etc/nginx/conf.d

WORKDIR /etc/nginx/conf.d

# 添加环境变量的写入
ENTRYPOINT envsubst '$test1_WEB_URL,$test2_WEB_URL,$test3_WEB_URL,$API_URL,$TEST_URL'  < nginx.template > default.conf && cat default.conf && nginx -g 'daemon off;'
```

> **docker-compose 中配置的环境变量，我们在代码中也可以取到，比如：`process.env.API_URL`。**
