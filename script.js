const quizData = [
  {
    question: "Apa nama hewan ini?",
    image: "https://via.placeholder.com/300?text=Gambar+Hewan+1",  // Gambar hewan 1
    options: ["Kucing", "Anjing", "Gajah", "Kuda"],
    correct: 0
  },
  {
    question: "Apa nama benda ini?",
    image: "https://via.placeholder.com/300?text=Gambar+Benda+1",  // Gambar benda 1
    options: ["Bola", "Piring", "Kursi", "Meja"],
    correct: 1
  },
  {
    question: "Apa nama tempat ini?",
    image: "https://via.placeholder.com/300?text=Gambar+Tempat+1",  // Gambar tempat 1
    options: ["Sekolah", "Rumah Sakit", "Bandara", "Kantor"],
    correct: 2
  },
  // Tambahkan soal lainnya hingga 15 soal
];

let currentQuestion = 0;

const quiz = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];

  quiz.innerHTML = `
    <div class="question">${currentQuizData.question}</div>
    <div class="image-container">
      <img src="${currentQuizData.image}" alt="Gambar Soal">
    </div>
    <ul class="options">
      ${currentQuizData.options.map((option, index) =>
        `<li onclick="selectAnswer(${index})">${option}</li>`
      ).join('')}
    </ul>
  `;

  nextButton.disabled = true;
}

function selectAnswer(selectedIndex) {
  const currentQuizData = quizData[currentQuestion];
  const options = document.querySelectorAll('.options li');

  options.forEach((option, index) => {
    if (index === currentQuizData.correct) {
      option.style.backgroundColor = 'lightgreen';
    } else {
      option.style.backgroundColor = '#f9f9f9';
    }
  });

  nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quiz.innerHTML = "<h2>Kuis selesai! Terima kasih telah mengikuti.</h2>";
    nextButton.style.display = 'none';
  }
});

loadQuestion();
