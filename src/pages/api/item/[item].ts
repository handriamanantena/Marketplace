import type { NextApiRequest, NextApiResponse } from 'next'
import {Item} from "~/model/Item";
import {db} from "~/server/db";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Item>
) {
    const item = await db.item.findMany()
    res.status(200).json(item)
}