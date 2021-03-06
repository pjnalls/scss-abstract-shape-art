const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    goldSpheres = createDiv("gold-spheres"),
    roseSpheres = createDiv("rose-spheres"),
    squares = createDiv("squares"),
    bars = createDiv("bars"),
    largeSquare = createDiv("large-square"),
    falls = createDiv("falls");

  canvas.appendChild(goldSpheres);
  canvas.appendChild(roseSpheres);
  canvas.appendChild(squares);
  canvas.appendChild(bars);
  canvas.appendChild(largeSquare);
  canvas.appendChild(falls);

  root.appendChild(canvas);
};

main();
