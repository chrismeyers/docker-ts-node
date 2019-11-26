#!/bin/bash

. ./config.sh

docker rm -f $SERVICE
docker run --name="$SERVICE" \
    --log-opt max-size=25m \
    --log-opt max-file=4 \
    --init \
    -c 5120 \
    -m 2g \
    -v ${PWD}/../../src:/root/app \
    -p $EXTERNAL_PORT:$APP_PORT \
    -p $DEBUG_PORT:$DEBUG_PORT \
    -e "NODE_ENV=staging" \
    -e "DEBUG=true" \
    -e "PORT=$APP_PORT" \
    -d $SERVICE
