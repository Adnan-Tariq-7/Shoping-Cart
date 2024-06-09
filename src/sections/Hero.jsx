import { image1 } from "../assets/images";
import { Button } from "../components";

const Hero = () => {
  return (
    <section id="home" className="padding-x ">
      <div className="wrapper flex gap-5 h-[80%] max-lg:py-6 py-4 items-center max-sm:flex-col">
        <div className="left flex-1">
          <h1 className="flex flex-col text-5xl md:text-6xl lg:text-8xl text-slate-gray dark:text-dark-slate-gray">
            Online <span className="font-bold text-primary">SHOPING</span>{" "}
            Center
          </h1>
          <p className="text-slate-gray max-w-lg pt-4 pb-4 md:pt-6 md:pb-5 lg:pt-6 lg:pb-8 max-lg:text-xs dark:text-dark-slate-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quisquam obcaecati accusantium, placeat fugiat
            repudiandae perspiciatis repellendus quas nobis odit!
          </p>

          <Button name={"Shop Now"} />
        </div>
        <div className="right flex-1">
          <img src={image1} alt="Hero Image" className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
