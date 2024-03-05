package cmd

import (
	"log"
	"os"

	"github.com/redis/go-redis/v9"
)

func RedisClient() *redis.Client {
  opt, err := redis.ParseURL(os.Getenv("REDIS_URL"))
  if err != nil {
    log.Fatal(err)
  }

  return redis.NewClient(opt)
}
