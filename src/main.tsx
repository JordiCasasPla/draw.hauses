import { useEffect, useRef } from "react";
import './main.css';
import HausesDraw from '../lib/draw/src/index';

export function Main() {
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current) {
      const draw = new HausesDraw(ref.current);
    }
  }
  , [ref]);
  
  return (
    <div className="w-screen h-screen">
     <canvas ref={ref} width="800" height="600"/>
    </div>
  );
}
