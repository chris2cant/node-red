# Node Red

## Install docker on debian

https://docs.docker.com/install/linux/docker-ce/debian/

```sh
# Install docker
sudo apt-get remove docker docker-engine docker.io containerd runc; sudo apt-get update; sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common; curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -; sudo apt-key fingerprint 0EBFCD88; sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"; sudo apt-get update; sudo apt-get install docker-ce docker-ce-cli containerd.io
```

```sh
# Check if docker is installed
docker --version
```

## Install docker-compose

https://docs.docker.com/compose/install/

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose; sudo chmod +x /usr/local/bin/docker-compose; sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose; sudo docker-compose --version
```

```sh
sudo apt-get install docker-compose; sudo docker-compose --version;
```

```sh
# Check if docker-compose is installed
docker-compose --version
```

## Docker

```sh
# Display all active containers
docker ps
```

```sh
# All active containers
# -a : All container (running and stopped)
docker ps -a
```

## Without docker compose

```sh
# 1. Run the container "mynodered"
# 2. Install packages
./run.sh
```

## Docker compose

```sh
# up : up your container from ./docker-compose.yml
# -d or --detach : Detached mode: Run containers in the background
docker-compose up -d
```

```sh
# restart : restart your container
docker-compose restart
```

```sh
# stop : stop the container
docker-compose stop
```

```sh
# rm : remove the container
docker-compose stop
```
