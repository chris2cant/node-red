#!/usr/bin/env sh
#docker run -d -v $(pwd)/data:/data -p 1881:1880 --name mynodered nodered/node-red -e TZ=Europe/Paris
docker run -d -v /Users/canteloube_c/work/test-nodered/data:/data -p 1881:1880 --name mynodered nodered/node-red -e TZ=Europe/Paris
docker exec mynodered bash -c 'cd /data; npm install'