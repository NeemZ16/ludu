FROM golang:1.23

WORKDIR /app

COPY ./backend/go.mod ./backend/go.sum ./

# download dependencies from go.mod
RUN go mod download

# copy source files 
COPY ./backend/cmd ./cmd
COPY ./backend/internal ./internal

# build go binary in root path
RUN CGO_ENABLED=0 GOOS=linux go build -o /ludu-backend ./cmd/ludu

# wait for db
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# expose port and run binary
EXPOSE 8000
CMD ["/wait", "--", "/ludu-backend"]
