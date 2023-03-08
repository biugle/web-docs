
> [!WARNING]
> Docker 常用命令

## [命令参考](https://www.runoob.com/docker/docker-command-manual.html)

```bash
# windows 登录远端
echo "password"|docker login docker.xxx.cn -u username --password-stdin
# 登录远端
docker login docker.xxx.cn -u username -p password

# 打包镜像，-f 指定要使用的 Dockerfile 路径，-t 设置标签。
docker build -t xxx .

# 启动运行容器，-it 表示与容器进行交互式启动，-d 表示可后台运行容器(守护式运行)，--name 给要运行的容器起名字。
# -p 将容器的端口映射到宿主机上，通过宿主机访问内部端口，-v 将容器内的指定文件夹挂载到宿主机对应位置。
docker run --name [container-name] -d -p 80:80 [image-name]

# 本地镜像打 tag
docker tag xxx docker.xxx.cn/test/xxx

# push 远端
docker push docker.xxx.cn/test/xxx

# pull
docker pull docker.xxx.cn/test/xxx

# 查看所有容器，-n 列出最近创建的 n 个容器，-s 显示总的文件大小。
docker ps -a

# 查看镜像列表
docker images

# start/stop/restart
docker start [container] # 启动一个或多个已经被停止的容器
docker stop [container] # 停止一个运行中的容器
docker restart [container] # 重启容器

# 删除不需要的镜像 
docker rmi [image]

# 删除不需要的容器，--force 强制删除。
docker rm [container]
docker rm $(docker ps -a -q) # 删除所有停止的容器

# 导入导出镜像
docker save -o xxx.tar [image]
docker save [image] > xxx.tar
docker load < xxx.tar

# 导入导出容器
ocker export -o xxx-`date +%Y%m%d`.tar [container]
docker export [container] > xxx.tar
docker import xxx.tar [container]
cat ./xxx.tar | sudo docker import - [container]

# 进入容器操作
docker exec -it [container] /bin/bash

# docker-compose 启动
docker-compose up -d
```
