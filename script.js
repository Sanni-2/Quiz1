const startButton = document.querySelector(".startButton button");
const quit_button = document.querySelector(".buttons .quit");
const continue_button = document.querySelector(".buttons .next");
const seconds = document.querySelector(".time .count-down");
const questionSection = document.querySelector(".questionSection");





startButton.onclick = () => {
    questionSection.classList.add()
    questionOnScreen(0)
}



//Questions array
let questions = [
    {
        numb: 1,
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
        numb: 2,
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
        numb: 3,
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
        numb: 4,
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
}

