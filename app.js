$(function () {
  // YOUR CODE HERE
  const button = $("#toggleButton");
  const paragraph = $("#myParagraph");

  const colorButton = $("#colorButton");
  const colorParagraph = $("#colorDiv");

  const addButton = $("#addClassButton");
  const removeButton = $("#removeClassButton");
  const classDiv = $("#classDiv");

  const fadeInButton = $("#fadeInButton");
  const fadeOutButton = $("#fadeOutButton");
  const fadeDiv = $("#fadeDiv");

  const slideUpButton = $("#slideUpButton");
  const slideDownButton = $("#slideDownButton");
  const slideDiv = $("#slideDiv");

  // Exercise 1
  button.on("click", function () {
    paragraph.toggle();
  });

  // Exercise 2
  colorButton.on("click", function () {
    colorParagraph.css("backgroundColor", "yellow");
  });

  // Exercise 3
  addButton.on("click", function () {
    classDiv.addClass("new-class");
  });
  removeButton.on("click", function () {
    if (classDiv.hasClass("new-class")) {
      classDiv.removeClass("new-class");
    }
  });

  // Exercise 4
  fadeInButton.on("click", function () {
    fadeDiv.fadeIn();
  });
  fadeOutButton.on("click", function () {
    fadeDiv.fadeOut();
  });

  // Exercise 5
  slideUpButton.on("click", function () {
    slideDiv.slideUp();
  });
  slideDownButton.on("click", function () {
    slideDiv.slideDown();
  });
});
