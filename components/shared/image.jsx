import {urlForImage} from "@/lib/sanity/image";
import Image from "next/image";

const ImageComponent = (props) => {
  const {data: source, priority, height = 1000, width = 1200} = props;
  const imageUrl = source && urlForImage(source)?.height(height).width(width).fit("crop").url();

  const image = imageUrl ? (
    <div className="shadow-small hover:shadow-medium transition-shadow duration-200">
      <Image
        className="h-auto w-full rounded-md"
        width={1200}
        height={1000}
        alt={`Image for ${source.alt}`}
        src={imageUrl}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{paddingTop: "50%", backgroundColor: "#ddd"}} />
  );

  return <div className="sm:mx-0">{image}</div>;
};

export default ImageComponent;
