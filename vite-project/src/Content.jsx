import React from "react";
import leaf from "./assets/motionarteffect-img2.png";
import g2 from "./assets/motionarteffect-img1.png"
import wordpress from "./assets/motionarteffect-img3.png";
import stars from "./assets/motionarteffect-img4.png";
import wand from "./assets/motionarteffect-img5.png";
import section1 from "./assets/motionarteffect-img11.png";
import browsers from "./assets/motionarteffect-img8.png";
import zap from "./assets/motionarteffect-img9.png";
import blob from "./assets/motionarteffect-img6.png";
import crescent from "./assets/motionarteffect-img7.png";






const Content = () => {
  return (
    <main className="mt-20">
      <section className="">
        <h2 className="text-center text-2xl text-slate-300">
          Trusted by thousands of users around the world
        </h2>
        <div className="w-full space-x-4  flex justify-between px-5 mt-24">
          <div className="flex items-center space-x-4">
            <img src={leaf} alt="" />
            <div className="space-y-5">
                  <img src={stars} alt="" />
              <p className="font-sora text-slate-400 text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img src={g2} alt="" />
            <div className="space-y-5">
            <img src={stars} alt="" />
              <p className="font-sora text-slate-400 text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className="flex items-center  space-x-4">
            <img src={wordpress} alt="" />
            <div className="space-y-5">
              <img src={stars} alt="" />
              <p className="font-sora text-slate-400 text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </section>


      <section className=" px-2 flex mt-24 justify-between">
            <div className="w-[60%] space-y-5">
                  <h1 className="text-4xl font-sora font-[550] leading-[55px] ">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
                  <p className="text-gray-400 tracking-wide leading-[30px]">
                  Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                  </p>
                  <button className="purchasebtn tracking-wide font-sora">Purchase From Envato</button>
            </div>
            <div>
                  <img src={wand} alt="image of a wand" />
            </div>
      </section>
            <section className="mt-24 space-y-14 ">
                  <h1 className="text-center text-slate-300 text-4xl  font-[550] leading-[55px] ">
                        Apply On Any Section or Enable <br /> for Whole Page
                  </h1>
                  <div className="flex   justify-evenly">
                        <figure className="sectionbg p-6 w-[46vw] rounded-2xl space-y-5">
                              <h4 className="font-semibold text-3xl text-slate-300">Apply on Section</h4>
                              <p className="text-gray-400 tracking-wide leading-[30px]">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
                              <img src={section1} alt="" />
                        </figure>
                        <figure className="mt-16 sectionbg  p-10 w-[46vw] space-y-5 rounded-2xl">
                              <h4 className="font-semibold text-3xl text-slate-300">Apply on Page</h4>
                              <p className="text-gray-400 tracking-wide leading-[30px]">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
                              <img src={section1} alt="" />
                        </figure>

                  </div>
            </section>
            <section className=" mt-24 sectionbg mx-auto w-[95vw] rounded-2xl py-14  flex flex-col items-center justify-center space-y-6">
                  <h2 className="text-slate-300 font-[500] text-[1.7rem] font-sans">Supported by All Popular Browsers</h2>
                        <p className="text-gray-200 opacity-70 text-[1.1rem] w-[40%] text-center">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                        <img src={browsers} alt="" />

            </section>

            <section className="text-center mt-24">
                  <div className="mx-auto w-[55vw] space-y-6 ">
                        <h1 className=" text-slate-300 font-sora text-4xl tracking-wide font-semibold leading-[55px]">An All-Round Plugin With Powerful Features</h1>
                        <p className="w-[80%] mx-auto text-gray-200 opacity-70  tracking-wide leading-[28px]">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                  </div>
            </section>

            <section className="cards mt-24 w-screen space-x-5 px-4  flex ">
                  <figure className="space-y-10 py-6  rounded-2xl w-1/3 sectionbg">
                        <img src={zap} alt="" />
                        <div className= "space-y-5 mx-8">
                              <h3 className="text-slate-300 font-sora text-[1.5rem] tracking-wide font-semibold ">Light weight</h3>
                              <p className="w-[80%]  text-gray-200 opacity-70  tracking-wide leading-[28px]"> Motion Art for Elementor is designed to be lightweight.
                              </p>                        
                              </div>
                  </figure>
                  <figure className="space-y-10 py-6  rounded-2xl w-1/3 sectionbg">
                        <img src={blob} alt="" />
                        <div className="space-y-5 mx-8">
                              <h3 className="text-slate-300 font-sora text-[1.5rem] tracking-wide font-semibold ">100% Responsive</h3>
                              <p className="w-[80%]  text-gray-200 opacity-70  tracking-wide leading-[28px]"> Motion Art for Elementor is designed to be lightweight.
                              </p>                        
                              </div>
                        
                  </figure>

                  <figure className="space-y-10 py-6 rounded-2xl w-1/3 sectionbg">
                        <img src={crescent} alt="" />
                        <div className="space-y-5 mx-8">
                              <h3 className="text-slate-300 font-sora text-[1.4rem] tracking-wide font-semibold ">User Friendly Interface</h3>
                              <p className="w-[80%]  text-gray-200 opacity-70  tracking-wide leading-[28px]"> Motion Art for Elementor is designed to be lightweight.
                              </p>                        
                              </div>
                  </figure>
            </section>
    </main>
  );
};

export default Content;
