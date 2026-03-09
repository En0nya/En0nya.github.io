sudo apt update
sudo apt upgrade -y
sudo apt install pkg-config acl zip unzip mariadb-server nginx php-fpm php-gd php-cli php-intl php-mbstring php-mysql php-curl php-json php-xml php-zip composer ntp make gcc g++ debootstrap pkg-config libcgroup-dev lsof procps libcurl4-gnutls-dev libjsoncpp-dev libmagic-dev mysql-server build-essential git -y
cd /opt/
sudo wget https://www.domjudge.org/releases/domjudge-8.3.1.tar.gz
sudo tar -zxf domjudge-8.3.1.tar.gz
rm domjudge-8.3.1.tar.gz
cd /opt/domjudge-8.3.1
sudo ./configure --prefix=/opt/domjudge --with-domjudge-user=root --with-baseurl=127.0.0.1
sudo make domserver
sudo make install-domserver
cd /opt/domjudge/domserver
sudo bin/dj_setup_database -s install
sudo ln -s /opt/domjudge/domserver/etc/nginx-conf /etc/nginx/sites-enabled/domjudge
sudo ln -s /opt/domjudge/domserver/etc/domjudge-fpm.conf /etc/php/8.1/fpm/pool.d/domjudge.conf
sudo service php8.1-fpm reload
sudo systemctl daemon-reload
cd /etc/nginx/sites-enabled
sudo rm default
sudo service nginx reload
cd /opt/domjudge/domserver
sudo chown www-data:www-data -R webapp/public/*
cd /opt
