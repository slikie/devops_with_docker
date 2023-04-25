FROM golang:1.16

WORKDIR /app

COPY . .

RUN go build

ENV PORT=8080

ENV REQUEST_ORIGIN='http://localhost'

CMD ["./server"]

EXPOSE 8080

