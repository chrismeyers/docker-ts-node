# docker-ts-node
Node.js with TypeScript, dockerized

### Docker
```
$ cd docker/dev
$ ./build.sh && ./dev.sh && docker logs -f docker-ts-node
```

### Local
```
$ cd src
$ npm run debug
```

### Debugging
1. Go to debug tab in vscode
1. Select `Debug (container)` when running in Docker or `Debug (local)` when running locally
1. Click the play button
1. Set breakpoints
1. Run code that will hit the breakpoints
