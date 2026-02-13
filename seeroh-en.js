const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const welcomeMsg = document.getElementById('welcome-message');
const questBox = document.getElementById('question-container');
const currentDiv = document.getElementById('current');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score-display');
const questionNumberDisplay = document.getElementById('question-number');
const quizHeader = document.getElementsByTagName('h1')[0];
const congMsg = document.getElementById('congMsg');
const controlButtons = document.getElementById('restart-control');
const score = document.getElementById('score');
const percentage = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
nextButton.disabled = true;

// English Seerah Questions Example
const questions = [
  {
    question: "Where was the Prophet ﷺ born?",
    choices: ["Medina", "Mecca", "Taif", "Yemen"],
    answer: "Mecca"
  },
  {
    question: "How old was Prophet Muhammad ﷺ when he received the first revelation?",
    choices: ["25", "30", "40", "50"],
    answer: "40"
  },
  {
    question: "What is the name of the cave where Prophet Muhammad ﷺ received the first revelation?",
    choices: ["Cave of Hira", "Cave of Thawr", "Cave of Safa", "Cave of Quraish"],
    answer: "Cave of Hira"
  },
  {
    question: "Which city did the Prophet ﷺ migrate to during the Hijrah?",
    choices: ["Mecca", "Jerusalem", "Medina", "Taif"],
    answer: "Medina"
  },
  {
    question: "What is the name of the battle where the Muslims won against the Quraysh despite being outnumbered?",
    choices: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"],
    answer: "Battle of Badr"
  },
  {
    question: "Who was the Prophet Muhammad’s ﷺ uncle who protected him during the early days of Islam?",
    choices: ["Abu Talib", "Hamza", "Abu Bakr", "Umar"],
    answer: "Abu Talib"
  },
  {
    question: "What was the name of the treaty signed between the Muslims and the Quraysh?",
    choices: ["Treaty of Hudaybiyyah", "Treaty of Mecca", "Treaty of Medina", "Treaty of Taif"],
    answer: "Treaty of Hudaybiyyah"
  },
  {
    question: "How many children did Prophet Muhammad ﷺ have?",
    choices: ["2", "4", "6", "7"],
    answer: "7"
  },
  {
    question: "What is the name of the Prophet’s ﷺ daughter who is very famous and loved?",
    choices: ["Aisha", "Fatimah", "Zainab", "Umm Kulthum"],
    answer: "Fatimah"
  },

  {
    question: "In which year was the Prophet ﷺ born?",
    choices: ["Year of the Elephant", "Year of Hijrah", "Year of Badr", "Year of the Conquest"],
    answer: "Year of the Elephant"
  },
  {
    question: "Who was the mother of the Prophet ﷺ?",
    choices: ["Khadijah bint Khuwaylid", "Aminah bint Wahb", "Fatimah bint Asad", "Halima al-Sa'diyah"],
    answer: "Aminah bint Wahb"
  },
  {
    question: "Who was the father of the Prophet ﷺ?",
    choices: ["Abu Talib", "Abdul Muttalib", "Abdullah ibn Abdul Muttalib", "Al-Abbas"],
    answer: "Abdullah ibn Abdul Muttalib"
  },
  {
    question: "Who nursed the Prophet ﷺ as a baby?",
    choices: ["Safiyyah", "Halima al-Sa'diyah", "Khadijah", "Aisha"],
    answer: "Halima al-Sa'diyah"
  },
  {
    question: "What is the name of the first wife of the Prophet ﷺ?",
    choices: ["Khadijah bint Khuwaylid", "Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Zaynab bint Khuzaymah"],
    answer: "Khadijah bint Khuwaylid"
  },
  {
    question: "Who was the first martyr in Islam?",
    choices: ["Hamzah ibn Abdul Muttalib", "Umar ibn Al-Khattab", "Ali ibn Abi Talib", "Zayd ibn Harithah"],
    answer: "Hamzah ibn Abdul Muttalib"
  },
  {
    question: "What is the name of the first mosque built in Islam?",
    choices: ["Masjid al-Haram", "Masjid Quba", "Masjid al-Nabawi", "Masjid al-Aqsa"],
    answer: "Masjid Quba"
  },
  {
    question: "In which year did the Prophet ﷺ migrate to Medina?",
    choices: ["1st Hijrah", "2nd Hijrah", "3rd Hijrah", "4th Hijrah"],
    answer: "1st Hijrah"
  },
  {
    question: "Who was the Sahabiyyah who used to collect Prophet’s sweat and mix it in a small bottle?",
    choices: ["Umm Sulaym", "Umm Kulthum", "Umm Khadija", "Umm Fatima"],
    answer: "Umm Sulaym"
  },
  {
    question: "How did the Prophet ﷺ walk?",
    choices: ["Slowly", "Lazily", "Quickly", "Proudly"],
    answer: "Quickly"
  },
  {
    question: "What did the people call the Prophet ﷺ before his Prophethood?",
    choices: ["The Obedient", "The Careful", "The Trustworthy", "The Diligent"],
    answer: "The Trustworthy"
  },
  {
    question: "How many years was the Prophethood?",
    choices: ["22 Years", "24 Years", "21 Years", "23 Years"],
    answer: "23 Years"
  },
  {
    question: "Who was one of the bravest Sahabi and also the second caliph of Islam?",
    choices: ["Abu Bakr", "Uthman", "Umar", "Ali"],
    answer: "Umar"
  },
  {
    question: "Who is among the wives of the Prophet ﷺ?",
    choices: ["Aisha", "Fatima", "Umm Kulthum", "Ruqaiiya"],
    answer: "Aisha"
  },
  {
    question: "Which uncle of the Prophet ﷺ supported him till his death but did not accept Islam?",
    choices: ["Abu Lahab", "Hamza", "Abu Talib", "Hamza"],
    answer: "Abu Talib"
  },
  {
    question: "What was the age of the Prophet ﷺ at the time of his wedding?",
    choices: ["24 Years", "23 Years", "27 Years", "25 Years"],
    answer: "25 Years"
  },
  {
    question: "If the Prophet ﷺ had a choice in two matters, he would choose the…",
    choices: ["Hard One", "Easy One", "Elaborate One", "One which was most suited to the Arabs"],
    answer: "Easy One"
  },
  {
    question: "The people thought of punishing Ibrahim (peace be upon him) by…",
    choices: ["Burning him", "Torturing him", "Throwing him off a cliff", "Stabbing him"],
    answer: "Burning him"
  },
  {
    question: "What was the name of the tribe of the Prophet ﷺ?",
    choices: ["Kinana", "Ghifar", "Qainuqa", "Quraish"],
    answer: "Quraish"
  },
  {
    question: "What was the name of Madina earlier?",
    choices: ["Tabook", "Yathrib", "Quba", "Taaif"],
    answer: "Yathrib"
  },
  {
    question: "What was the name of the King who attacked the Ka’bah?",
    choices: ["Negus", "Heraclius", "Abrahah", "Caesar"],
    answer: "Abrahah"
  },
  {
    question: "What was the year named after the attack on the Ka’bah?",
    choices: ["Year of the Elephant", "Year of the Camel", "Year of the Lion", "Year of the Birds"],
    answer: "Year of the Elephant"
  },
  {
    question: "What does Muhammad mean?",
    choices: ["The Respected One", "The Honorable One", "The Resilient One", "The Praised One"],
    answer: "The Praised One"
  },
  {
    question: "What was the name of the Monk who met the Prophet ﷺ in his childhood in Syria?",
    choices: ["Fujairah", "Bahira", "Najashi", "Waraqa"],
    answer: "Bahira"
  },
  {
    question: "What was the name of the first child of the Prophet ﷺ?",
    choices: ["Ibrahim", "Tahir", "Tayyib", "Qasim"],
    answer: "Qasim"
  },
  {
    question: "In which Surah are the first revealed verses?",
    choices: ["Surah Bayyinah", "Surah Alaq", "Surah Rahman", "Surah Fatihah"],
    answer: "Surah Alaq"
  },
  {
    question: "Which angel is responsible for bringing down revelation?",
    choices: ["Jibreel", "Mikaeel", "Israfeel", "Harut/Marut"],
    answer: "Jibreel"
  },
  {
    question: "Who was the first Muslim woman to accept Islam?",
    choices: ["Aisha", "Khadija", "Fatima", "Sumaiya"],
    answer: "Khadija"
  },
  {
    question: "Who was the cousin of the Prophet ﷺ and also his son-in-law?",
    choices: ["Uthman", "Abul ‘Aas", "Ali", "Umar"],
    answer: "Ali"
  },
  {
    question: "Who was the slave of Umaiyyah ibn Khalaf who was tortured for his Islam?",
    choices: ["Yasir", "Bilal", "Ammar", "Khabbab"],
    answer: "Bilal"
  },
  {
    question: "Which country did the Muslims first migrate to?",
    choices: ["Abyssinia", "Egypt", "Yemen", "Persia"],
    answer: "Abyssinia"
  },
];

const correctSound = new Audio('sounds/correct.wav');
const wrongSound = new Audio('sounds/wrong.wav');

function showQuiz() {
  welcomeMsg.classList.add('hide');
  questBox.classList.remove('hide');
  currentDiv.classList.remove('hide');
  startButton.classList.add('hide');
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
};

let currentIndex = 0;
let totalScore = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getQuestions() {
  nextButton.disabled = true;
  answerButtonsElement.innerHTML = "";
  questionElement.innerHTML = questions[currentIndex].question;
  shuffleArray(questions[currentIndex].choices);
  questions[currentIndex].choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.value = choice;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", () => {
      Array.from(answerButtonsElement.children).forEach(btn => btn.disabled = true);
      nextButton.disabled = false;
      Array.from(answerButtonsElement.children).forEach(btn => {
        btn.classList.add("disabled");
      });
      if (button.value === questions[currentIndex].answer) {
        button.classList.add('green');
        button.innerHTML = `${button.value} <span>&#10004;</span> `;
        correctSound.play();
        totalScore++;
        scoreDisplay.textContent = `${totalScore} / ${questions.length}`;
      } else {
        button.classList.add('red');
        button.innerHTML = `${button.value} <span>&#10008;</span> `;
        wrongSound.play();
        Array.from(answerButtonsElement.children).forEach(btn => {
          if (btn.value === questions[currentIndex].answer) {
            btn.classList.add('green');
            btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
          }
        });
      }
      nextButton.classList.remove('hide');
      if (currentIndex === questions.length - 1) {
        nextButton.textContent = "Show Result";
      } else {
        nextButton.textContent = "Next Question";
      }
    });
  });
};

function getResult() {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionNumberDisplay.textContent = `${currentIndex + 1} of ${questions.length}`;
    getQuestions();
  } else if (currentIndex === questions.length) {
    quizHeader.innerHTML = "Quiz Finished!";
    questBox.classList.add('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    congMsg.classList.remove('hide');
    controlButtons.classList.remove('hide');
    nextButton.classList.add('hide');
    currentDiv.classList.add('hide');

    let percent = Math.floor((totalScore / questions.length) * 100);
    score.textContent = `${totalScore} / ${questions.length} Correct`;
    percentage.textContent = `${percent}% Score`;

    // Show/hide Arabic link based on score (always show for now)
    var arabicLink = document.getElementById('to-arabic-link');
    arabicLink.classList.remove('hide');

    if (percent >= 80) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Congratulations!</span> &#127881 You are a genius!";
    } else if (percent >= 60) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Good!</span> &#128293 You're doing well!";
    } else {
      congMsg.innerHTML = "Keep practicing! You'll get better!&#128170;";
    }
  }
};

function reset() {
  currentIndex = 0;
  totalScore = 0;
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
  scoreContainer.classList.add('hide');
  congMsg.classList.add('hide');
  controlButtons.classList.add('hide');
  quizHeader.innerHTML = 'Seerah Quiz ﷺ';
  shuffleArray(questions);
  showQuiz();
  getQuestions();
};

startButton.addEventListener('click', () => {
  shuffleArray(questions);
  showQuiz();
  getQuestions();
});
nextButton.addEventListener('click', getResult);
restartBtn.addEventListener('click', reset);
