import { IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieConfig: IronSessionOptions = {
  cookieName: "twitterclonesession",
  password: "C4sT3LrJMbh.qAnnFTi4C4sT3LrJMbh.qAnnFTi4C4sT3LrJMbh.qAnnFTi4C4sT3LrJMbh.qAnnFTi4"
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieConfig);
}

export function withSsrSession(handler: any) {
  return withIronSessionSsr(handler, cookieConfig);
}
