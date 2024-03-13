import {revalidateTag} from "next/cache";
import {NextResponse} from "next/server";
import {parseBody} from "next-sanity/webhook";

export const runtime = "edge";

const handler = async (req) => {
  try {
    const {body, isValidSignature} = await parseBody(req, "6fa323aed948cd33167cbd21c84f1d2e");
    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(message, {status: 401});
    }

    if (!body?._type) {
      return new Response("Bad Request", {status: 400});
    }

    revalidateTag(body._type);

    if (body.slug) {
      revalidateTag(`${body._type}:${body.slug}`);
    }
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err) {
    console.error(err);
    return new Response(err.message, {status: 500});
  }
};

export {handler as POST};
