class Shape {
  constructor(
    x,
    y,
    width,
    height,
    points = [],
    type = "rectangle",
    theme = "light"
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.angle = 0;
    this.strokeWidth = 2;
    this.strokeColor = theme === "light" ? "#000" : "#fff";
    this.strokeStyle = "solid";
    this.background = theme === "light" ? "transparent" : "#000";
    this.points = points;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type.toLowerCase();
    this.color = theme === "light" ? "#000" : "#fff";
    this.text = "";
    this.locked = false;
    this.round = false;
    this.selected = false;
    this.group = [];
  }

  beforeDraw(context) {
    // set the sttroke width
    context.lineWidth = this.strokeWidth;
    // set the stroke color
    context.strokeStyle = this.strokeColor;
    context.fillStyle = this.background;
  }
  draw(context) {
    throw new Error("You have to implement the method draw!");
  }

  drawCoords = (context) => {
    throw new Error("You have to implement the method drawCoords!");
  };

  drawSelected = (context, shape) => {
    // Set styles for selection
    context.strokeStyle = "#00F"; // Blue color for the selection outline
    context.fillStyle = "#00F"; // Blue color for the circles

    // Draw rectangle around the shape
    context.strokeRect(shape.x, shape.y, shape.width, shape.height);

    // Function to draw a circle
    const drawCircle = (x, y, radius = 3) => {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fill();
    };

    // Middle of the shape
    const centerX = shape.x + shape.width / 2;
    const centerY = shape.y + shape.height / 2;
    drawCircle(centerX, centerY);

    // Corners of the shape
    const corners = [
      { x: shape.x, y: shape.y }, // Top-left
      { x: shape.x + shape.width, y: shape.y }, // Top-right
      { x: shape.x, y: shape.y + shape.height }, // Bottom-left
      { x: shape.x + shape.width, y: shape.y + shape.height }, // Bottom-right
    ];

    // Midpoints of the edges
    const midpoints = [
      { x: centerX, y: shape.y }, // Top-middle
      { x: shape.x + shape.width, y: centerY }, // Right-middle
      { x: centerX, y: shape.y + shape.height }, // Bottom-middle
      { x: shape.x, y: centerY }, // Left-middle
    ];

    // Draw circles at corners and midpoints
    [...corners, ...midpoints].forEach((point) => drawCircle(point.x, point.y));
  };

  move = (x, y) => {
    this.x = x;
    this.y = y;
  };

  resize = (x, y) => {
    this.width = x;
    this.height = y;
  };

  rotate = (angle) => {
    this.angle = angle;
  };

  cursorInShape = (x, y) => {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  };

  area = () => {
    return this.width * this.height;
  };

  setStrokeWidth(width) {
    this.strokeWidth = width;
  }

  setStrokeColor(color) {
    this.strokeColor = color;
  }

  setStrokeStyle(style) {
    this.strokeStyle = style;
  }

  setBackground(color) {
    this.background = color;
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  setLocked(locked) {
    this.locked = locked;
  }

  setRound(round) {
    this.round = round;
  }

  setSelected(selected) {
    this.selected = selected;
  }

  setGroup(group) {
    this.group = group;
  }

  setAngle(angle) {
    this.angle = angle;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export default Shape;
