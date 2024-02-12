# Marketplace

## About 

Simulates a marketplace frontend. The checkout mechanism is handled using redux. The database stores items on an sqlLite db.  

## Start project locally  

`npm run setup`
The following will occur 

* prisma generates the schema, defined in `./prisma/schema.prisma`
* The database is seeded. The seeding script is located in `./prisma/seed/seed.js`. It will generate 100 items
* a next.js application will start in dev mode ``localhost:3000``

If the database is already setup run this command instead
`npm run dev`



## Enviornment Variables

## Prerequisites 

`node v18.16.0 or above (tested on v18.16.0)`

## Create a production build

In order to make use of next.js ssr features, you will need to create a production build. This will make use of `getStaticProps` and 
generate 30 items in the marketplace at build time. If you have not run `npm run dev`, you will need to first build the database.

* Database setup: `npm run db:push`
* Database seeding: `npx prisma db seed`
* Build Next.js application: `npm run build`

After the build, to start the server run 

`npm run start` 

## Stack

* frontend `Next.js, react, react redux, tailwind, shadcn`
* backend: `Prisma: sqlLite`

## Thumbnails

Thumbnails where generated using another [project](https://github.com/handriamanantena/thumbnail). Thumbnails 
already deployed on Cloudflare r2 in this demo.
