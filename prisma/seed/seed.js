import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    const item1 = await prisma.item.create({
        data: { name: 'harris', rating: 5 },
    });
    const item2 = await prisma.item.create({
        data: { name: 'harris3', rating: 5 },
    });
    console.log({ item1, item2})
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