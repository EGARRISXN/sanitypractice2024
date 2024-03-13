const MaxWidthWrapper = ({className, type, children}) => {
  const ElementType = type || "div";

  return <ElementType className={`mx-auto max-w-5xl px-8 ${className}`}>{children}</ElementType>;
};

export default MaxWidthWrapper;
