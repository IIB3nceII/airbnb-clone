import Image from "next/image";
import { FC, useState } from "react";
import s from "./Header.module.scss";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

interface ISelectionRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const Header: FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
  const selectionRange: ISelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges): void => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className={s.header_search_icon} />
      </div>

      <div className={s.header_usernav}>
        <p>Become a host</p>
        <GlobeAltIcon className={s.header_usernav_globeAltIcon} />

        <div className={s.header_usernav_menu}>
          <MenuIcon className={s.header_usernav_menu_menuIcon} />
          <UserCircleIcon className={s.header_usernav_menu_userCircleIcon} />
        </div>
      </div>

      {searchInput && (
        <div className={s.header_dateRangePicker}>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className={s.header_dateRangePicker_guests}>
            <h2>Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              className={s.header_dateRangePicker_guests_input}
              type="number"
              min={1}
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(+e.target.value)}
            />
          </div>

          <div className={s.header_dateRangePicker_buttonContainer}>
            <button type="button" onChange={() => setSearchInput("")}>
              Cancel
            </button>
            <button type="button">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
