// index js di sini

let logoQuestion = {
  shell: 'https://www.jetpunk.com/img/user-photo-library/38/38a12fe9c0-450.png',
  wikipedia: 'https://www.jetpunk.com/img/user-photo-library/5d/5d1022b4b4-450.png',
  pringles: 'https://www.jetpunk.com/img/user-photo-library/20/20b289e5ff-450.png',
  adidas: 'https://www.jetpunk.com/img/user-photo-library/33/3397b1bbca-450.png',
  pepsi: 'https://www.jetpunk.com/img/user-photo-library/4e/4e31c56cb4-450.png',
  playstation: 'https://www.jetpunk.com/img/user-photo-library/42/42711cbcde-450.png',
  'pizza hut': 'https://www.jetpunk.com/img/user-photo-library/c7/c7b009065e-450.png',
  amazon: 'https://www.jetpunk.com/img/user-photo-library/0d/0dd7732864-450.png',
  dolby: 'https://www.jetpunk.com/img/user-photo-library/20/20815c01b6-450.png',
  kfc: 'https://www.jetpunk.com/img/user-photo-library/12/12bcf4ad80-450.png',
  yamaha: 'https://www.jetpunk.com/img/user-photo-library/2a/2a071b945a-450.png',
  starbucks: 'https://www.jetpunk.com/img/user-photo-library/4c/4cb1ecd091-450.png',
  snapchat: 'https://www.jetpunk.com/img/user-photo-library/30/303027c990-450.png',
  lego: 'https://www.jetpunk.com/img/user-photo-library/cb/cbea39235a-450.png',
  xbox: 'https://www.jetpunk.com/img/user-photo-library/31/3132cb0572-450.png',
  playboy: 'https://www.jetpunk.com/img/user-photo-library/ba/bae213ad7d-450.png',
  spotify: 'https://www.jetpunk.com/img/user-photo-library/67/6738400195-450.png',
  instagram: 'https://www.jetpunk.com/img/user-photo-library/63/6307ec3f24-450.png',
  channel: 'https://www.jetpunk.com/img/user-photo-library/20/2008b8bacc-450.png',
  ikea: 'https://www.jetpunk.com/img/user-photo-library/8d/8d331d17d0-450.png',
  levis: 'https://www.jetpunk.com/img/user-photo-library/c1/c12306b4ce-450.png',
  jordan: 'https://www.jetpunk.com/img/user-photo-library/7d/7dc9106203-450.png',
  tesla: 'https://www.jetpunk.com/img/user-photo-library/3f/3fff65fd8a-450.png',
  nintendo: 'https://www.jetpunk.com/img/user-photo-library/7e/7e75b28309-450.png',
  'louis vuitton': 'https://www.jetpunk.com/img/user-photo-library/4a/4a7d8b6624-450.png',
  kraft: 'https://www.jetpunk.com/img/user-photo-library/c3/c38e1758a9-450.png',
  rolex: 'https://www.jetpunk.com/img/user-photo-library/5b/5b470984e6-450.png',
  'under armour': 'https://www.jetpunk.com/img/user-photo-library/c5/c5647de30d-450.png',
  skype: 'https://www.jetpunk.com/img/user-photo-library/38/386f81c0f8-450.png',
  dodge: 'https://www.jetpunk.com/img/user-photo-library/7e/7ea39c8106-450.png'
}

// ambil nama pengguna
let username;
function getName() {
  username = document.getElementsByClassName('form-control').value
  let name = document.getElementById('nama')
  name.innerHTML = username
}

// random logo
let logoName = Object.keys(logoQuestion)

// munculin logo
let answer;
function generateLogo() {
  let randomIndex = Math.floor(Math.random()*logoName.length)
  answer = logoName[randomIndex]
  // console.log(randomIndex);
  let linkImage = logoQuestion[logoName[randomIndex]]
  document.getElementById('logoImage').src=linkImage
  logoName.splice(randomIndex, 1)
}

generateLogo()

// check jawaban
let score = 0
let question = 1;
function checkAnswer() {
  let input = document.getElementById('guessField').value
  let scoreUser = document.getElementById('score')
  if (answer === input) {
    score += 20
    scoreUser.innerHTML = `score = ${score}`
  }
  let pertanyaan = document.getElementById('progressText')
  question++
  pertanyaan.innerHTML = `Question ${question}/5`
  input = document.getElementById('guessField').value = ''
  // userInput.innerHTML = ''

  if (question === 6) {
    alert(`score kamu ${score}`)
  }

  generateLogo()
}



// // console.log(logoName);
// // logoName.splice(logoName[0], 1)
// // console.log(logoName);
// let answer;
// function generateRandomLogo(input, logoDB) {
//   let randomIndex = Math.floor(Math.random()*input.length)
//   let imageLink = logoDB[input[randomIndex]]
//   let image = document.getElementById('logoImage').src=imageLink
//   // console.log(input[randomIndex]);
//   // console.log(imageLink);
//   answer = input[randomIndex]
// }
// console.log(generateRandomLogo(logoName, logoQuestion));
// // console.log(logoName);
// // console.log(answer);

// function checkAnswer(input, event) {
//   event.prevent
//   if (input === answer) {
//     console.log('selamat anda menang');
//   }
// }

// function nextQuestion() {

// }

// // punya bintang

// function generateQuestion() {
//   let jokes = [];
//   let randomIndex = Math.floor(Math.random() * jokes.length);
//   let randomQuestion = jokes[randomIndex];

//   // selector
//   let questionElement = document.querySelector("#question-container");
//   questionElement.innerHTML = randomQuestion.question;
//   return randomQuestion; // object
// }


// // ketika htmlnya jalan / di refresh
// let generatedQuestion = generateQuestion();
// let counter = 0;

// function checkAnswer(event) {
//   // supaya form tidak mentrigger refresh
//   event.preventDefault();
//   let answerResult = "";

//   // check jawaban dari user
//   let userAnswer = document.getElementById("user-answer").value;

//   // validasi
//   if (!userAnswer) {
//     alert("input harus diisi");
//     return;
//   }
//   if (userAnswer === generatedQuestion.answer) {
//     answerResult = "benar";
//     counter += 10
//   } else {
//     answerResult = "salah";
//   }
//   counter++;
// }