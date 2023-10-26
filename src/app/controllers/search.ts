import type { NextApiRequest, NextApiResponse } from 'next'


const get = function (
    req: NextApiRequest,
    res: NextApiResponse,
) {
    return res.send(`Hello World`);
};

const post = function (
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // handle post request
};

const methodsMap = {
    get,
    post,
};

export default function searchController(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const method = req.method.toLowerCase();

    if (!method in methodsMap) {
        return res.status(501).end();
    }

    return methodsMap[method](req, res);
}