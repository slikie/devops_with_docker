#FROM ubuntu:20.04
#make more sense to use `FROM node:16` but ok
#lmao ubuntu still don't have curl?

#RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
#RUN sudo apt install -y nodejs
FROM node:16
COPY . .
RUN npm install
RUN npm install -g serve
ENV REACT_APP_BACKEND_URL='http://localhost:8080'
RUN npm run build
CMD ["serve", "-s", "-l", "5000", "build"]
EXPOSE 5000
