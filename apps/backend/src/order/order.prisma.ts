import { Injectable } from '@nestjs/common';
import { Order } from '@gstore/core';
import { PrismaProvider } from '../db/prisma.provider';

@Injectable()
export class OrderPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }
  async getById(id: number): Promise<Order[]> {
    const orders = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        delivery: true,
      },
    });
    return orders as any;
  }

  async save(order: Order): Promise<void> {
    const items = [];
    order.items.forEach((item) => {
      items.push({
        productId: item.product.id,
        unityPrice: item.unityPrice,
        quantity: item.quantity,
      });
    });

    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        fullValue: order.fullValue,
        paymentType: order.paymentType,
        delivery: { create: { ...order.delivery } },
        items: {
          create: items,
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return;
    await this.prisma.$transaction([
      this.prisma.orderItem.deleteMany({ where: { orderId: id } }),
      this.prisma.order.delete({ where: { id } }),
      this.prisma.orderDelivery.delete({ where: { id: order.deliveryId } }),
    ]);
  }
}
