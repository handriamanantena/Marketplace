import type { NextApiRequest, NextApiResponse } from 'next'
import {Item} from "~/model/Item";
import {db} from "~/server/db";
import httpHandler from "~/util/httpHandler";


export default async function handler(req: NextApiRequest, res: NextApiResponse<Item>) {
    let handlers = {
        GET: getHandler
    };
    await httpHandler(req, res, handlers)
}

async function getHandler(req: NextApiRequest, res: NextApiResponse<{ rating: number } | {}>) {
    const { item } = req.query as { item: number };
    const product = await db.item.findUnique({
        where: {
            id: +(item)
        }
    });
    if(product) {
        res.status(200).json(product);
    }
    else {
        res.status(404).json({});
    }
}