import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const tweets = await client.tweets.findMany({
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
        },
      },
    orderBy: {
      id: "desc"
    }
    });

    if (tweets) {
      return res.json({
        ok: true,
        tweets
      });
      
    } else {
      return res.json({
        ok: false,
        tweets: []
      });
    }
  } else {

    console.log(req.method)
    console.log("post!?")
    const { content } = req.body;

    const tweets = await client.tweets.create({
      data: {
        content: content,
        userId: req.session.user?.id!,
        tweetsId:  0
      }
    })
  
    return res.json({
      ok: true,
      tweets: [tweets]
    });
  }
}

  

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
