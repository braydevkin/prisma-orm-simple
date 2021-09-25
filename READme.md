### Prisma

#### This project was created to learn about prisma, fisrt configurations, CLI and structure

##### How to start ?
```bash
ts node src/main.ts 
```

##### How to make migrations ?
```bash
yarn prisma migrate dev
```

##### How to run prisma studio ?
```bash
yarn prisma studio
```

##### Extensions VSCode to help 
- Prisma

##### The database for this project has been started in the docker 
usage with postgres
```bash
docker run --name pg -p 5432:5432 -e POSTGRES_PASSWORD=1234 -d -t postgres
```

[Prisma Quick started](https://www.prisma.io/docs/getting-started)