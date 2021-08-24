import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // To provide a range of selected dates to calender
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  // To select dates in calender
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Icon */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right - User Informations*/}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Calender and Guests */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
