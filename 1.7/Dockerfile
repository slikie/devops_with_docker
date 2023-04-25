FROM ubuntu:20.04

WORKDIR /tmp

RUN apt-get update && apt-get install -y curl

COPY curl_website.sh .

RUN chmod  +x curl_website.sh

# When running Docker run the command will be ./hello.sh
CMD ./curl_website.sh
