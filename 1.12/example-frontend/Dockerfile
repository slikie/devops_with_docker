FROM ubuntu:20.04
#make more sense to use `FROM node:16` but ok

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN sudo apt install -y nodejs
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
CMD ["serve", "-s", "-l", "5000", "build"]
EXPOSE 5000
