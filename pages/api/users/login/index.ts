import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;

  const user = await client.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    return res.json({
      ok: false,
      error: "사용자를 찾을 수 없습니다."
    });
  } else {
    req.session.user = {
      id: user.id
    };

    await req.session.save();

    return res.json({
      ok: true
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    isPrivate: false,
    handler,
  })
);
