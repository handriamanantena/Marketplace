import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    const item1 = await prisma.item.create({
        data: { name: 'harris', avg_rating: 0, total_ratings: 0 , url: "url"},
    });
    const item2 = await prisma.item.create({
        data: { name: 'harris3', avg_rating: 0, total_ratings: 0, url: "url"},
    });
    const item3 = await prisma.item.create({
        data: { name: 'random item', avg_rating: 0, total_ratings: 0, url: "url" },
    });

    for(let i = 0; i < 100; i++) {
        const item = await prisma.item.create({
            data: { name: `random item ${i}`, avg_rating: 0, total_ratings: 0, url: `url${i}` },
        });
    }

    console.log({ item1, item2, item3})
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })