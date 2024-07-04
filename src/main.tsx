import { useRef } from "react";
import './main.css'

export function Main() {
  const ref = useRef<HTMLCanvasElement>(null);
  return (
    <div className="w-screen h-screen">
      <canvas ref={ref} className='w-full h-full'/>
    </div>
  );
}
