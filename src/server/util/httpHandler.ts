import {NextApiRequest, NextApiResponse} from "next";

export interface methods {
    GET?: (req: NextApiRequest, res: NextApiResponse) => {},
    POST?: (req: NextApiRequest, res: NextApiResponse) => {},
    PUT?: (req: NextApiRequest, res: NextApiResponse) => {}
}


export default async function httpHandler(req: NextApiRequest, res: NextApiResponse, handlers: methods) {
    const { method } = req;

    if(handlers == undefined) {
        throwMethodNotAllowed(res, method!);
    }

    try {
        switch (method) {
            case "GET":
                await handlers.GET!(req, res);
                break;
            case "POST":
                await handlers.POST!(req, res);
                break;
            default:
                throwMethodNotAllowed(res, method);
        }
    } catch (error: any) {
        res.status(400).json({
            error: {
                message: error.message,
            },
        });
    }
}

function throwMethodNotAllowed(res: NextApiResponse, method : string) {
    res.status(405).json({
        error: {
            message: "method not allowed",
        },
    });
}