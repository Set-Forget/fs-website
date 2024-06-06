import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { googleLogout } from '@react-oauth/google';
import { Popover } from '@headlessui/react';

export default function UserSession() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="flex h-16 shrink-0 items-center">
      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <img
          alt="user"
          className="aspect-square h-full w-full"
          src={user.picture}
        />
      </span>
      <span className="ml-4 ml truncate text-sm font-semibold leading-6 text-white">
        {user.name}
      </span>
      <Popover className="relative">
        <Popover.Button className="flex items-center justify-center ml-2 outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel className="absolute z-10 bg-white text-slate-700 p-1 rounded-lg right-0 top-10 py-2 px-4">
          <button className="flex gap-2 hover:text-slate-500" onClick={logOut}>
            Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
          </button>
        </Popover.Panel>
      </Popover>
    </div>
  );

  function logOut() {
    googleLogout();
    localStorage.clear();
    setUser({ email: null });
  }
}
