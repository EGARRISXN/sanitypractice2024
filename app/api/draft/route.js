import {validatePreviewUrl} from "@sanity/preview-url-secret";
import {draftMode} from "next/headers";
import {redirect} from "next/navigation";
import {client} from "@/lib/sanity/client";
import {token} from "@/lib/sanity/token";

const clientWithToken = client.withConfig({token});

export const runtime = "edge";

const handler = async (req) => {
  const {isValid, redirectTo = "/"} = await validatePreviewUrl(clientWithToken, req.url);

  if (!isValid) {
    return new Response("Invalid secret", {status: 401});
  }

  draftMode().enable();
  redirect(redirectTo);
};

export {handler as GET};