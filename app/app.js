function showVarible(newName) {
  console.log("newName app.js" + newName);
}

function setBindings() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    MODEL.getMyVariable(btnID, showVarible);
  });
  $("#games a").click(function (e) {
    let btnID = e.currentTarget.id;
    MODEL.getGameVariable(btnID, showGameVariable);
  });
}

$(document).ready(function () {
  console.log("ready");
  setBindings();
});
