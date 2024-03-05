pnpm run build && \
templ generate && \
REDIS_URL=redis://localhost:6379 go run main.go
