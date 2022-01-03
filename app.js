const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    goldSpheres = createDiv("gold-spheres"),
    roseSpheres = createDiv("rose-spheres");

  canvas.appendChild(goldSpheres);
  canvas.appendChild(roseSpheres);
  root.appendChild(canvas);
};

main();
