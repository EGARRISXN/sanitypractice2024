import {RenderSection} from "@/components/sections";

const CategoryPage = ({data}) => {
  return (
    <>
      {data?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </>
  );
};

export default CategoryPage;
