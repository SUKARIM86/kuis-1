const quizData = [
    {
        question: "Gambar apa ini?",
        image: "gambar1.jpg",  // Gambar pertama
        options: ["Kucing", "Anjing", "Burung", "Ikan"],
        correct: "Kucing"
    },
    {
        question: "Siapa Nama Nabi Terakhir?",
        
        options: ["Adam", "Nuh", "Isa", "Muhamad"],
        correct: "Muhamad"
    },
    {
        question: "Gambar apa ini?",
        image: "gambar3.jpg",  // Gambar ketiga
        options: ["Mobil", "Sepeda", "Motor", "Pesawat"],
        correct: "Mobil"
    }
    // Tambahkan soal lain sesuai kebutuhan
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const imageElement = document.getElementById("question-image");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

// Menampilkan soal pertama
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    imageElement.src = currentQuestion.image;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("input");
        optionButton.type = "radio";
        optionButton.name = "option";
        optionButton.value = option;
        optionButton.id = option;
        const label = document.createElement("label");
        label.setAttribute("for", option);
        label.textContent = option;

        optionsContainer.appendChild(optionButton);
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement("br"));
    });
}

// Melanjutkan ke soal berikutnya
function nextQuestion() {
    // Cek apakah jawaban dipilih
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Pilih jawaban dulu!");
        return;
    }

    // Cek apakah jawaban benar
    if (selectedOption.value === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    // Jika masih ada soal
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Jika tidak ada soal lagi, tampilkan hasil
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    imageElement.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";

    resultElement.textContent = `Kamu menjawab benar ${score} dari ${quizData.length} soal.`;
}

// Memuat soal pertama saat halaman dibuka
loadQuestion();
