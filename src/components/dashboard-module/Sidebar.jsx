import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { LoadingContext } from "../../context/LoadingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { setUser } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);

  return (
    <div className="bg-fsblack text-fswhite min-h-screen sm:w-1/3 2xl:w-1/5">
      <div className="logo container flex text-xl p-8">
        <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
        <h1 className="font-bold">&nbsp;Formula Studio&nbsp;</h1>
        <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
      </div>

      <nav className="flex flex-col p-8 justify-between">
        <ul className="space-y-8 text-xl font-bold">
          <li className="hover:translate-x-3 transition-transform">
            <Link to="/home" className="flex items-center">
              <FontAwesomeIcon icon={faHouse} className="w-6 mr-3" />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex cursor-pointer hover:translate-x-3 transition-transform">
            <button
              onClick={handleSignOut}
              className="flex items-center text-xl font-bold"
            >
              <FontAwesomeIcon icon={faSignOut} className="w-6 mr-3" />
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  function handleSignOut() {
    localStorage.clear();
    setLoading(false);
    setUser("");
  }
};

export default Sidebar;
