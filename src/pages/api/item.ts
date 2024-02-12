import {NextApiRequest, NextApiResponse} from "next";
import {Item} from "@customTypes/Item";
import httpHandler from "@server/util/httpHandler";
import {getItems} from "@server/prisma/item";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
    const handlers = {
        GET: getHandler
    };
    await httpHandler(req, res, handlers)
}



async function getHandler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
    const pageSize = parseInt(req.query.pageSize as string);
    const pageIndex = parseInt(req.query.pageIndex as string);
    const name = req.query.name as string;
    const rating = parseInt(req.query.rating as string);
    const items = await getItems(name, rating, pageSize, pageIndex);
    res.status(200).json(items);
}