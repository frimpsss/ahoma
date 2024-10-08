import logo from "../../assets/logo.svg";
import {
  GoHome,
  GoSearch,
  GoPlus,
  GoHeart,
  GoHomeFill,
  GoHeartFill,
} from "react-icons/go";
import { LuPin } from "react-icons/lu";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();
  const navItems: {
    icon: any;
    path?: string;
  }[] = [
    {
      icon: (p: any) => (
        <>{p.active ? <GoHomeFill {...p} /> : <GoHome {...p} />}</>
      ),
      path: "/",
    },
    {
      icon: (p: any) => (
        <>{p.active ? <RiSearchFill {...p} /> : <RiSearchLine {...p} />}</>
      ),
      path: "/search",
    },
    {
      icon: (p: any) => (
        <>{!p.active ? <FaPlus {...p} /> : <GoPlus {...p} />}</>
      ),
    },
    {
      icon: (p: any) => (
        <>{p.active ? <GoHeartFill {...p} /> : <GoHeart {...p} />}</>
      ),
      path: "/activity",
    },
    {
      icon: (p: any) => (
        <>{p.active ? <FaUser {...p} /> : <FaRegUser {...p} />}</>
      ),
      path: "/profile",
    },
  ];
  return (
    <nav className="px-2 pt-2 pb-4 fixed left-0 top-0  h-screen overflow-hidden flex justify-between flex-col z-[1000]">
      <div className="grid place-items-center p-3">
        <img src={logo} alt="logo" className="h-8" />
      </div>

      <div className="flex items-center justify-center flex-col gap-8">
        {navItems.map((value: { icon: any; path: string }, index: number) => {
          return (
            <div key={value.path} className="cursor-pointer">
              <div
                className={`hover:bg-fainted-black px-4 py-2 rounded-md ${
                  !value.path && "bg-fainted-black"
                }`}
              >
                {value.icon({
                  // color:
                  //   pathname == value.path
                  //     ? "#000"
                  //     : !value.path
                  //     ? "rgb(153, 153, 153)"
                  //     : "#b8b8b8",
                  size: 24,
                  active: pathname == value.path,
                  className: ` ${
                    pathname == value.path
                      ? "text-black"
                      : !value.path
                      ? "text-plus"
                      : "text-ash"
                  }  ${!value.path && " hover:text-black "}`,
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center flex-col gap-4 mb-4 cursor-pointer">
        <LuPin
          size={34}
          className="text-ash hover:text-black duration-500  hover:bg-fainted-black p-1 rounded-md"
        />
        <BiMenuAltLeft
          size={34}
          className="text-ash hover:text-black duration-500  hover:bg-fainted-black p-1 rounded-md"
        />
      </div>
    </nav>
  );
};

export default Navbar;
