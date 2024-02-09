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
    let pageSize = parseInt(req.query.pageSize);
    let pageIndex = parseInt(req.query.pageIndex);
    let name = req.query.name;
    let rating = parseInt(req.query.rating);
    console.log(req.query);

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
    else if(!isNaN(rating)) {
        where = {
            rating: { equals: rating}
        }
    }
    let query = {};
    if(isNaN(pageSize)) {
        pageSize = 15;
    }
    if (isNaN(pageIndex)) {
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