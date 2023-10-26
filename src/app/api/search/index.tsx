import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
// import type { Recipe } from '../../../interfaces'

/* 
TO-DO:
- import recipe results
*/


/* export default function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.send(`Hello World`);
} */


// GET /api/search?q=:q
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // 'q' = search "query"
  const { q } = req.query
  const results = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: Array.isArray(q)
              ? q[0]
              : q,
          },
        },
        {
          content: {
            contains: Array.isArray(q)
              ? q[0]
              : q,
          },
        },
      ],
    },
  })
  return res.json(results)
}
