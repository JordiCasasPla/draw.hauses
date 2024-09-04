import React, { useEffect, useRef, useState } from "react";
import './main.css';
import HausesDraw from '../lib/draw/src/index';
import { ToggleGroup,ToggleGroupItem } from "./components/ui/toggle-group";
import { Lock, Move, MousePointer, Square, Circle, Minus, Diamond, MoveRight, Text, Eraser } from "lucide-react";

export function Main() {
  const ref = useRef(null);
  const [tools, setTools] = useState<string[]>([]);
  const TOOLS : any = {
    'move': <Move />,
    'select': <MousePointer />,
    'rectangle': <Square />,
    'ellipse': <Circle />,
    'line': <Minus />,
    'diamond': <Diamond />,
    'arrow': <MoveRight />,
    'text': <Text />,
    'erase':<Eraser/>,
    'lock': <Lock/>,
  }

  useEffect(() => {
    if (ref.current) {
      const draw = new HausesDraw(ref.current);
      setTools(Object.values(draw.getTools()));
    }
  }
  , [ref]);

  console.log(tools)
  
  return (
    <div className="w-screen h-screen relative">
     <canvas ref={ref} width="800" height="600"/>
     <div className='absolute top-5 left-1/2 transform -translate-x-1/2 bg-muted rounded-md z-40 w-fit'>
     <ToggleGroup  type='single'>
        {tools.map((tool) => (
          <ToggleGroupItem value={tool} key={tool}>
            {TOOLS[tool]}
          </ToggleGroupItem>
        ))}
     </ToggleGroup>
      </div>
    </div>
  );
}
