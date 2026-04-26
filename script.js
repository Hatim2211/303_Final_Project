// goddess result order
const goddesses = ["Hera", "Athena", "Aphrodite"];
// scores holder
let scores = [0, 0, 0];
let currentQuestion = 0;

// quiz questions data
const questions = [
  {
    text: "What matters most to you in life?",
    answers: [
      { text: "Being respected", points: [1, 0, 0] },
      { text: "Making smart, well-thought-out decisions", points: [0, 1, 0] },
      { text: "Building deep connections with others", points: [0, 0, 1] }
    ]
  },
  {
    text: "How do you handle conflict?",
    note: "If you don't like these, would you never do this one?",
    answers: [
      { text: "Stand your ground", points: [1, 0, 0] },
      { text: "Think it through and find the smartest solution", points: [0, 1, 0] },
      { text: "Try to keep the peace", points: [0, 0, 1] },
      { text: "Hold a grudge", points: [-1, 0, 0], extra: true }
    ]
  },
  {
    text: "What's your ideal career?",
    answers: [
      { text: "CEO", points: [1, 0, 0] },
      { text: "Scientist", points: [0, 1, 0] },
      { text: "Artist", points: [0, 0, 1] }
    ]
  },
  {
    text: "How do people usually describe you?",
    answers: [
      { text: "Strong", points: [1, 0, 0] },
      { text: "Logical", points: [0, 1, 0] },
      { text: "Charming", points: [0, 0, 1] }
    ]
  },
  {
    text: "What would you rather be known for?",
    answers: [
      { text: "Influence", points: [1, 0, 0] },
      { text: "Wisdom", points: [0, 1, 0] },
      { text: "Love", points: [0, 0, 1] }
    ]
  },
  {
    text: "In a group project, what role do you take?",
    answers: [
      { text: "Leader organizing everyone", points: [1, 0, 0] },
      { text: "Planner figuring out the strategy", points: [0, 1, 0] },
      { text: "Supporting everyone", points: [0, 0, 1] }
    ]
  },
  {
    text: "What motivates your decisions the most?",
    answers: [
      { text: "Long-term success", points: [1, 0, 0] },
      { text: "Logic and careful thinking", points: [0, 1, 0] },
      { text: "Emotions and personal relationships", points: [0, 0, 1] }
    ]
  },
  {
    text: "How do you approach relationships?",
    note: "If you don't like these, would you never do this one?",
    answers: [
      { text: "Loyalty and commitment are everything", points: [1, 0, 0] },
      { text: "Mutual respect and understanding matter most", points: [0, 1, 0] },
      { text: "Passion and emotional connection come first", points: [0, 0, 1] },
      { text: "If they betray you, you make them pay for it", points: [-1, 0, 0], extra: true }
    ]
  },
  {
    text: "What would you do if you had unlimited power?",
    answers: [
      { text: "Build a strong empire or legacy", points: [1, 0, 0] },
      { text: "Improve systems and solve big problems", points: [0, 1, 0] },
      { text: "Make life more beautiful and help others", points: [0, 0, 1] }
    ]
  },
  {
    text: "What kind of gift would you most appreciate?",
    answers: [
      { text: "Something expensive", points: [1, 0, 0] },
      { text: "Something useful", points: [0, 1, 0] },
      { text: "Something romantic", points: [0, 0, 1] }
    ]
  },
  {
    text: "How do you react to being challenged?",
    note: "If you don't like these, would you never do this one?",
    answers: [
      { text: "Defend your position strongly", points: [1, 0, 0] },
      { text: "Prove them wrong with facts", points: [0, 1, 0] },
      { text: "Try to smooth things over", points: [0, 0, 1] },
      { text: "Quietly plan how to get back at them", points: [-1, 0, 0], extra: true }
    ]
  },
  {
    text: "What's your biggest strength?",
    answers: [
      { text: "Leadership", points: [1, 0, 0] },
      { text: "Intelligence", points: [0, 1, 0] },
      { text: "Charm", points: [0, 0, 1] }
    ]
  },
  {
    text: "What's your biggest weakness?",
    answers: [
      { text: "Being controlling or jealous", points: [-1, 0, 0] },
      { text: "Overthinking everything", points: [0, -1, 0] },
      { text: "Being overly emotional", points: [0, 0, -1] }
    ]
  },
  {
    text: "What kind of environment do you thrive in?",
    answers: [
      { text: "Structured and hierarchical", points: [1, 0, 0] },
      { text: "Intellectual and strategic", points: [0, 1, 0] },
      { text: "Social and emotionally rich", points: [0, 0, 1] }
    ]
  },
  {
    text: "If you had to choose one, what would you pick?",
    answers: [
      { text: "Power and wealth", points: [2, 0, 0] },
      { text: "Knowledge and skill", points: [0, 2, 0] },
      { text: "Love and beauty", points: [0, 0, 2] }
    ]
  }
];

const quizScreen = document.getElementById("quiz-screen");
const introScreen = document.getElementById("intro-screen");
const resultScreen = document.getElementById("result-screen");
const worksCitedScreen = document.getElementById("works-cited-screen");
const progress = document.getElementById("progress");
const question = document.getElementById("question");
const note = document.getElementById("note");
const answers = document.getElementById("answers");
const extraAnswers = document.getElementById("extra-answers");
const resultName = document.getElementById("result-name");
const resultImage = document.getElementById("result-image");
const resultAnalysis = document.getElementById("result-analysis");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const worksCitedButton = document.getElementById("works-cited-button");
const backToResultButton = document.getElementById("back-to-result-button");
const jumpIntroButton = document.getElementById("jump-intro-button");
const questionJumpButtons = document.getElementById("question-jump-buttons");
const resultJumpButtons = document.getElementById("result-jump-buttons");
const jumpWorksCitedButton = document.getElementById("jump-works-cited-button");

// result images 
const goddessImages = {
  Hera: "photos/Hera.webp",
  Athena: "photos/Athena.webp",
  Aphrodite: "photos/Aphrodite.webp"
};

const goddessAnalyses = {
  Hera: [
    `The goddess you matched with was Hera, the goddess of marriage and power. Hera, within our personality quiz, was the most interesting goddess. On one side, she displays her traits as the goddess of marriage and power, but on the other, we see a figure who is deeply driven by revenge when she is betrayed or experiences any negative event.`,
    `On the positive side, we see many descriptors of Hera's power and authority within Greek mythology. This can especially be seen in the Homeric Hymn to Hera, where the poet quickly refers to her as "gold-throned Hera" (Homeric Hymns, Hymn to Hera 1). This automatic inclusion of her having a gold throne brings up the most important part of her character: her role as the queen of the gods. This is why, in my personality quiz, I attached Hera to answer choices such as "CEO" and "influence", as that is what she is most known for, since this position is what gives her relevance. However, what we also see in many cases of her power is that while she is the queen, she is almost level with Zeus. By bringing up that Hera is both the "sister and mate of Zeus", they are clearly making two connections of power between the two (Homeric Hymns, Hymn to Hera 3). This is why, in other places in the personality quiz, I also connected Hera to ideas of strength, as she is on the same tier as some of the most powerful gods, especially when you compare her position to Aphrodite and Athena.`,
    `However, on the other side, we see how Hera is deeply filled with revenge, especially when it is connected to her relationship with Zeus. This is especially seen in the Homeric Hymns, Hymn to Apollo, where Hera becomes "angry" at Zeus "when he bore in his head glorious Athena" (Homeric Hymns, Hymn to Apollo 340-342). Here, Hera is angry at Zeus for creating a child without her. This makes her feel useless, as it questions her role, so she decides "to bear a child who in Olympian eyes will top them all" (Homeric Hymns, Hymn to Apollo 363-364). Not only does she want to create a child, but she wants that child to be better than the other Olympians, truly showing how far her revenge will go. This eventually leads to the creation of Typhon, whom the poet describes as "cruel" and "a woe to mortals" (Homeric Hymns, Hymn to Apollo 389-390). This story really shows how far Hera will go in order to get revenge, as she creates a literal monster just to get back at Zeus for going around her. This is why, in the personality quiz, there was a fourth response connected to Hera, usually about revenge. If this choice was picked, it would actually take a point away from your Hera total, as it shows some of her most negative qualities.`,
    `This is why, out of the three goddesses, I think Hera's personality was the most complex, as it had the most positives and negatives. Because of this, I gave her the special ability of being able to lose a point. This means that if you got Hera, you have a strong connection to personalities of strength and authority, but also the potential for more negative traits.`
  ],
  Athena: [
    `The goddess you matched with was Athena, the goddess of wisdom and strategy. This is why the majority of her answer choices were related to intelligence and thoughtful thinking. This is especially seen in the way she helps Odysseus in the Odyssey. In Book 13, when Odysseus returns to Ithaca, Athena cleverly "cast a mist upon it" (Odyssey 13.191) and also devises a plan to make him "unrecognizable to his own wife and family ... till he paid the suitors back for how they misbehaved" (Odyssey 13.194-196). Her plan is for Odysseus to disguise himself as a beggar, gather information without being recognized, and then take revenge on the suitors. Here, we see how Athena plans the entire idea for how Odysseus will retake his home from the suitors as soon as he lands on Ithaca. It is a clear display of strategy, showing how intelligent she truly is, which is why I gave her many answer choices such as "scientist" and "wisdom." However, I think that this example could also show the flaw that I gave Athena, which was "overthinking everything," as she does have the tendency to overplan, like she did in this case.`,
    `I think the Odyssey as a whole also influenced many of my answers for Athena, as throughout the book we see her follow Odysseus because she respects and admires his cunningness and intelligence as well. This is why I gave her many answer choices about respect and mutual understanding of others.`,
    `Overall, Athena was a great goddess to match with, and her intelligence makes her an important and interesting figure in Greek mythology.`
  ],
  Aphrodite: [
    `The goddess you matched with was Aphrodite, the goddess of love and beauty. This is why the majority of her answer choices are related to beauty and being more emotionally understanding compared to the choices given for Hera or Athena. This can be seen in the Homeric Hymns, where she is described as a goddess who "stirs ecstasy, among gods, subduing men as well" (Homeric Hymns, Hymn to Aphrodite 2-3). Here, we see how truly powerful her beauty is and the love it creates, as it makes even the gods fall under her influence. This is why, in many places in the personality quiz, I decided to give Aphrodite answer choices connected with love and charm.`,
    `Aphrodite, even with her beauty, is also a very caring figure. This can easily be seen in the Iliad, Book 3, when Paris is about to be slain by Menelaus, and she "snatched him up in a moment" (Iliad 3). This is an important moment because it shows how protective Aphrodite is, as it is a rare instance where we see a goddess directly involve herself in battle to save someone's life. This is why, in the quiz, I included many choices related to Aphrodite that focus on emotions and how caring she is.`,
    `However, this action also shows her biggest flaw, which is how she allows her emotions to become too controlling and manipulative. By saving Paris, she removes his responsibility and dishonors the outcome of the duel, which leads Helen to accuse Aphrodite of trying to "beguile" her into getting back into bed with Paris (Iliad 3). This shows how, even when her emotions are trying to help, she can go too far, affecting others and manipulating their choices. This is why the negative answer choice for her was "getting too emotional."`,
    `However, overall, you matched with the goddess that Paris also chose, and her beauty is unmatched in Greek mythology.`
  ]
};

// hide all screens
function hideScreens() {
  introScreen.hidden = true;
  quizScreen.hidden = true;
  resultScreen.hidden = true;
  worksCitedScreen.hidden = true;
}

function animateScreen(screen) {
  screen.classList.remove("screen-animation");
  void screen.offsetWidth;
  screen.classList.add("screen-animation");
}

function animateResultScreen() {
  resultScreen.classList.remove("screen-animation", "result-screen-animation");
  void resultScreen.offsetWidth;
  resultScreen.classList.add("result-screen-animation");
}

function startQuiz() {
  hideScreens();
  quizScreen.hidden = false;
  showQuestion();
}

// show current qestion
function showQuestion() {
  const current = questions[currentQuestion];

  progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  question.textContent = current.text;
  note.innerHTML = current.note ? current.note.replace(/\bnever\b/gi, '<span class="red-word">never</span>') : "";
  answers.innerHTML = "";
  extraAnswers.innerHTML = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => chooseAnswer(answer.points));

    if (answer.extra) {
      extraAnswers.appendChild(button);
    } else {
      answers.appendChild(button);
    }
  });

  animateScreen(quizScreen);
}

// update score totals
function chooseAnswer(points) {
  scores = scores.map((score, index) => score + points[index]);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// find top score
function showResult() {
  let highestScoreIndex = 0;

  for (let index = 1; index < scores.length; index++) {
    if (scores[index] > scores[highestScoreIndex]) {
      highestScoreIndex = index;
    }
  }

  const winningGoddess = goddesses[highestScoreIndex];

  showResultContent(winningGoddess);
  hideScreens();
  resultScreen.hidden = false;
  animateResultScreen();
}

function showResultContent(goddess) {
  resultName.textContent = goddess;
  resultImage.src = goddessImages[goddess];
  resultImage.alt = goddess;
  showAnalysis(goddess);
}

function showAnalysis(goddess) {
  resultAnalysis.innerHTML = "";

  if (!goddessAnalyses[goddess]) {
    return;
  }

  goddessAnalyses[goddess].forEach((paragraphText) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    resultAnalysis.appendChild(paragraph);
  });
}

function showWorksCited() {
  hideScreens();
  worksCitedScreen.hidden = false;
  animateScreen(worksCitedScreen);
}

function backToResult() {
  hideScreens();
  resultScreen.hidden = false;
  animateResultScreen();
}

function restartQuiz() {
  scores = [0, 0, 0];
  currentQuestion = 0;
  hideScreens();
  introScreen.hidden = false;
  animateScreen(introScreen);
}

function jumpToQuestion(questionIndex) {
  scores = [0, 0, 0];
  currentQuestion = questionIndex;
  hideScreens();
  quizScreen.hidden = false;
  showQuestion();
}

function jumpToResult(goddess) {
  showResultContent(goddess);
  hideScreens();
  resultScreen.hidden = false;
  animateResultScreen();
}

// testing jumps
function makeTestingJumps() {
  questions.forEach((questionItem, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Question ${index + 1}`;
    button.addEventListener("click", () => jumpToQuestion(index));
    questionJumpButtons.appendChild(button);
  });

  goddesses.forEach((goddess) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = goddess;
    button.addEventListener("click", () => jumpToResult(goddess));
    resultJumpButtons.appendChild(button);
  });
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
worksCitedButton.addEventListener("click", showWorksCited);
backToResultButton.addEventListener("click", backToResult);
jumpIntroButton.addEventListener("click", restartQuiz);
jumpWorksCitedButton.addEventListener("click", showWorksCited);

makeTestingJumps();
