import { motion, useAnimation } from "framer-motion";

export default function Box5() {
  const control = useAnimation();

  const moveRightHandler = () => {
    control.start({
      x: 500,
      transition: { duration: 2 },
    });
  };

  const moveLeftHandler = () => {
    control.start({
      x: 0,
      transition: { duration: 2 },
    });
  };

  const squareHandler = () => {
    control.start({
      borderRadius: 0,
      transition: { duration: 2 },
    });
  };

  const circleHandler = () => {
    control.start({
      borderRadius: "50%",
      transition: { duration: 2 },
    });
  };

  const haltHandler = () => {
    control.stop();
  };

  return (
    <div className="box-container">
      <button onClick={moveRightHandler}>MOVE RIGHt</button>
      <button onClick={moveLeftHandler}>MOVE LEFT</button>
      <button onClick={circleHandler}>CIRCLE</button>
      <button onClick={squareHandler}>SQUARE</button>
      <button onClick={haltHandler}>HALT!!</button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
}
