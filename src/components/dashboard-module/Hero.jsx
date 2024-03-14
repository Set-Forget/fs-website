const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 mt-16 text-white">
      <div className="flex">
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
        <h1 className="text-8xl 2xl:text-9xl font-bold">
          &nbsp;Formula Studio&nbsp;
        </h1>
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
      </div>
      <h2 className="text-4xl max-w-[25ch] mt-8">Code formulas with ChatGPT</h2>
      <div className="flex flex-col items-center gap-2 mt-8">
        <p className="text-lg">Thanks for create an account</p>
        <p className="text-lg">
          We are introducing a powerful tool designed to simplify your work in
          Google Sheets, OneDrive Excel, and Notion tables
        </p>
        <p className="text-lg">
          With the capability to generate formulas through ChatGPT, this plugin
          is built to make your life easier
        </p>
      </div>
    </section>
  );
};

export default Hero;
