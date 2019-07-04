export default class Css {
  static boxShadow(color, x, y, blur, spacing) {
    if (typeof x === "number") {
      x = x + "px";
    }

    if (typeof y === "number") {
      y = y + "px";
    }

    if (typeof blur === "number") {
      blur = blur + "px";
    }

    if (typeof spacing === "number") {
      spacing = spacing + "px";
    }

    return `${color} ${x} ${y} ${blur} ${spacing}`;
  }
}
