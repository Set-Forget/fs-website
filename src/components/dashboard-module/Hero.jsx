import demo from "../../assets/demo.gif";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 mt-8 text-white">
      <div className="flex">
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
        <h1 className="text-8xl 2xl:text-9xl font-bold">
          &nbsp;Formula Studio&nbsp;
        </h1>
        <p className="text-8xl 2xl:text-9xl font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
      </div>
      <h2 className="text-4xl max-w-[25ch]">Code formulas with ChatGPT</h2>
      <div className="flex flex-col items-center">
        <p className="text-lg">
        Create and edit formulas seamlessly with chat GPT. Supported on Google Sheets, Excel Online and Notion
        </p>
      </div>
      <div className="flex w-1/2 justify-between">
        <a href="https://sheets.new" target="_blank" className="underline">
          Google Sheets
        </a>
        <a
          href="https://onedrive.live.com/"
          target="_blank"
          className="underline"
        >
          OneDrive Excel
        </a>
        <a href="https://www.notion.so/" target="_blank" className="underline">
          Notion
        </a>
      </div>
      <img src={demo} width={500} height={700} alt="demo example" />
    </section>
  );
};

export default Hero;
