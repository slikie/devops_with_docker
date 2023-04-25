FROM golang:1.16

WORKDIR /app

COPY . .

RUN go build

ENV PORT=8080

CMD ["./server"]

EXPOSE 8080

