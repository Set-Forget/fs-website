import UserSession from "./UserSession";

export default function Navbar() {
  return (
    <section className="flex w-full justify-start items-center bg-fsblack text-white space-x-4 border-b border-[#222222] px-6">
      <div className="flex flex-row w-full h-16 items-center justify-left bg-fsblack text-white space-x-4">
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
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
          />
        </svg>
        <p className="capitalize text-sm">Home</p>
      </div>
      <div>
        <UserSession/>
      </div>
    </section>
  );
}
