## DOMjudge 搭建记录

最近在给学校的 CQUOJ 更新换代，在正式开始干活之前先自己走遍流程顺便记录一下。

Server 和 Judgehost 都从 Docker 直接安装，方便。

### 设备

+ Ubuntu 22.04 LTS
+ 2Core 4GiB 40GB

### 环境配置

+ vim：毕竟只是改点配置文件 也没必要单独做配置。
+ grub 改参数：
    + `GRUB_CMDLINE_LINUX_DEFAULT="quiet cgroup_enable=memory swapaccount=1 isolcpus=2 systemd.unified_cgroup_hierarchy=0"`
    + 这句话主要是为了后续安装 docker 方便。
    + 具体功能是：开启内存限制，交换分区统计，隔离一个 cpu 出来跑手动绑核的进程，强制 v1 cgroup 来兼容。
    + 改完记得 `reboot`
+ docker: 照着文档安装就好：

```bash
sudo apt-get remove -y docker docker-engine docker.io containerd runc 
sudo apt-get update  
sudo apt-get install -y ca-certificates curl gnupg lsb-release  
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg  
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list 
sudo apt-get update  
sudo apt-get install -y docker-ce docker-ce-cli containerd.io  
sudo systemctl enable docker  
sudo systemctl start docker  
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose  
```

整个地方放所有的东西，然后设置系统服务

```bash
sudo mkdir -p /etc/docker-compose
sudo vim /etc/systemd/system/docker-compose@.service
```

在系统服务文件里添加：

```ini
[Unit]
Description=%i service deployed with docker compose
Requires=docker.service
After=docker.service

[Service]
user=root
Type=simple
WorkingDirectory=/etc/docker-compose/%i
ExecStart=/usr/local/bin/docker compose up --remove-orphans

[Install]
WantedBy=multi-user.target
```

并重新载入一次系统文件

```bash
sudo systemctl daemon-reload
```

### 主机部署

Under `/etc/docker-compose/`：

database.secret
```
MYSQL_ROOT_PASSWORD=<YOUR PASSWORD>
MYSQL_PASSWORD=<YOUR PASSWORD>
```

docker-compose.yml
```yaml
version: "3.9"

services:
  dj-mariadb:
    container_name: dj-mariadb
    image: mariadb:11.6.2
    restart: unless-stopped
    ports:
      - "13306:3306"
    volumes:
      - ./database:/var/lib/mysql
    env_file: database.secret
    environment:
      - MYSQL_USER=domjudge
      - MYSQL_DATABASE=domjudge
      - CONTAINER_TIMEZONE=Asia/Shanghai
    command: --max-connections=1024 --max-allowed-packet=1G --innodb-log-file-size=512M
    healthcheck:
      test: mysqladmin ping -h localhost -u $$MYSQL_USER --password=$$MYSQL_PASSWORD
      start_period: 10s
      interval: 5s
      timeout: 1s
      retries: 5

  domserver:
    container_name: domserver
    image: domjudge/domserver:8.2.3
    restart: unless-stopped
    ports:
      - "80:80"
    links:
      - 'dj-mariadb:mariadb'
    depends_on:
      dj-mariadb: { condition: service_healthy }
    env_file: database.secret
    environment:
      - MYSQL_HOST=mariadb
      - MYSQL_USER=domjudge
      - MYSQL_DATABASE=domjudge
      - CONTAINER_TIMEZONE=Asia/Shanghai

  judgehost:
    image: 'domjudge/judgehost:8.2.3'
    links:
      - 'domserver:domserver'
    depends_on:
      domserver: { condition: service_healthy }
    privileged: true
    volumes:
      #- /sys/fs/cgroup:/sys/fs/cgroup:ro
      - /sys/fs/cgroup/cpuset:/sys/fs/cgroup/cpuset:rw
      - /sys/fs/cgroup/memory:/sys/fs/cgroup/memory:rw
    env_file: judgehost.secret
    environment:
      - CONTAINER_TIMEZONE=Asia/Shanghai
    deploy:
      mode: replicated
      replicas: 2
      endpoint_mode: dnsrr
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 5
```

进 docker 里安装 mysql：
```bash
sudo docker compose exec dj-mariadb /bin/bash
#root:
apt update
apt install mysql-client
```

出来启动 server 端

```bash
sudo docker compose up -d dj-mariadb domserver
```

获取一下 judgehost 的 API key

```bash
sudo docker exec -it domserver cat /opt/domjudge/domserver/etc/restapi.secret
```

丢进 `/etc/docker-compose/judgehost.secret` 

生成 `admin` 的密码：

```bash
sudo docker exec -it domserver cat /opt/domjudge/domserver/etc/initial_admin_password.secret
```

启动 docker 的所有服务

```bash
sudo docker compose up -d
```

确认能用之后直接访问主机 ip 即可。

最后设置一下系统服务自启动：

```bash
sudo systemctl enable docker-compose@domjudge.service
```

### 比赛配置

### 打印机/小票配置


