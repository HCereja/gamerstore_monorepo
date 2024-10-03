import { products } from '@gstore/core';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const prods = [];

products.forEach((product) => {
  prods.push({
    name: product.name,
    description: product.description,
    brand: product.brand,
    model: product.model,
    image: product.image,
    rating: product.rating,
    videoReview: product.videoReview,
    tags: product.tags,
    basePrice: product.basePrice,
    promotionalPrice: product.promotionalPrice,
    lowestPrice: product.lowestPrice,
    biggestPrice: product.biggestPrice,
    avgPrice: product.avgPrice,
    specs: product.specs,
  });
});

async function seed() {
  await prisma.product.createMany({
    data: prods,
  });
}

seed();
