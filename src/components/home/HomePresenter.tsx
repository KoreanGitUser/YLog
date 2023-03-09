import React from "react";
import styled from "styled-components";

interface PresenterProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const HomePresenter = ({ canvasRef }: PresenterProps) => {
  return <Canvas />;
};

const Canvas = styled.canvas`
  display: block;
  background: #eee;
`;

export default HomePresenter;
