import type { NextApiRequest, NextApiResponse } from "next";
import type { Item } from "@customTypes/Item";
import { db } from "@server/db";
import httpHandler from "@server/util/httpHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item>,
) {
  const handlers = {
    GET: getHandler,
  };
  await httpHandler(req, res, handlers);
}

async function getHandler(
  req: any,
  res: NextApiResponse<Item | { message: string }>,
) {
  const { item } = req.query as { item: number };
  const product: Item = (await db.item.findUnique({
    where: {
      id: +item,
    },
  })) as Item;
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "item not found" });
  }
}
