import Rectangle from "./shapes/Rectangle";

class Draw {
  constructor() {
    this.draws = [];
    this.history = [];
    this.theme = "light";
  }

  ACTIONS = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    UPDATE: "UPDATE",
  };

  __factory = (
    { x, y, width, height, points },
    type = "rectangle",
    theme = "light"
  ) => {
    switch (type) {
      case "rectangle":
        // Assuming Rectangle constructor can handle these arguments directly
        return new Rectangle(x, y, width, height, points, type, theme);
      default:
        return new Rectangle(x, y, width, height, points, type, theme);
    }
  };

  __getCoords(coords) {
    return {
      x: coords[0].x,
      y: coords[0].y,
      width: coords[1].x - coords[0].x,
      height: coords[1].y - coords[0].y,
      points: coords.length > 2 ? coords : [],
    };
  }

  add(coords, type = "rectangle", theme = "light") {
    if (!coords || coords.length < 2) {
      throw new Error(
        "You have to provide at least two coordinates to create a shape!"
      );
    }
    const COORDS = this.__getCoords(coords);
    const draw = this.__factory(COORDS, type, theme);
    this.draws.push(draw);
    this._pushHistory(draw, this.ACTIONS.ADD);
  }

  _pushHistory(draw, action) {
    if (this.history.length >= 10) {
      this.history.shift();
    }
    this.history.push({ draw, action });
  }

  remove(draw) {
    this.draws = this.draws.filter((d) => d !== draw);
  }

  update(draw) {
    this.draws = this.draws.map((d) => {
      if (d === draw) {
        return draw;
      }
      return d;
    });
    this._pushHistory(draw, this.ACTIONS.UPDATE);
  }

  draw() {
    this.draws.forEach((draw) => draw.draw());
  }

  helperDraw(context, coords) {
    const COORDS = this.__getCoords(coords);
    const helper = this.__factory(COORDS);
    helper.draw(context);
  }

  clear() {
    this.draws = [];
  }
}

export default Draw;
