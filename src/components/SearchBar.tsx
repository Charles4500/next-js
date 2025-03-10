import { cn } from '@/utils/cn';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

function SearchBar(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        'flex relative items-center justify-center h-10',
        props.className
      )}
    >
      <input
        type="text"
        placeholder="Search location.."
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-green-500 h-full"
        value={props.value}
        onChange={props.onChange}
      />
      <button className="px-4 py-[9px] bg-green-700 text-white rounded-r-md focus:outline-none hover:bg-green-900  h-full">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchBar;
