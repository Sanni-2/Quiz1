const startButton = document.querySelector(".startButton button");
const quit_button = document.querySelector(".buttons .quit");
const seconds = document.querySelector(".time .count-down");
const questionSection = document.querySelector(".questionSection");
const nextButton = document.querySelector(".clicks .buttons .next");




startButton.onclick = () => {
    questionSection.classList.add()
    questionOnScreen(0)
}



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
            "Quebec",
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


//showing questions from array above
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
nextButton.onclick = () => {
    if(count < questions.length - 1){
    count++;
    questionOnScreen(count);
    }
    else{}
};