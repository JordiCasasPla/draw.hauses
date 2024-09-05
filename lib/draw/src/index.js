import Tools from "./tools";
import Draw from "./draws";

class HausesDraw {
  constructor(canvas = null, width, height, theme = "light") {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.context = this.canvas.getContext("2d");
    this.color = theme === "light" ? "#000" : "#fff";
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;

    this.tools = new Tools();
    this.draws = new Draw();
    this.buffer = [];
    this.canvas.onmousedown = this.onMouseDown.bind(this);
    this.canvas.onmousemove = this.onMouseMove.bind(this);
    this.canvas.onmouseup = this.onMouseUp.bind(this);
  }

  getMouseCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  pushMouse(e) {
    const coords = this.getMouseCoords(e);
    this.buffer.push(coords);
    return coords;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  setTheme(theme) {
    this.color = theme === "light" ? "#000" : "#fff";
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
  }

  setTool(tool) {
    this.tools.setTool(tool);
  }

  getTools() {
    return this.tools.getTools();
  }

  getActiveTool() {
    return this.tools.getActiveTool();
  }

  draw() {
    this.draws.draw(this.context);
  }

  clear() {
    this.draws.clear();
  }

  getDraws() {
    return this.draws;
  }

  setDraws(draws) {
    this.draws = draws;
  }

  onMouseDown(e) {
    this.buffer = [];
    const mouse = this.pushMouse(e);
  }

  onMouseMove(e) {
    const mouse = this.getMouseCoords(e);
    this.draws.clearCanvas(this.context, this.width, this.height);
    this.draw();
    if (this.buffer.length === 1) {
      const tempBuffer = [...this.buffer, mouse];
      this.draws.helperDraw(this.context, tempBuffer);
    }
  }

  onMouseUp(e) {
    const mouse = this.pushMouse(e);
    console.log(this.getActiveTool());
    if (this.getActiveTool()) {
      this.draws.add([...this.buffer, mouse], this.getActiveTool());
    }
  }
}

export default HausesDraw;
