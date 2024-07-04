import Shape from "./index";

class Rectangle extends Shape {
  constructor(
    x,
    y,
    width,
    height,
    points,
    type = "rectangle",
    theme = "light"
  ) {
    super(x, y, width, height, points, type, theme);
  }

  draw(context) {
    context.beginPath();
    this.beforeDraw(context);
    context.rect(this.x, this.y, this.width, this.height);
    context.closePath();
    context.fill();
    context.stroke();
  }

  drawCoords(context) {
    context.fillText(`x: ${this.x}, y: ${this.y}`, this.x, this.y);
    context.fillText(
      `w: ${this.width}, h: ${this.height}`,
      this.x,
      this.y + 10
    );
  }
}

export default Rectangle;
