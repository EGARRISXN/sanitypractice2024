import Link from "next/link";
import Image from "next/image";
import MainNavigation from "./main-navigation";

const Header = ({siteSettings}) => {
  return (
    <header className="mx-auto flex h-16 max-w-5xl flex-row items-center border-b border-b-slate-200 px-8">
      <Link href="/">
        <Image src="/favicon.ico" alt="logo" height={40} width={40} />
      </Link>
      <MainNavigation navigation={siteSettings.navigation} />
    </header>
  );
};

export default Header;
