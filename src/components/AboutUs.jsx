import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const AboutUs = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:gap-2 ml-12 pb-24">
        <div className="bg-yellow-50/40 rounded-full mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-red-800/10 w-3/4">
          <div className="grid grid-cols-4 h-full">
            <div className="bg-green-500 rounded-tl-full rounded-bl-full text-5xl text-white flex items-center justify-center col-span-1">
              BS
            </div>
            <div className="pb-10 p-5 col-span-3">
              <div className="text-2xl ">Brenda Soto</div>
              <div>Software Engineer</div>
              <div>
                <div className="pt-2 flex flex-row">
                  <a
                    href={"https://www.linkedin.com/in/brendasotoct/"}
                    target={"_blank"}
                  >
                    <div className="bg-blue-400 rounded p-1 hover:bg-black">
                      <Linkedin
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href={"https://github.com/BSoto85"} target={"_blank"}>
                    <div className="bg-purple-400 rounded p-1 ml-4 hover:bg-black">
                      <FiGithub
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href="mailto:bsoto@pursuit.org">
                    <div className="bg-red-400/80 rounded p-1 ml-4 hover:bg-black">
                      <Mail strokeWidth={2} className="text-white w-6 h-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50/40  rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-amber-500/10 w-3/4 ">
          <div className="grid grid-cols-4 h-full">
            <div className="bg-amber-500 rounded-tl-lg rounded-bl-lg text-5xl text-white flex items-center justify-center col-span-1">
              IA
            </div>
            <div className="pb-10 p-5 col-span-3">
              <div className="text-2xl">Isiah Arrufat</div>
              <div>Software Engineer</div>
              <div>
                <div className="pt-2 flex flex-row">
                  <a
                    href={
                      "https://www.linkedin.com/in/isiah-arrufat-508b04123/"
                    }
                    target={"_blank"}
                  >
                    <div className="bg-blue-400  rounded p-1 hover:bg-black">
                      <Linkedin
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href={"https://github.com/isiahArrufat"} target={"_blank"}>
                    <div className="bg-purple-400 rounded p-1 ml-4 hover:bg-black">
                      <FiGithub
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href="mailto:IsiahArrufat@pursuit.org">
                    <div className="bg-red-400/80 rounded p-1 ml-4 hover:bg-black">
                      <Mail strokeWidth={2} className="text-white w-6 h-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50/40  rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-emerald-800/10 w-3/4 ">
          <div className="grid grid-cols-4 h-full">
            <div className="bg-red-500 rounded-tl-lg rounded-bl-lg text-5xl text-white flex items-center justify-center col-span-1">
              AG
            </div>
            <div className="pb-10 p-5 col-span-3">
              <div className="text-2xl">Alexander Gonzalez</div>
              <div>Software Engineer</div>
              <div>
                <div className="pt-2 flex flex-row">
                  <a
                    href={
                      "https://www.linkedin.com/in/alexander-gonzalez-can-code/"
                    }
                    target={"_blank"}
                  >
                    <div className="bg-blue-400 rounded p-1 hover:bg-black">
                      <Linkedin
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href={"https://github.com/Alex-de-code"} target={"_blank"}>
                    <div className="bg-purple-400 rounded p-1 ml-4 hover:bg-black">
                      <FiGithub
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href="mailto:alexandergonzalez@pursuit.org">
                    <div className="bg-red-400/80 rounded p-1 ml-4 hover:bg-black">
                      <Mail strokeWidth={2} className="text-white w-6 h-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50/40 rounded-full mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-indigo-800/10 w-3/4 ">
          <div className="grid grid-cols-4 h-full">
            <div className="bg-blue-500 rounded-tl-full rounded-bl-full text-5xl text-white flex items-center justify-center col-span-1">
              IB
            </div>
            <div className="pb-10 p-5 col-span-3">
              <div className="text-2xl">Iris Beckham</div>
              <div>Software Engineer</div>
              <div>
                <div className="pt-2 flex flex-row">
                  <a
                    href={"https://www.linkedin.com/in/iris-beckham/"}
                    target={"_blank"}
                  >
                    <div className="bg-blue-400  rounded p-1 hover:bg-black">
                      <Linkedin
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href={"https://github.com/iris-beckham"} target={"_blank"}>
                    <div className="bg-purple-400 rounded p-1 ml-4 hover:bg-black">
                      <FiGithub
                        strokeWidth={2}
                        className="text-white w-6 h-6"
                      />
                    </div>
                  </a>
                  <a href="mailto:irisbeckham@pursuit.org">
                    <div className="bg-red-400/80 rounded p-1 ml-4 hover:bg-black">
                      <Mail strokeWidth={2} className="text-white w-6 h-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
