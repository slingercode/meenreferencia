docker run -d -v $(pwd)/redis:/data -p 6379:6379 --name redis --network meenreferencia-network redis:7
