import { useRef, useEffect } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleCanvasResize = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;

      // canvas full screen
      window.addEventListener("resize", handleCanvasResize);
      handleCanvasResize();

      let x = canvas.width / 2;
      let y = canvas.height - 30;

      const dx = 2;
      const dy = -2;

      const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI * 2);
        context.fillStyle = "green";
        context.fill();
        context.closePath();

        x += dx;
        y += dy;
      };

      setInterval(draw, 10);
    }
    return () => {
      window.removeEventListener("resize", handleCanvasResize);
    };
  }, [canvasRef]);
  return <HomePresenter canvasRef={canvasRef} />;
};

export default HomeContainer;
