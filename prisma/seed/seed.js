import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    for(let i = 0; i < 100; i++) {
        const item = await prisma.item.create({
            data: { name: `random item ${i}`, avg_rating: 0, total_ratings: 0, url: `url${i}`, price: 12 },
        });
    }
    console.log("seeding complete");
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