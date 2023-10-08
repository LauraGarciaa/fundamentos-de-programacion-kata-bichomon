// console.log(document.title);
// document.querySelector('.infocard')

// 1
document.querySelector('#gen-1').innerText = 'Generasión 1 Pokimon';

// 2
document.querySelector('.infocard-list').style.background='lightblue';

// 3
console.log(document.URL);

//4
console.log(document.domain);

// 5
console.log(document.querySelectorAll('.img-fixed'))

// 6
let imagenes = document.querySelectorAll('.img-fixed')
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}

// 7
// este ejercicio ha sido con ayuda

// let inforCards = document.querySelectorAll('.infocard-lg-data')
// for (let i = 0; i < inforCards.length; i++) {
//     for (let j = 0; j < inforCards[i].lastChild.children.length; j++) {
//         if (inforCards[i].lastChild.children[j].innerText == 'Flying') {
//             inforCards[i].style.background = 'white';
//         }
//     }
// }