import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { LoadingContext } from "../../context/LoadingContext";
import { LoadingIcon } from "../Icons";
import { API_URL } from "../../utils/constants";
import GoogleBtn from "./GoogleBtn";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!response) return;
    const { userData } = response;
    if (!userData) {
      setError("Couldn't find your account.");
      return;
    }
    const id = userData[0];
    const _id = sessionStorage.getItem("id");
    if (String(_id) !== String(id)) {
      setError("You need to first log in with google");
      return;
    }
    const token = userData[3];
    setUser({ access_token: token });
  }, [response, setUser]);

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-col flex-1 px-4 p-y-12 my-24 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="logo container flex text-4xl justify-center">
            <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
            <h1 className="font-bold">&nbsp;Formula Studio&nbsp;</h1>
            <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
          </div>
          <div className="mt-10 max-w-sm pt-[40px] pl-[40px] pr-[40px] pb-[16px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-[250px] m-auto">
              <h2 className="mb-2 text-xl text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Log in
              </h2>
              <div className="mt-6 flex w-full justify-center">
                <GoogleBtn />
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="block text-md leading-6 text-neutral-800 dark:text-neutral-50"
                  >
                    Log in with your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChangeEmail}
                    required
                    className="mt-4 px-4 block w-full focus-visible:outline-none rounded-full border py-1.5 shadow-sm text-neutral-800 dark:text-neutral-50 sm:text-sm sm:leading-6 bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {loading && <LoadingIcon />}
                    CONTINUE
                  </span>
                </button>
                {error && (
                  <p
                    className="block text-red-400 text-center my-2 relative"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const isValidEmail = checkEmail();
    if (!isValidEmail) return;
    const url = `${API_URL}?action=getUserByEmail&email=${email}`;
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      const resJson = await response.json();
      if (!resJson) return;
      setResponse(resJson);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function checkEmail() {
    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regExp.test(email);
  }
};

export default Login;
