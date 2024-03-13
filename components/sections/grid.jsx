import {RenderSection} from ".";

const Grid = ({data}) => {
  if (!data.items) {
    return null;
  }

  return (
    <div className={`grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-2`}>
      {data?.items?.map((section) => (
        <RenderSection key={section._key} section={section} />
      ))}
    </div>
  );
};

export default Grid;
