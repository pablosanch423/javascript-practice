const form = document.forms.quiz
const questionparent = document.getElementById('questions');

var questions = [
    {
        name: "one",
        question: "Whats 1+1 ?",
        choices: ["1", "2", "-1", "-4"],
        awnser: 2
    },
    {   
        name: "two",
        question: "Whats 1+4 ?",
        choices: ["1", "5", "-5", "-4"],
        awnser: 5
    },
    {   
        name: "three",
        question: "Whats 3+1 ?",
        choices: ["1", "4", "-1", "-4"],
        awnser: 4
    },
    {   
        name: "four",
        question: "Whats -1+1 ?",
        choices: ["1", "4", "-1", "0"],
        awnser: 0
    },
    {
        name: "five",
        question: "Whats 1*10000*0 ?",
        choices: ["1", "0", "1000000", "-4"],
        awnser: 0
    }

    
]

questions.forEach(function(option){
    questionparent.innerHTML += `
    <div >
    <h6>${option.question}</h6>
    <input type="radio" name="${option.name}" value="${option.choices[0]}" required>
    <label>${option.choices[0]}</label>
    <br>
    <input type="radio" name="${option.name}" value="${option.choices[1]}" required>
    <label>${option.choices[1]}</label>
    <br>
    <input type="radio" name="${option.name}" value="${option.choices[2]}" required>
    <label>${option.choices[2]}</label>
    <br>
    <input type="radio" name="${option.name}" value="${option.choices[3]}" required>
    <label>${option.choices[3]}</label>
    <br>
    </div>
    <br>
    `
})


let score = 0;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const userawnsers = document.querySelectorAll('input:checked');

    userawnsers.forEach(function(awnser){
        for(let i = 0; i < 4; i++){
            if(awnser.value == questions[i].awnser){
                score += 1
            }
        }
    })

    form.innerHTML = `<h3>Final Score: ${score} / 5</h3>`

})