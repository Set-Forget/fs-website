import GoogleBtn from "./GoogleBtn";

const Login = () => {

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
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Login;
