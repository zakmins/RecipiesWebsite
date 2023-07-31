const imageDîner = ['../assets/recettes/3/3.png', 
                    '../assets/recettes/3/1.png', 
                    '../assets/recettes/3/2.png',
                    '../assets/recettes/5/3.png',
                    '../assets/recettes/5/2.png',
                    '../assets/recettes/5/1.png']

const imageDéjeuner = ['../assets/recettes/4/1.png',
                       '../assets/recettes/4/2.png',
                       '../assets/recettes/7/1.png',
                       '../assets/recettes/7/3.png',
                       '../assets/recettes/9/1.png']

const imagePlatPrincipal = ['../assets/recettes/10/1.png',
                            '../assets/recettes/10/2.png',
                            '../assets/recettes/10/3.png',
                            '../assets/recettes/6/1.png',
                            '../assets/recettes/6/3.png',
                          ]

const randomImageDîner = imageDîner[Math.floor(Math.random() * imageDîner.length)];
const randomImageDéjeuner = imageDéjeuner[Math.floor(Math.random() * imageDéjeuner.length)];
const randomImagePlatPrincipal = imagePlatPrincipal[Math.floor(Math.random() * imagePlatPrincipal.length)];

const randomImageElement1 = document.getElementById('random-image1');
const randomImageElement2 = document.getElementById('random-image2');
const randomImageElement3 = document.getElementById('random-image3');

console.log("hello world ")
randomImageElement1.src = randomImageDîner;
randomImageElement2.src = randomImageDéjeuner;
randomImageElement3.src = randomImagePlatPrincipal;