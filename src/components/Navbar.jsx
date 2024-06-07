import UserSession from "./UserSession";
import logo from '../assets/formula-logo.png'

export default function Navbar() {
  return (
    <section className="flex w-full justify-start items-center bg-fsblack text-white space-x-4 border-b border-[#222222] px-6">
      <div className="flex flex-row w-full h-16 items-center justify-left bg-fsblack text-white space-x-4">
        <img src={logo} alt="formula studio logo" width={40} className="rounded border border-gray-600"/>
      </div>
      <div>
        <UserSession/>
      </div>
    </section>
  );
}
