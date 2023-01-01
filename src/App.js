import "./App.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Fragment, useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".square", {
      // x: 1000,
      duration: 8,
      scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none",
        pin: ".square",
        pinSpacing: true,
        // play, pause ,resume, reverse,restart, reset, complete, none
        //   onenter, onleave, onEnterback, onLeaveback
        markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "3rem",
        },
      },
    });
  }, []);

  return (
    <Fragment>
      <div className="div1"></div>
      <div className="div2">
        <div className="square"></div>
        <div className="square2"></div>
      </div>
    </Fragment>
  );
}

export default App;
