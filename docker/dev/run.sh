#!/bin/bash

. ./config.sh

docker rm -f $service
docker run --name="$service" \
    --log-opt max-size=25m \
    --log-opt max-file=4 \
    -c 5120 \
    -m 2g \
    -v ${PWD}/../../src:/root/app \
    -p $externalPort:$appPort \
    -d $service
