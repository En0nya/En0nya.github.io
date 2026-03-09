## DOMjudge 搭建记录 & 理解

最近在给学校的 CQUOJ 更新换代，在正式开始干活之前先自己走遍流程顺便记录一下。

Server 和 Judgehost 都从 Docker 直接安装，方便。

### 一些前置知识

#### 虚拟化

简单来说就是将计算机中的各个部分分割成多个块。

然后用几个小块组装出一个新的完整运行环境，这也叫资源最小单位化(池化)

一般主要包含计算（CPU+内存）、网络、存储

最常见的产物就是虚拟机。

#### Docker

Docker 是一种轻量级的虚拟化技术（容器）

相比于传统的虚拟化技术，最直接的特点是速度快，体积小，扩展性强。

因为它只虚拟文件系统，进程空间，网络，用户权限

它不会直接虚拟出一个完整的操作系统，它只模拟（隔离）了一个环境，

做计算什么的全部直接使用宿主机的内核。

Docker 的主要原理就只有两步：

1. Namespaces：隔离 UTS，IPC，PID，NETWORK，MOUNT，USER。
    - 主机名域名；信号量、消息队列、共享内存；进程编号；网络，端口，设备；文件系统；用户、用户组
2. Cgroups：资源限制，给每个容器可以使用的 CPU，内存，IO 做限制；还可以分配优先级，统计资源使用量；还可以挂起恢复。

然后需要知道三个概念：

1. Image 镜像：可以类比为虚拟机使用的 iso 文件；就是一个模板
2. Container 容器：从镜像创建的一个运行实例，一个平台。
3. Registry 仓库：储存镜像用的。

Docker 的大概架构包含这样的一些东西：

1. Docker Client
    用于和 Docker Daemon 建立联系的客户端（发命令）

    命令行里的 `docker pull` 等等命令都由它执行
    
2. Docker Daemon （守护进程）
    Daemon 是一个在后台持续运行的程序。

    真正管理镜像、容器、网络、存储的是它，接收到 Client 的命令之后再做相应的操作。

    不过 Daemon 还分为 Docker Server 和 Engine 两部分。
    前者是接受命令调度的；后者则负责执行 Job 来管理镜像容器什么的。

5. Job
    Job 是最基本的工作执行单元，或者粗略的理解为 Linux 中的进程。

    Docker 做的每一项工作，都可以抽象为一个job（运行进程；下载；创建 API）。

6. Docker Registry

    就是储存镜像的，`docker search pull push` 就是与它交互的。

    常见的就是 Docker hub，当然也可以内网自己搭建。

Graph 那些暂时先不提。

这里列出一些常见的命令：

镜像相关命令：

1. 拉取/搜索镜像
```bash
# 从仓库拉取镜像（默认Docker Hub），:tag指定版本，不写默认latest
docker pull 镜像名:tag
docker pull nginx:1.24  # 拉取nginx 1.24版本
docker pull mysql:8.0   # 拉取mysql 8.0版本

# 搜索仓库中的镜像
docker search redis  # 搜索redis相关镜像
```

2. 查看本地镜像
```bash
docker images  # 列出所有本地镜像（简写）
docker image ls  # 完整写法，和上面效果一致
docker images -a  # 列出所有镜像（包括中间层）
docker images -q  # 只显示镜像ID（批量操作常用）
```

3. 删除/清理镜像
```bash
# 删除指定镜像（注意：先停掉基于该镜像的容器才能删）
docker rmi 镜像ID/镜像名:tag
docker rmi nginx:1.24
docker rmi $(docker images -q)  # 删除所有本地镜像（慎用）

# 清理无用镜像（悬空镜像、未被使用的镜像）
docker image prune  # 清理悬空镜像
docker image prune -a  # 清理所有未被容器使用的镜像
```

4. 构建镜像（自定义镜像）
```bash
# 从Dockerfile构建镜像，-t指定镜像名:标签，.指定Dockerfile所在目录
docker build -t myapp:v1 .
```

容器相关命令：

1. 创建/启动容器
```bash
# 最常用：创建并启动容器（run = create + start）
# 核心参数：-d后台运行 -p端口映射 -v数据卷挂载 --name指定容器名
docker run [参数] 镜像名:tag

# 示例1：启动nginx容器（后台运行，8080端口映射到容器80端口，命名为mynginx）
docker run -d -p 8080:80 --name mynginx nginx:1.24

# 示例2：启动mysql容器（设置密码，挂载数据卷，后台运行）
docker run -d -p 3306:3306 --name mymysql -e MYSQL_ROOT_PASSWORD=123456 -v mysql-data:/var/lib/mysql mysql:8.0

# 仅创建容器（不启动）
docker create --name mynginx2 nginx:1.24
```

2. 查看容器
```bash
docker ps  # 列出正在运行的容器
docker ps -a  # 列出所有容器（运行中+已停止）
docker ps -q  # 只显示运行中容器的ID
docker ps -aq  # 只显示所有容器的ID
```

3. 启停/重启容器
```bash
# 启动已创建的容器
docker start 容器ID/容器名
docker start mynginx

# 停止运行中的容器
docker stop 容器ID/容器名
docker stop mynginx

# 强制停止容器（类似kill -9）
docker kill 容器ID/容器名

# 重启容器
docker restart 容器ID/容器名
```

4. 进入容器（调试/操作）
```bash
# 推荐：进入容器并打开交互式终端（bash/sh）
docker exec -it 容器ID/容器名 bash
docker exec -it mynginx bash  # 进入nginx容器

# 旧方法（不推荐，退出会停止容器）
docker attach 容器ID/容器名
```

5. 查看容器日志/信息
```bash
# 查看容器日志（-f实时跟踪，-t显示时间戳）
docker logs -f -t mynginx

# 查看容器详细信息（IP、挂载、端口等）
docker inspect 容器ID/容器名
```

6. 删除容器
```bash
# 删除已停止的容器
docker rm 容器ID/容器名
docker rm mynginx

# 强制删除运行中的容器
docker rm -f mynginx

# 删除所有已停止的容器
docker rm $(docker ps -aq)
```

数据卷（Volume）相关命令
数据卷是用来做数据持久化的，可以避免容器删除后数据丢失。

```bash
# 创建数据卷
docker volume create mysql-data

# 查看所有数据卷
docker volume ls

# 查看数据卷详细信息（挂载路径等）
docker volume inspect mysql-data

# 删除指定数据卷
docker volume rm mysql-data

# 清理未被使用的数据卷
docker volume prune
```

#### DOMJudge 架构

主要就分成三个部分。

1. Domjudge server
    主服务端/Web服务。提供队伍端，裁判端和公共榜单。

    同时维护评测队列，向 Judgehost 发送评测任务。
2. Judgehost
    核心进程是 Judgehost daemon，他负责向 Server 不断询问获取评测任务。

    拉取代码和测试数据之后会在沙箱之中运行。
3. Database
    储存：队伍、用户、权限、竞赛配置、题目、测试数据、提交记录、评测日志、榜单状态。

    Server 与 Judgehost 需要通过 Database 来通信与同步状态

    所以说实际上 Judgehost 是在轮询 DataBase 获取任务返回结果。

### 设备

+ Ubuntu 22.04 LTS
+ 2Core 4GiB 40GB

### 环境配置和部署

+ vim：毕竟只是改点配置文件 也没必要单独做配置。
+ /etc/default/grub 改参数：
    + `GRUB_CMDLINE_LINUX_DEFAULT="quiet cgroup_enable=memory swapaccount=1 isolcpus=2 systemd.unified_cgroup_hierarchy=0"`
    + 这里是开启内存限制，交换分区统计，隔离一个 cpu 出来跑手动绑核的进程，强制 v1 cgroup 来兼容。
    + 改完记得 `reboot`
+ docker: 照着文档安装就好：

```bash
sudo apt remove -y docker docker-engine docker.io containerd runc 
sudo apt update  
sudo apt install -y ca-certificates curl gnupg lsb-release  
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg  
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list 
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io  
sudo systemctl enable docker  
sudo systemctl start docker  
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose  
```

由于 Docker 的隔离特性，在连接打印机和气球小票机的时候会出现问题。

所以这里采用的方案是 Server 使用原生部署，Judgehost 使用 Docker 部署。

当然需要确保它们的 Database 是共同的。

安装原生 Server：

先安装依赖：

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install pkg-config acl zip unzip mariadb-server nginx php-fpm php-gd php-cli php-intl php-mbstring php-mysql php-curl php-json php-xml php-zip composer ntp make gcc g++ debootstrap pkg-config libcgroup-dev lsof procps libcurl4-gnutls-dev libjsoncpp-dev libmagic-dev mysql-server build-essential git -y
```

下载 domserver 源码：

```bash
cd /opt/
sudo wget https://www.domjudge.org/releases/domjudge-8.3.1.tar.gz
sudo tar -zxf domjudge-8.3.1.tar.gz
rm domjudge-8.3.1.tar.gz
```

**注意：这里的domjudge版本一定要兼容前面自动下载的 php 版本！测试环境中自动下载的为 php 8.1，仅有 8.3.x 可以支持此版本**

以及其实不一定要在 opt 下编译，源码在编译完之后就可以删了，它放在哪里没有关系，只要等下指定编译路径的时候记清楚就好。

编译：

```bash
sudo ./configure --prefix=/opt/domjudge --with-domjudge-user=root --with-baseurl=127.0.0.1
sudo make domserver
sudo make install-domserver
```

然后初始化 server：

注意这里的 php 版本！

```bash
cd /opt/domjudge/domserver
sudo bin/dj_setup_database -s install
sudo ln -s /opt/domjudge/domserver/etc/nginx-conf /etc/nginx/sites-enabled/domjudge
sudo ln -s /opt/domjudge/domserver/etc/domjudge-fpm.conf /etc/php/8.1/fpm/pool.d/domjudge.conf
```

配置 nginx 服务

```bash
sudo service php8.1-fpm reload
sudo systemctl daemon-reload
cd /etc/nginx/sites-enabled
sudo rm default
sudo service nginx reload
cd /opt/domjudge/domserver
sudo chown www-data:www-data -R webapp/public/*
```

**这里删除 default 非常重要！不删掉的话默认配置占用了 domjudge 的位置就无法显示。**

做完这些之后记得 `system reboot`

此时就可以在 `127.0.0.1/domjudge` 看到 index 界面

这里顺手改一下时空限制：

### 比赛配置

### 打印机/小票配置

sudo docker run -d -it --privileged -v /sys/fs/cgroup:/sys/fs/cgroup --name judgehost-new0 --hostname localhost --network="host" -e DAEMON_ID=0 -e CONTAINER_TIMEZONE=Asia/Hong_Kong -e JUDGEDAEMON_PASSWORD=iBOyOXQnT995ZKKQQAFJUzlx5Yjp7rnp -e DOMSERVER_BASEURL=http://localhost/domjudge/ domjudge/judgehost:8.3.1

