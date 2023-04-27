#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Usage: $0 <GitHub repository> <Docker Hub repository>"
  exit 1
fi

GITHUB_REPO=$1
DOCKERHUB_REPO=$2

git clone https://github.com/$GITHUB_REPO.git
#no slashes prolly
cd $(echo $GITHUB_REPO | cut -d'/' -f2)

docker build -t $DOCKERHUB_REPO .

docker login
docker login --username $DOCKER_USER --password $DOCKER_PWD

docker push $DOCKERHUB_REPO
