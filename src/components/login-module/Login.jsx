import GoogleBtn from "./GoogleBtn";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-col flex-1 px-4 p-y-12 my-24 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto">
          <div className="logo container flex text-4xl justify-center">
            <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
            <h1 className="font-bold">&nbsp;Formula Studio&nbsp;</h1>
            <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
          </div>
          <div className="mt-10 max-w-sm pt-[40px] pb-[32px] px-[32px] border rounded-lg shadow bg-gray-800 border-gray-700">
            <div className="max-w-[350px] m-auto">
              <h2 className="mb-12 text-lg text-center font-medium leading-tight text-neutral-50">
                Log in or Sign Up to use the extension
              </h2>
              <div className="mt-6 flex w-full justify-center">
                <GoogleBtn />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <a
              className="flex w-fit items-center justify-center gap-3 rounded-full mt-[40px] px-6 py-3 text-sm text-neutral-50 bg-gray-800 border border-solid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              href="https://chromewebstore.google.com/detail/formula-studio/kippcmdklcbfedimbifbdkkemfcejcna?hl"
            >
              Download Chrome Extension
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
