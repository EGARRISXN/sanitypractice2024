import {RiArticleLine} from "react-icons/ri";

export const PostMenuItem = (S) =>
  S.listItem()
    .title("Posts")
    .icon(RiArticleLine)
    .child(S.documentTypeList("post").title("Posts").filter("_type == $type").params({type: "post"}));
