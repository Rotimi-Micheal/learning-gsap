import "./App.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Fragment, useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".box",
      start: "top 80%",
      end: "top 50%",
      markers: true,
      onUpdate: (self) => console.log(self),
      // onEnter: () => console.log("enter"),
      // onLeave: () => console.log("leave"),
      // onEnterBack: () => console.log("enterBack"),
      // onLeaveBack: () => console.log("leaveBack"),
    });
  }, []);

  return (
    <Fragment>
      <div className="panel"></div>

      <div className="box"></div>
      <div className="panel"></div>
    </Fragment>
  );
}

export default App;

// useLayoutEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.to(".square", {
//     // x: 1000,
//     duration: 8,
//     scrollTrigger: {
//       trigger: ".square2",
//       start: "top 80%",
//       end: "top 30%",
//       scrub: 4,
//       toggleActions: "restart none none none",
//       pin: ".square",
//       pinSpacing: true,
//       // play, pause ,resume, reverse,restart, reset, complete, none
//       //   onenter, onleave, onEnterback, onLeaveback
//       markers: {
//         startColor: "purple",
//         endColor: "fuchsia",
//         fontSize: "3rem",
//       },
//     },
//   });
// }, []);
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     markers: true,
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 1,
//   },
// });

// tl.to(".box", { x: 500, duration: 5 })
//   .to(".box", { y: 200, duration: 2 })
//   .to(".box", { x: 0, duration: 5 })
//   .to(".box", { y: 0, duration: 2 });

// ScrollTrigger.create({
//   markers: true,
//   start: "top 5%",
//   trigger: ".panel",
//   toggleClass: { targets: "nav", className: "nav-active" },
// });

{
  /* <nav>
  <ul>
    <li>home</li>
    <li>about</li>
    <li>contact</li>
  </ul>
</nav>
<div className="panel">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    felis eros, varius vitae lacus ac, convallis porta ex. Donec vitae
    tincidunt nisi, at molestie enim. Praesent vehicula lacus vitae sapien
    elementum, a condimentum metus placerat. Fusce tempus condimentum
    ipsum at pellentesque. Sed nec rhoncus turpis, at interdum purus.
    Phasellus nec nisl dolor. Maecenas id lacus quis nibh tempor tempor.
    Duis ut aliquet leo, lacinia dignissim lectus. Suspendisse accumsan
    quam dolor, sed pellentesque leo fringilla vel. Mauris at sapien eros.
    Vestibulum convallis luctus nunc vel fringilla. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia curae;
    Phasellus efficitur lacus eu posuere scelerisque. Proin pharetra felis
    sit amet tortor feugiat, sit amet euismod justo volutpat. Aenean
    bibendum ligula eget venenatis feugiat. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas.
    Mauris mi orci, volutpat in finibus in, posuere sed risus. Nunc ut
    felis at felis tincidunt pretium id pharetra tortor. Aenean pretium a
    justo ac imperdiet. Aliquam est risus, feugiat at ex dignissim,
    hendrerit rhoncus ligula. Mauris vulputate consequat pulvinar.
    Vestibulum sed sem est. Phasellus ut lacinia urna, ac faucibus justo.
    Praesent ipsum nisi, pellentesque sit amet tincidunt a, pretium at
    arcu. Sed egestas ex turpis. Proin sit amet vulputate metus. Nullam
    nunc urna, consectetur eget ultricies quis, luctus id tellus. Nunc
    dapibus dolor a ipsum euismod accumsan. Etiam ut diam consectetur,
    interdum lectus vel, elementum purus. Fusce pulvinar feugiat
    facilisis. Nulla venenatis elementum eros nec consectetur. Nullam
    malesuada augue vel faucibus ornare. Donec non nisi porttitor nulla
    sodales tristique. Sed hendrerit metus lorem, ut mattis felis
    tincidunt sed. Vivamus tempus at felis sed interdum. Sed eget
    sollicitudin dolor. Curabitur tincidunt faucibus eros. Nullam
    facilisis massa non mattis imperdiet. Duis at fringilla risus. Mauris
    ultrices posuere nibh, in eleifend nisi luctus mattis. Vivamus eget
    odio venenatis, ornare velit sed, commodo lectus. Curabitur
    scelerisque ac nibh sed consequat. Aenean nec sem id nulla commodo
    rhoncus id et quam. In ut sem scelerisque, vulputate mi vitae,
    ultricies mauris. Phasellus vel felis ullamcorper, volutpat eros sit
    amet, tincidunt tortor. Nulla lectus metus, semper eget laoreet sit
    amet, ultricies in lectus. Phasellus mi ante, tempor et mattis ut,
    viverra quis eros. Nullam nec eleifend erat. Sed vestibulum lorem
    arcu, lobortis sodales sem placerat in. Sed quis sollicitudin nisi.
    Sed aliquet pretium ex ut ultrices. Donec pulvinar felis tempus risus
    dictum vestibulum. Suspendisse lorem ipsum, gravida et porttitor ac,
    dapibus in metus. Nulla ornare sagittis elit, vitae finibus nisl
    faucibus non. Nullam vel justo in arcu hendrerit hendrerit et at nisl.
    Nulla lorem mauris, consectetur vel enim vel, viverra iaculis est. In
    in ex enim. Suspendisse urna velit, viverra at enim non, rutrum
    bibendum ante. Quisque non maximus mauris, id tincidunt tellus.
    Aliquam rhoncus massa ut leo vulputate, at scelerisque mauris
    interdum. Praesent euismod dapibus nibh vitae ultrices. Sed feugiat
    commodo viverra. Cras lorem metus, congue malesuada vulputate vitae,
    porttitor nec quam. Mauris tincidunt a elit vitae rutrum. Morbi augue
    erat, iaculis eu neque sed, efficitur congue libero. Nunc non libero
    quis turpis facilisis aliquet. Vestibulum vitae faucibus leo, vitae
    consequat ex. Integer auctor, nisi quis commodo posuere, turpis metus
    lobortis nulla, sed imperdiet lacus ipsum ut ante. Fusce aliquet quis
    magna quis aliquet. Pellentesque lorem lectus, fringilla eget
    ullamcorper ut, tempus at lorem. Nam congue neque ut diam vehicula
    porttitor. Etiam blandit ligula ut lacus viverra varius. Vestibulum
    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
    curae; Donec egestas quis velit vel eleifend.
  </p> */
}
