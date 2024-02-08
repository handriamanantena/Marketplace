import {NextApiRequest, NextApiResponse} from "next";
import {Item} from "~/model/Item";
import {db} from "~/server/db";
import httpHandler from "~/util/httpHandler";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
    let handlers = {
        GET: getHandler
    };
    await httpHandler(req, res, handlers)
}



async function getHandler(req: NextApiRequest, res: NextApiResponse<Item[]>) {
    let pageSize = req.query.pageSize;
    let pageIndex = req.query.pageIndex;
    let name = req.query.name;
    let rating = +(req.query.rating);

    let where = {};
    if(name && rating) {
        where = {
            AND: [ {
                name: {
                    contains: name
                }
            },
                {
                    rating: { equals: rating}
                }
            ]
        }
    }
    else if(name) {
        where = {
            name: {
                contains: name
            }
        }
    }
    else if(rating != undefined) {
        where = {
            rating: { equals: rating}
        }
    }
    let query = {};
    if(pageSize == undefined) {
        pageSize = 15;
    }
    if (pageIndex == undefined) {
        query = {
            take: pageSize,
            where: where,
            orderBy: {
                id: 'asc',
            },
        }
    }
    else {
        query = {
            take: pageSize,
            skip: 1,
            cursor: {
                id: pageIndex,
            },
            where: where,
            orderBy: {
                id: 'asc',
            },
        }
    }

    const items = await db.item.findMany(query);
    res.status(200).json(items);
}