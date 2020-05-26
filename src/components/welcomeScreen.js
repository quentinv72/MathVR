import blackBoard from "../assets/mathboard.jpg";

AFRAME.registerComponent("welcome", {
  init: function () {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      openEnded: true,
      thetaLength: 100,
      thetaStart: 180,
      radius: 10,
      height: 10,
    });
    this.el.setAttribute("material", {
      side: "double",
      shader: "flat",
      src: blackBoard,
    });
    this.el.setAttribute("position", {
      x: 0,
      y: 2,
      z: -5,
    });
    this.el.setAttribute("rotation", {
      x: 0,
      y: 0,
      z: 180,
    });
    this.el.setAttribute("rotation", {
      x: 0,
      y: 310,
      z: 0,
    });
    const button = document.createElement("a-entity");
    button.setAttribute("button", { value: "Probability" });
    button.setAttribute("rotation", {
      x: 0,
      y: 45,
      z: 0,
    });
    button.setAttribute("class", "clickable");
    button.setAttribute("id", "probability");
    button.addEventListener("mouseenter", function (event) {
      button.setAttribute("geometry", { width: 1.6, height: 0.6 });
    });
    button.addEventListener("mouseleave", function (event) {
      button.setAttribute("geometry", { width: 1.5, height: 0.5 });
    });
    button.addEventListener("click", function (event) {
      button.emit("fadeaway", { data: "hello" }, true);
    });
    this.el.appendChild(button);
  },

  remove: function () {
    console.log("bye");
  },
});
