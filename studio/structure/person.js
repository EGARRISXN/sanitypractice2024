import {RiUserSmileLine} from "react-icons/ri";

export const PersonMenuItem = (S) =>
  S.listItem()
    .title("Persons")
    .icon(RiUserSmileLine)
    .child(S.documentTypeList("person").title("Persons").filter("_type == $type").params({type: "person"}));
