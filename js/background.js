const images=["1.jpg","2.jpg","9.png"];

const BG = "background"

const chosenImages=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");
bgImage.className = BG;

bgImage.src=`img/${chosenImages}`;

document.body.appendChild(bgImage);