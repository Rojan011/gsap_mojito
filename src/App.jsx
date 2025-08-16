import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
//only required once so use it in the App
gsap.registerEffect(ScrollTrigger, SplitText);
import React from "react";

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className=" text-3xl text-indigo-300">Hello,GSAP!</h1>
    </div>
  );
};

export default App;
