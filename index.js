// const app = document.getElementById("app");
// const body = document.getElementsByTagName('body')[0];
// const container = document.getElementsByClassName('container')[0]

const app = document.querySelector('#app');
const container = document.querySelector(".container");
const button = document.querySelector('.btn');
const inputImage = document.querySelector('#input_image');
const divImage = document.querySelector('.uploaded_image');


const text = document.createElement('h1'); //<h1></h1>
text.innerText = 'Learn BASIC DOM'; //<h1>Learn Basic DOM</h1>

const paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus porro odio qui nulla adipisci dignissimos iusto ex. Consequatur, at magni!'

const image = document.createElement('img');
image.setAttribute('src', 'https://awsimages.detik.net.id/community/media/visual/2022/03/01/the-batman-2_43.jpeg?w=700&q=90')
image.setAttribute('width', '350');
image.setAttribute('height', '350')

app.appendChild(text);
// body.appendChild(paragraph);
container.appendChild(paragraph);
container.appendChild(image);

// EVENT LISTENERS 2 CARA
// button.onclick = function() {
//     alert('Hello saya di klik');
// }

button.addEventListener('click', save)

inputImage.addEventListener('change', showImage)

function showImage(event) {
    console.log(event.target.files[0]);

    const imgUp = document.createElement('img');
    imgUp.setAttribute('src', URL.createObjectURL(event.target.files[0]))
    imgUp.setAttribute('width', '350');
    imgUp.setAttribute('height', '350');

    divImage.appendChild(imgUp)
}

function save() {
    alert('Hello World!')
}

