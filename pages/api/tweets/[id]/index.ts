import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  
  if (req.method === "GET" && +id > 0) {
    const isLiked = Boolean(
    await client.likes.findFirst({
      where: {
        tweetId: +id,
        userId: req.session.user?.id,
      },
      select: {
        id: true,
      },
    })
    );
    
    const tweet = await client.tweets.findUnique({
      select: {
        id: true,
        content: true,
        createdAt: true,
        User: {
          select: {
            email: true,
            name: true,
          },
        },
        Likes: {
          select: {
            userId: true
          }
        }
      },
      where: {
        id: +id
      }
    });

    if (tweet == undefined) {
      return res.json({
        ok: true,
        tweet: null
      });
    
    } else {
      return res.json({
        ok: true,
        tweet,
        isLiked
      });
    }
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
