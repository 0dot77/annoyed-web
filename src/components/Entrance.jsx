import styled from 'styled-components';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NoiseBox = styled.div`
  width: 100%;
  border: 1px solid red;
`;

function Noise() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
  });
  return <canvas ref={canvasRef}></canvas>;
}

export default function Entrance() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('.noise'), {
        height: 100,
        duration: 3,
      })
      .to(q('.noise'), {
        height: 150,
      })
      .to(q('.noise'), {
        height: 50,
      })
      .to(q('.noise'), {
        height: 100,
      })
      .to(q('.noise'), {
        height: 200,
      })
      .to(q('.noise'), {
        height: 150,
      })
      .to(q('.noise'), {
        height: 500,
      })
      .to(q('.noise'), {
        height: 400,
      })
      .to(q('.noise'), {
        height: `100%`,
      });
  }, []);

  return (
    <MainContainer ref={el}>
      <NoiseBox className="noise">
        <Noise />
      </NoiseBox>
    </MainContainer>
  );
}
