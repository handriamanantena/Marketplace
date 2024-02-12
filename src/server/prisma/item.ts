import type { Item } from "@customTypes/Item";
import { db } from "@server/db";

export async function getItems(
  name: string | undefined,
  rating: number | undefined,
  pageSize: number | undefined,
  pageIndex: number | undefined,
): Promise<Item[] | undefined> {
  let where = {};
  if (name && rating) {
    where = {
      AND: [
        {
          name: {
            contains: name,
          },
        },
        {
          rating: { equals: rating },
        },
      ],
    };
  } else if (name) {
    where = {
      name: {
        contains: name,
      },
    };
  } else if (!isNaN(rating)) {
    where = {
      rating: { equals: rating },
    };
  }
  let query = {};
  if (isNaN(pageSize)) {
    pageSize = 15;
  }
  if (isNaN(pageIndex)) {
    query = {
      take: pageSize,
      where: where,
      orderBy: {
        id: "asc",
      },
    };
  } else {
    query = {
      take: pageSize,
      skip: 1,
      cursor: {
        id: pageIndex,
      },
      where: where,
      orderBy: {
        id: "asc",
      },
    };
  }

  const items: Item[] | undefined = (await db.item.findMany(query)) as Item[];
  return items;
}
