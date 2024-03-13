const getSize = (size) => {
  switch (size) {
    case "small":
      return 4;

    case "medium":
      return 6;

    case "large":
      return 8;

    case "xlarge":
      return 10;

    default:
      return 6;
  }
};

const Spacer = ({data}) => {
  const padding = getSize(data?.size ?? "medium");

  return <div className={`py-${padding} bg-transparent`} />;
};

export default Spacer;
