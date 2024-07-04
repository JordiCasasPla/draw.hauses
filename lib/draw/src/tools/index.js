class Tools {
  constructor() {
    this.tool = null;
    this.tools = {
      lock: "lock",
      select: "select",
      move: "move",
      rectangle: "rectangle",
      ellipse: "ellipse",
      line: "line",
      diamond: "diamond",
      arrow: "arrow",
      text: "text",
      erase: "erase",
    };
  }

  setTool(tool) {
    if (!Object.values(this.tools).includes(tool)) {
      this.tool = tool;
    } else {
      throw new Error(`Tool ${tool} not found`);
    }
  }

  getTools() {
    return this.tools;
  }

  getActiveTool() {
    return this.tool;
  }
}

export default Tools;