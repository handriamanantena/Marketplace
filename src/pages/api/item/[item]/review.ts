import {NextApiRequest, NextApiResponse} from "next";
import {Item, Review} from "src/model/Item";
import httpHandler from "src/util/httpHandler";
import {db} from "src/server/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Review>) {
    let handlers = {
        POST: postHandler
    };
    await httpHandler(req, res, handlers)
}


async function postHandler(req: NextApiRequest, res: NextApiResponse<Review | {}>) {
    const { item } = req.query as { item: number };
    let data: Review = req.body as Review;
    const newReview = await db.review.create({
        data: {
            email: data.email,
            itemId: +(item),
            rating: +(data.rating),
            comment: data.comment
        },
    });
    const product : Item = await db.item.findUnique({
        where: {
            id: +(item)
        }
    });
    let ratingSum = product.total_ratings * product.avg_rating;
    ratingSum += data.rating;
    product.total_ratings += 1;
    let newAvgRating = ratingSum / product.total_ratings;
    const updatedItem = await db.item.update({
        where: { id: +(item) },
        data: {
            avg_rating: newAvgRating,
            total_ratings: product.total_ratings
        },
    });
    updatedItem.newReview = newReview;
    res.status(200).json(updatedItem);

}