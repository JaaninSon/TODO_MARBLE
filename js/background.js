const images = [
   "bg01.jpg",
   "bg02.jpg",
   "bg03.jpg",
   "bg04.jpg"
];

const randomImg = () => {
   return images[Math.floor(Math.random() * images.length)];
}

const showBg = (randomImg) => {
   const bgImage = `url(img/${randomImg()})`;
   document.body.style.background = `${bgImage} no-repeat center/cover`;
}

showBg(randomImg);