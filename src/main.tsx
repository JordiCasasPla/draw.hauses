import React, { useEffect, useRef, useState } from "react";
import './main.css';
import HausesDraw from '../lib/draw/src/index';
import { ToggleGroup,ToggleGroupItem } from "./components/ui/toggle-group";
import { Lock, Move, MousePointer, Square, Circle, Minus, Diamond, MoveRight, Text, Eraser } from "lucide-react";
import { useWindowSize } from "@uidotdev/usehooks";

export function Main() {
  const ref = useRef(null);
  const [selectedTool, setSelectedTool] = useState<string>('move');
  const [hausesDraw, setHausesDraw] = useState<HausesDraw | null>(null);
  const size = useWindowSize();
  const [tools, setTools] = useState<string[]>([]);
  const TOOLS : any = {
    'move': <Move size={16}/>,
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
      const draw = new HausesDraw(ref.current,size.width, size.height);
      setTools(Object.values(draw.getTools()));
      setHausesDraw(draw);
    }
  }
  , [ref, size]);

  const handleSelect = (tool: string) => {
    if (hausesDraw) {
      hausesDraw.setTool(tool);
      setSelectedTool(tool);
    }
  }

 const handleChange = (value: string) => {
    console.log(value);
    handleSelect(value);
  } 
  return (
    <div className="w-screen h-screen relative">
     <canvas ref={ref} width={size.width || 800} height={size.height || 800}/>
     <div className='absolute top-5 left-1/2 transform -translate-x-1/2 bg-muted rounded-md z-40 w-fit'>
     <ToggleGroup  type='single' onValueChange={handleChange}>
        {tools.map((tool) => (
          <ToggleGroupItem value={tool} key={tool}>
            {TOOLS[tool]}
          </ToggleGroupItem>
        ))}
     </ToggleGroup>
      </div>
      <div>
      </div>
    </div>
  );
}
