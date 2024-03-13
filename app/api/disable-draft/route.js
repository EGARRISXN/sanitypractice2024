import {draftMode} from "next/headers";
import {NextResponse} from "next/server";

export const runtime = "edge";

const handler = (req) => {
  draftMode().disable();
  const url = new URL(req.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
};

export {handler as GET};