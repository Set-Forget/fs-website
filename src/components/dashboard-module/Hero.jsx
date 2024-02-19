const Hero = () => {
  return (
    <section className="h-full w-full flex flex-col justify-center">
      <div className="title-container flex justify-center items-center">
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
        <h1 className="text-8xl 2xl:text-9xl font-bold">
          &nbsp;Formula Studio&nbsp;
        </h1>
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
      </div>
      <div className="flex flex-col 2xl:flex-row justify-center items-center">
        <h2 className="text-4xl max-w-[25ch] mt-8">
          Code formulas with ChatGPT.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
