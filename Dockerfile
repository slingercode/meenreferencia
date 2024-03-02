FROM golang:1.22.0-alpine

ARG REDIS_URL

ENV ENV production
ENV REDIS_URL ${REDIS_URL}
EXPOSE 3000

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download -x

COPY . .

RUN go build -o meenreferencia cmd/main.go

CMD [ "./meenreferencia" ]
