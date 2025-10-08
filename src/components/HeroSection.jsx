import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="space-y-4 mb-5">
        <h1 className="font-bold text-5xl leading-13">
          We Build <br />
          <span className="text-color">Productive</span> Apps
        </h1>
        <p className="!text-slate-600 text-sm max-w-3xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="space-x-4">
          <button className="btn">
            <img src="/playstore.png" alt="" />
            Google Play
          </button>
          <button className="btn">
            <img src="/appstore.png" alt="" />
            App Store
          </button>
        </div>
      </div>
      <div className="max-w-2xl">
        <img className="" src="/hero.png" alt="" />
      </div>

      <div className="bg-color w-full py-10">
        <h1 className="text-3xl !text-white font-semibold">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-8">
          <div>
            <div className="stat-title !text-white font-light">
              Total Downloads
            </div>
            <div className="stat-value !text-white">29.6M</div>
            <div className="stat-desc !text-white font-light">
              21% More Than Last Month
            </div>
          </div>

          <div>
            <div className="stat-title !text-white font-light">
              Total Reviews
            </div>
            <div className="stat-value !text-white">906K</div>
            <div className="stat-desc !text-white font-light">
              46% More Than Last Month
            </div>
          </div>

          <div>
            <div className="stat-title !text-white font-light">Acitve Apps</div>
            <div className="stat-value !text-white">132+</div>
            <div className="stat-desc !text-white font-light">
              31 More Will Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
