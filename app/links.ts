import prisma from '@/lib/db';
import type { Prisma } from '@prisma/client';

export default async function getNavLinks() {
  const res = await prisma.category.findMany({
    orderBy: [
      {
        rank: 'asc',
      }
    ],
    include: {
      links: {
        orderBy: {
          rank: 'asc',
        },
        where: {
          public: true,
          status: 1,
        },
      },
    },
  });
  return res;
}

// 使用 TypeScript 的内置类型来推断 getNavLinks 的返回类型
export type CategoryWithLinks = Awaited<ReturnType<typeof getNavLinks>>;
