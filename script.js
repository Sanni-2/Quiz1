const startButton = document.querySelector(".startButton button");
const quit_button = document.querySelector(".quit");
const seconds = document.querySelector(".count-down");
const questionSection = document.querySelector(".questionSection");
const nextButton = document.querySelector(".next");

let playerScore = 0
let wrongAttempt = 0





//Start button Functionality
startButton.addEventListener("click", () => {
    questionSection.classList.add()
    questionOnScreen(0)
});



//Questions array
let questions = [
    {
        question: "What is the capital of the United States?",
        answer: "Washington DC",
        option: [
            "California",
            "Washington DC",
            "Florida",
            "Texas",
        ]
    },

    {
        question: "What is the capital of China?",
        answer: "Beijing",
        option: [
            "Guangdong",
            "Beijing",
            "Zhejiang",
            "Henan",
        ]
    },

    {
        question: "What is the capital of Canada?",
        answer: "Ottawa",
        option: [
            "Ontario",
            "Alberta",
            "Ottawa",
            "British Columbia",
        ]
    },

    {
        question: "What is the capital of Nigeria?",
        answer: "Abuja",
        option: [
            "Lagos",
            "Porthacourt",
            "Oyo",
            "Abuja",
        ]
    },


];


//show questions from array above
const questionOnScreen = (i) => {
    const questionTab = document.querySelector(".questionTab");


    const optionList = document.querySelector(".optionList");


    let questionTag = '<span>'+ questions[i].question +'</span>';


    let optionTag = '<div class="option"> '+ questions[i].option[0] +'<span></span></div>' + '<div class="option"> '+ questions[i].option[1] +' <span></span></div>' + '<div class="option"> '+ questions[i].option[2] +'<span></span></div>' + '<div class="option"> '+ questions[i].option[3] +'<span></span></div>' ;

    questionTab.innerHTML = questionTag;
    optionList.innerHTML = optionTag;

};


//next button
let count = 0;
nextButton.addEventListener( "click", () => {
    if(count < questions.length - 1){
    count++;
    questionOnScreen(count);
    }
    else{
        //Score screen goes here
    }
});


//quit button, it reloads everything on the page.
quit_button.addEventListener("click", () => {
    window.location.reload();
});




//When option is being clicked
