import {draftMode} from "next/headers";
import {redirect} from "next/navigation";
import {validatePreviewUrl} from "@sanity/preview-url-secret";
import {client} from "@/lib/sanity/client";
import {token} from "@/lib/sanity/token";

const clientWithToken = client.withConfig({token});

const handler = async (req) => {
  const {isValid, redirectTo = "/", studioOrigin} = await validatePreviewUrl(clientWithToken, req.url);

  if (studioOrigin === "http://localhost:3000") {
    console.log("This preview was initiated from the local development Studio");
  }
  if (!isValid) {
    return new Response("Invalid secret", {status: 401});
  }

  draftMode().enable();
  redirect(redirectTo);
};

export {handler as GET};
