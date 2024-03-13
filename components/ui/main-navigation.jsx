"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {HiBars3} from "react-icons/hi2";
import {cn} from "@/lib/utils";

const resolveLink = (item) => {
  if (item._type === "externalLink" && item.slug?.current) {
    return {
      type: item._type,
      key: item._key,
      title: item.title,
      url: item.slug.current,
    };
  }

  if (item._type === "internalLink" && item.link?.slug?.current) {
    return {
      type: item._type,
      key: item._key,
      title: item.title,
      url: item.link.slug.current === "frontpage" ? "/" : `/${item.link.slug.current}`,
    };
  }

  return null;
};

const MainNavigation = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenState = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  if (!navigation) {
    return null;
  }

  return (
    <div className="ml-auto flex flex-wrap items-center justify-between bg-white px-4 py-4 text-lg md:py-0">
      <button className="ml-auto block md:hidden" onClick={toggleOpenState}>
        <HiBars3 />
      </button>
      <div className={cn("w-full md:flex md:w-auto md:items-center", isOpen ? "fixed inset-0 top-16 block" : "hidden")}>
        <nav className="relative w-full flex-col rounded-sm bg-white px-4 py-4 drop-shadow-md md:flex md:flex-row md:drop-shadow-none">
          {navigation.map((item) => {
            const link = resolveLink(item);

            if (!link || !link.url || !link.title) {
              return null;
            }

            return (
              <Link
                key={link.key}
                href={link.url}
                className="flex w-full items-center px-2 py-1 text-base font-medium hover:underline"
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
