import {NextApiRequest, NextApiResponse} from "next";
import {Item} from "~/model/Item";

export default function handler(req: NextApiRequest, res: NextApiResponse<Item[]>) {

    res.status(200).json([{ id: "id", url: "url", rating: 5 }])
}