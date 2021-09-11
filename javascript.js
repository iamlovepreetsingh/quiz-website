class question_create {
    constructor(question, option1, option2, right) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.right = right;
    }
}



let ques1 = new question_create(
    'Which type of JavaScript language is ___',
    'Object-Oriented',
    'Object-Based',
    'b'
);

let ques2 = new question_create(
    'Which one of the following also known as Conditional Expression',
    'immediate if',
    'Alternative to if-else',
    'a'
);
let ques3 = new question_create(
    'In JavaScript, what is a block of statement?',
    'block that combines a number of statements into a single compound statement',
    'both conditional block and a single statement',
    'a'
);
let ques4 = new question_create(
    'When interpreter encounters an empty statements, what it will do:',
    'Shows a warning',
    'Ignores the statements',
    'b'
);
let ques5 = new question_create(
    'The "function" and " var" are known as',
    'Keywords',
    'Declaration statements',
    'b'
);
let ques6 = new question_create(
    'Which of the following variables takes precedence over the others if the names are the same?',
    'The local element',
    'The two of the above',
    'a'
);
let ques7 = new question_create(
    'Which one of the following is the correct way for calling the JavaScript code?',
    'Preprocessor',
    'Function/Method',
    'b'
);
let ques8 = new question_create(
    'Which of the following type of a variable is volatile?',
    'Mutable variable',
    'Immutable variable',
    'a'
);
let ques9 = new question_create(
    'Which of the following option is used as hexadecimal literal beginning?',
    '00',
    'Both 0x and 0X',
    'b'
);
let ques10 = new question_create(
    'In the JavaScript, which one of the following is not considered as an error:',
    'Syntax error',
    'Division by zero',
    'b'
);
let ques11 = new question_create(
    'Which of the following number object function returns the value of the number?',
    'toString()',
    'valueOf()',
    'b'
);
let ques12 = new question_create(
    'In JavaScript the x===y statement implies that:',
    'Both are equal in the value and data type.',
    'Both are x and y are equal in value only',
    'a'
);


let question_array = [
    ques1,
    ques2,
    ques3,
    ques4,
    ques5,
    ques6,
    ques7,
    ques8,
    ques9,
    ques10,
    ques11,
    ques12
];



let total_question = 9;

let arrayForRandoms = [];

function createRandom() {
    let randomNumber = Math.random() * total_question;
    if (arrayForRandoms.length <= total_question) {
        if (arrayForRandoms.includes(Math.round(randomNumber))) {
            createRandom();
        }
        else {
            arrayForRandoms.push(Math.round(randomNumber));
        }
    } else {
        console.log('maximum length reached!!!')
    }
}

let pushNumber = true;

while (pushNumber == true) {
    if (arrayForRandoms.length <= total_question) {
        createRandom();
    } else {
        pushNumber = false;
    }
}

let question_box = document.querySelector('.question'),
    option = document.querySelectorAll('input[name="option"]'),
    nextBtn = document.querySelector('.next-btn'),
    option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    container = document.querySelector(".container");
let total_options = 2;

nextBtn.addEventListener('click', nextBtnFunction);

let first_ques_num = 0;
fillQuestion();
let totalMarks = 0;

function nextBtnFunction(e) {
    let rightAns = "";
    for (let i = 0; i < total_options; i++) {
        if (option[i].checked) {
            rightAns = option[i].value;
        }
    }

    if (rightAns == "") {
        alert('Please Select any one option');
        return
    }

    if (rightAns == question_array[arrayForRandoms[first_ques_num]].right) {
        totalMarks++;
    }
    first_ques_num++;
    if (first_ques_num > total_question) {
        showResult();
    } else {
        for (let i = 0; i < total_options; i++) {
            option[i].checked = false;
        }
        fillQuestion();
    }
}



function fillQuestion() {
    let question = question_array[arrayForRandoms[first_ques_num]];
    question_box.innerText = question.question;
    option1.innerText = question.option1;
    option2.innerText = question.option2;
    return question;
}

function showResult() {
    container.innerHTML = `<div class="result">
                                <h1>Your Score is ${totalMarks}</h1>
                           </div>`;
}

function hideResult() {
    container.innerHTML = `<div class="ques-box center">
    <p class="question"></p>
</div>
<div class="option-box center">
    <input type="radio" required name="option" id="radio-btn1" value="a">
    <label for="radio-btn1" class="option1"></label>
</div>
<div class="option-box center">
    <input type="radio" required name="option" id="radio-btn2" value="b">
    <label for="radio-btn2" class="option2"></label>
</div>
<button class="next-btn">Next</button>`;
}

