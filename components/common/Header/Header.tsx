import Image from "next/image";
import { FC } from "react";
import s from "./Header.module.scss";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header_logo}>
        <Image
          src="https://links.papareact.com/qd3"
          alt="LOGO"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className={s.header_search}>
        <input
          className={s.header_search_input}
          type="text"
          placeholder="Search"
        />
        <SearchIcon className={s.header_search_icon} />
      </div>

      <div className={s.header_usernav}>
        <p>Become a host</p>
        <GlobeAltIcon className={s.header_usernav_globealticon} />

        <div className={s.header_usernav_menu}>
          <MenuIcon className={s.header_usernav_menu_menuicon} />
          <UserCircleIcon className={s.header_usernav_menu_usercircleicon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
