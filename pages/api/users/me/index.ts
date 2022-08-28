import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.method)
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id }
  });

  if (profile) {
    return res.json({
      ok: true,
      profile
    });
    
  } else {
    return res.json({
      ok: false,
      profile: {
        email: "",
        name: ""
      }
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
