# Ludu Online

## motivation
i want:
- better mechanics for rolls
- ability to move pieces anywhere at any time by any player
- [potentially] video calling

overall, i would like a *better* way to play this game with folks far away :)

## run locally
### option 1 - Docker
prerequisites:
- install Docker
```
git clone https://github.com/NeemZ16/ludu.git
cd ludu
docker compose up
```

### option 2 - Go and Node
prerequisites:
- install Go (v1.23)
- install Node.js (v20.11)

```
git clone https://github.com/NeemZ16/ludu.git
cd ludu
go run backend/cmd/ludu/main.go
cd frontend && npm install && npm run dev
```
