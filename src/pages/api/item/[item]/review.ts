import {NextApiRequest, NextApiResponse} from "next";
import {Item, Review} from "@customTypes/Item";
import httpHandler from "@server/util/httpHandler";
import {db} from "@server/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Review>) {
    let handlers = {
        POST: postHandler
    };
    await httpHandler(req, res, handlers)
}


async function postHandler(req: any, res: NextApiResponse<Item & {newReview: Review} | {message: string}>) {
    const { item } = req.query as { item: number };
    let data: Review = req.body as Review;
    const product : Item | null = await db.item.findUnique({
        where: {
            id: +(item)
        }
    });
    if(product == null) {
        res.status(404).json({message: "item not found"});
        return;
    }
    const newReview : Review = await db.review.create({
        data: {
            email: data.email,
            itemId: +(item),
            rating: +(data.rating),
            comment: data.comment
        },
    }) as Review;

    let ratingSum = product.totalRatings * product.avgRating;
    ratingSum += data.rating;
    product.totalRatings += 1;
    let newAvgRating = ratingSum / product.totalRatings;
    const updatedItem : any = await db.item.update({
        where: { id: +(item) },
        data: {
            avgRating: newAvgRating,
            totalRatings: product.totalRatings
        },
    });
    updatedItem.newReview = newReview;
    res.status(200).json(updatedItem);

}