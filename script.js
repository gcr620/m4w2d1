let apiKey = "jcfkgYK9LXquzkThbWvP2fNjz5PvkFzEKRnAK4rDqgllOxYpdVu3Xb0A";
let url = "https://api.pexels.com/v1/search?query=nature&per_page=4";
let photosLi=[];
let err = false;
let testImg = document.getElementById("test");
let testH1 = document.getElementById("titleTest");
console.log(testImg);


fetch(url, {headers:{Authorization: apiKey}})
.then((response) => response.json())
.then((json) => getImg(newArray))
// .then((photoArry) => test1(photoArry))
// .then((jsonImg) => insertImg(newArray))
.catch((err) => console.log("error"))

function getImg(newArray) {
    console.log(newArray);
    
}

// function putImg(jsonImg) {
//     return new Promise((resolve, reject) => {
//         console.log(jsonImg.photos);
//         for (let index = 0; index < jsonImg.photos.length; index++) {
//             photosLi.push(jsonImg.photos[index])
//         }
//         console.log(photosLi);
//         console.log(pNumber); 
//         if (jsonImg.photos.length > 0) {
//             resolve(photosLi)
//         }
//         else{
//             reject(console.log("Errore fra"))
//         }
//     })
// }

// function test1(photoArry) {
//     console.log(photoArry);
//     return new Promise((resolve, reject) => {
//         let coso = 1;
//         if (coso ===  1) {
//             resolve(console.log(photoArry))
//         } else {
//             reject(console.log("f"))
//         }
//     })
// }

// function insertImg(newArray) {
    
// }