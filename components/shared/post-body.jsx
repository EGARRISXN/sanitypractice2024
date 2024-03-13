import {PortableText} from "@portabletext/react";

const PostBody = ({content}) => {
  if (!content?.text) {
    return null;
  }

  return (
    <div className={`max-w-2xl`}>
      <PortableText value={content.text} />
    </div>
  );
};

export default PostBody;
