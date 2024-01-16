import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Toggle from "./toggle";
import googleLogo from "../../assets/google-mark.svg";

const SettingsMain = () => {
  const { user } = useContext(UserContext);
  const { name } = user;
  return (
    <div className="h-full bg-white text-fsblack">
      <div className="ui-container flex flex-col h-full w-full p-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Personal Settings</h1>
          <p className="text-xl my-4">Hi, {name}!</p>
        </div>

        <section className="integrations mt-16 space-y-4">
          <div className="flex justify-between items-center bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center">
              <img src={googleLogo} width={0} className="w-10 h-10 mr-8" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Google</p>
                <span>Integrate your Google Workspace ecosystem</span>
              </div>
            </div>
            <Toggle />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsMain;
