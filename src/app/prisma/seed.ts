import { PrismaClient, Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

const roundsOfHashing = 10;

/* const userData: Prisma.UserCreateInput[] = [
  {
    username: 'Tanya',
    password: 'a',
  },
  {
    username: 'Joe',
    password: 'a',
  },
  {
    username: 'Mohammad',
    password: 'a',
  },
] */

async function main() {
  console.log(`Start seeding ...`)

  /* for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  } */

  const tanya = await prisma.user.upsert({
    where: { username: 'Tanya' },
    update: {},
    create: {
      username: 'Tanya',
      password: 'a',
      favorites: {
        create: {
          title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
          image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
          source: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        },
      },
    },
  })

  const joe = await prisma.user.upsert({
    where: { username: 'Joe' },
    update: {},
    create: {
      username: 'Joe',
      password: 'a',
      favorites: {
        /* create: {
          title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
          image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
          source: "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        }, */
      },
    },
  })

  console.log({ tanya, joe })
  console.log(`Seeding finished.`)
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