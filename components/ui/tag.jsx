const Tag = ({children}) => {
  return (
    <span className="mx-1 inline-block whitespace-nowrap rounded-md bg-gray-100 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-gray-700">
      {children}
    </span>
  );
};

export default Tag;
