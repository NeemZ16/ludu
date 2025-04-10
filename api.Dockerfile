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

# expose port and run binary
EXPOSE 8000
CMD ["/ludu-backend"]
