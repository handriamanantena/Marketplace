import {NextApiRequest, NextApiResponse} from "next";

export interface methods {
    GET?: (req: NextApiRequest, res: NextApiResponse) => {},
    POST?: (req: NextApiRequest, res: NextApiResponse) => {},
    PUT?: (req: NextApiRequest, res: NextApiResponse) => {}
}


export default async function httpHandler(req: NextApiRequest, res: NextApiResponse, handlers: methods) {
    const { method } = req;

    try {
        switch (method) {
            case "GET":
                await handlers.GET(req, res);
                break;
            case "POST":
                await handlers.POST(req, res);
                break;
            case "PUT":
                await handlers.PUT(req, res);
                break;
            default:
                throwMethodNotAllowed(res, method, handlers);
        }
    } catch (error: any) {
        res.status(400).json({
            error: {
                message: error.message,
            },
        });
    }
}

function throwMethodNotAllowed(res: NextApiResponse, method, handlers) {
    
}