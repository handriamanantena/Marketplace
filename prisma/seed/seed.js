import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    let item = await prisma.item.findFirst();
    if(item) {
        console.log("db already seeded");
    }
    else {
        for(let i = 0; i < 100; i++) {
            await prisma.item.create({
                data: { name: `random item ${i}`, avgRating: 0, totalRatings: 0, url: `https://marketplace.r2pictures.uk/${i}`, price: 12 },
            });
        }
        console.log("seeding complete");
    }
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