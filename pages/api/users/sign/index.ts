import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {

  const { phone, name, email } = req.body;
  // const user = phone ? { phone } : email ? { email } : null;
  const user = { email, name, phone }
  if (!user) return res.status(400).json({ ok: false });
  
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            email: email,
          },
          create: {
            ...user,
          },
        },
      },
    },
  });

  return res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false
  })
);
