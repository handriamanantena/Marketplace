import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    const item1 = await prisma.item.create({
        data: { name: 'harris', avg_rating: 0, total_ratings: 0},
    });
    const item2 = await prisma.item.create({
        data: { name: 'harris3', avg_rating: 0, total_ratings: 0 },
    });
    const item3 = await prisma.item.create({
        data: { name: 'random item', avg_rating: 0, total_ratings: 0 },
    });

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