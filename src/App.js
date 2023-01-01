import "./App.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Fragment, useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".square", {
      // x: 700,
      duration: 3,
      scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: () => `+=${document.querySelector(".square").offsetHeight}`,
        markers: true,
        toggleClass: "red",
      },
    });
  }, []);

  return (
    <Fragment>
      <div className="div1"></div>
      <div className="div2">
        <div className="square"></div>
      </div>
    </Fragment>
  );
}

export default App;
