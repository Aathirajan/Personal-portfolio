import React from "react";

const About = () => {
  return (
    <div
      name="about"
      // bg-gradient-to-b from-[#00171F] via-[#00171f] to-[#043d50]
      className="w-full h-screen bg-[#00171F] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="font-signature text-xl mt-5">
          Hello world! I'm Aathi, a Full Stack Web Developer  who loves building cross-platform products and web apps. 
          I am interested in getting a developer role in an challenging environment.
          <br /> <br />
          <p className="text-xl">
            I have experience building and designing Full Stack applications
            using JavaScript, React and nodeJs. My goal to future is to leverage
            my experience in programming and to have something useful to leave behind.
             
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
