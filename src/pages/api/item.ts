import {NextApiRequest, NextApiResponse} from "next";
import {Item} from "@customTypes/Item";
import {db} from "@server/db";
import httpHandler from "@server/util/httpHandler";
import {getItems} from "@server/prisma/item";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
    let handlers = {
        GET: getHandler
    };
    await httpHandler(req, res, handlers)
}



async function getHandler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
    let pageSize = parseInt(req.query.pageSize as string);
    let pageIndex = parseInt(req.query.pageIndex as string);
    let name = req.query.name as string;
    let rating = parseInt(req.query.rating as string);
    let items = await getItems(name, rating, pageSize, pageIndex);
    res.status(200).json(items);
}