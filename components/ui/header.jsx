import Link from "next/link";
import Image from "next/image";
import MainNavigation from "./main-navigation";

const Header = ({siteSettings}) => {
  return (
    <header className="mx-auto flex h-16 max-w-5xl flex-row items-center border-b border-b-slate-200 px-8">
      <Link href="/">
        <Image src="/logo-3.svg" alt="logo" height={100} width={150} />
      </Link>
      <MainNavigation navigation={siteSettings.navigation} />
    </header>
  );
};

export default Header;
