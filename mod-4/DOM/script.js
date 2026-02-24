let div = document.querySelector('#greeting');
div.innerText = "Goodbye";

let button = document.querySelector('button');

button.addEventListener("click", createPikachu);

function createPikachu() {
    let img = document.createElement('img');
    img.src = 'pikachu.jpeg';
    img.alt = 'pikachu';
    img.id = 'pikachu-1';
    console.log('Creating Pikachu...');
    document.body.appendChild(img);
}

// createPikachu();

// function changeImage() {
//     let img = document.querySelector('img');
//     console.log(img);

//     img.src = 'squirtle.webp';
//     img.alt = 'squirtle';
// }

// changeImage();







