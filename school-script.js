const images = document.getElementsByClassName("img");

Array.from(images).forEach((image) => {
  const container = image.parentNode;

  image.addEventListener("mouseenter", function() {
    container.style.backgroundColor = "#ff0000"; 
  });

  image.addEventListener("mouseleave", function() {
    container.style.backgroundColor = "#ffffff";
  });
});
