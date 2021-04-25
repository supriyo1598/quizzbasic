const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice"));
const scoreText=document.getElementById("score");
let currentQuestion={};
let accept=false;
let score=0;
let questioncounter=0;
let avq=[];
let questions=[
    {
        question:"What is the full form of HTML1?",
        choice1:"<HYPER TEXT MARKUP LANGUAGE>",
        choice2:"<HYPER TEXT MARKUP>",
        choice3:"<HYPER TEXT MARKUP Voice>",
        choice4:"<HYPER MARKUP>",
        answer:1
    },
    {
        question:"What is the full form of HTML2?",
        choice1:"<HYPER TEXT MARKUP LANGUAGE>",
        choice2:"<HYPER TEXT MARKUP>",
        choice3:"<HYPER TEXT MARKUP Voice>",
        choice4:"<HYPER MARKUP>",
        answer:2
    },
    {
        question:"What is the full form of HTML3",
        choice1:"<HYPER TEXT MARKUP LANGUAGE>",
        choice2:"<HYPER TEXT MARKUP>",
        choice3:"<HYPER TEXT MARKUP Voice>",
        choice4:"<HYPER MARKUP>",
        answer:3
    },
];

const CORRECT_ANS=10;
const MAX_QUESTION=questions.length;

startGame=()=>{
    questioncounter=0;
    score=0;
    avq=[...questions];
    getNewQuestion();
};

getNewQuestion=()=>{
    questioncounter++;
    const questionIndex=Math.floor(Math.random()*avq.length);
    currentQuestion=avq[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice=>{
        const number=choice.dataset["number"];
        choice.innerText=currentQuestion["choice"+number];
    });

    avq.splice(questionIndex,1);
    accept=true;
};
choices.forEach(choice=>{
    choice.addEventListener("click",e=>{
        if(!accept) return;

        accept=true;
        const seletChoice=e.target;
        const selectedAnswer=seletChoice.dataset["number"];

        const answercheck=selectedAnswer==currentQuestion.answer?"correct":"incorrect";

        if(answercheck=="correct"){
            incrementScore(CORRECT_ANS)
        }
        seletChoice.parentElement.classList.add(answercheck);
        setTimeout(()=>{
            seletChoice.parentElement.classList.remove(answercheck);
            getNewQuestion();
        },2000);        
    });
});
incrementScore=num=>{
    score+=num;
    scoreText.innerText=score;

};

startGame();




