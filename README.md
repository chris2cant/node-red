# Node Red

## Install docker on debian

https://docs.docker.com/install/linux/docker-ce/debian/

## Install docker-compose

https://docs.docker.com/compose/install/

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
