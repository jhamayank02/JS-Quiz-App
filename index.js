console.log("This is our Quiz App");

let submit = document.getElementById('submit');
let correctAns = document.getElementById('correctAns');    // here we have to show correct score
let wrongAns = document.getElementById('wrongAns');        // here we have to show wrong score
let countCorrect = 0;     // Will count correct answers
let countWrong = 0;   // Will count wrong answers


function question1func() {
    let first = document.getElementsByName('first');    // let first input tag by name "first"
    let onSubmit1 = document.getElementById('onSubmit1');   // here we will show correct or wrong icons after submission

    for (i = 0; i < first.length; i++) {
        if (first[i].checked) {
            console.log(first[i].value);

            // If correct then do this
            if (first[i].value == "4") {
                console.log("Correct answer");
                // onSubmit1.innerHTML = `<span class="badge badge-success">Correct Answer</span>`;
                onSubmit1.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }

            // If wrong then do this
            else {
                console.log("Wrong answer");
                onSubmit1.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question2func() {
    let second = document.getElementsByName('second');
    let onSubmit2 = document.getElementById('onSubmit2');

    for (j = 0; j < second.length; j++) {
        if (second[j].checked) {
            console.log(second[j].value);
            if (second[j].value == "Delhi") {
                console.log("Correct answer");
                onSubmit2.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit2.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question3func() {
    let third = document.getElementsByName('third');
    let onSubmit3 = document.getElementById('onSubmit3');


    for (j = 0; j < third.length; j++) {
        if (third[j].checked) {
            console.log(third[j].value);
            if (third[j].value == "Lotus") {
                console.log("Correct answer");
                onSubmit3.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit3.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question4func() {
    let fourth = document.getElementsByName('fourth');
    let onSubmit4 = document.getElementById('onSubmit4');


    for (j = 0; j < fourth.length; j++) {
        if (fourth[j].checked) {
            console.log(fourth[j].value);
            if (fourth[j].value == "20") {
                console.log("Correct answer");
                onSubmit4.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit4.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question5func() {
    let fifth = document.getElementsByName('fifth');
    let onSubmit5 = document.getElementById('onSubmit5');


    for (j = 0; j < fifth.length; j++) {
        if (fifth[j].checked) {
            console.log(fifth[j].value);
            if (fifth[j].value == "366") {
                console.log("Correct answer");
                onSubmit5.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit5.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question6func() {
    let sixth = document.getElementsByName('sixth');
    let onSubmit6 = document.getElementById('onSubmit6');


    for (j = 0; j < sixth.length; j++) {
        if (sixth[j].checked) {
            console.log(sixth[j].value);
            if (sixth[j].value == "Dog") {
                console.log("Correct answer");
                onSubmit6.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit6.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question7func() {
    let seventh = document.getElementsByName('seventh');
    let onSubmit7 = document.getElementById('onSubmit7');


    for (j = 0; j < seventh.length; j++) {
        if (seventh[j].checked) {
            console.log(seventh[j].value);
            if (seventh[j].value == "All of the above") {
                console.log("Correct answer");
                onSubmit7.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit7.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question8func() {
    let eightth = document.getElementsByName('eightth');
    let onSubmit8 = document.getElementById('onSubmit8');


    for (j = 0; j < eightth.length; j++) {
        if (eightth[j].checked) {
            console.log(eightth[j].value);
            if (eightth[j].value == "Peacock") {
                console.log("Correct answer");
                onSubmit8.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit8.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question9func() {
    let nineth = document.getElementsByName('nineth');
    let onSubmit9 = document.getElementById('onSubmit9');


    for (j = 0; j < nineth.length; j++) {
        if (nineth[j].checked) {
            console.log(nineth[j].value);
            if (nineth[j].value == "Delhi") {
                console.log("Correct answer");
                onSubmit9.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit9.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

function question10func() {
    let tenth = document.getElementsByName('tenth');
    let onSubmit10 = document.getElementById('onSubmit10');


    for (j = 0; j < tenth.length; j++) {
        if (tenth[j].checked) {
            console.log(tenth[j].value);
            if (tenth[j].value == "+") {
                console.log("Correct answer");
                onSubmit10.innerHTML = `<i class="fa fa-2x fa-check" style="color:green;"></i>`;
                countCorrect++;
            }
            else {
                console.log("Wrong answer");
                onSubmit10.innerHTML = `<i class="fa fa-2x fa-times" style="color:red;""></i>`;
                countWrong++;
            }
        }
    }

}

submit.addEventListener("click", () => {
    console.log("Your test has been submitted");
    // calling all the functions on submission of test
    question1func();
    question2func();
    question3func();
    question4func();
    question5func();
    question6func();
    question7func();
    question8func();
    question9func();
    question10func();

    // showing success message
    let success = document.getElementById('success');
    success.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>SUCCESS!</strong> Your test has been successfully submitted. Reload the page to try again.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;

    // score area
    let countCorrectAns = countCorrect;
    let countWrongAns = countWrong;
    correctAns.innerText = `Correct Answer: ${countCorrectAns}`;
    wrongAns.innerText = `Wrong Answer: ${countWrongAns}`;

})

// reload button
let reloadBtn = document.getElementById('reloadBtn');
function reloadBtnFunc() {
    reloadBtn.addEventListener("click", () => {
        location.reload();
    })
}
reloadBtnFunc();
