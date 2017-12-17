const inputs = document.querySelectorAll('.grade');
const final = document.querySelector('#finalGPA');
const button = document.querySelector('input[type="button"]');
button.addEventListener('click', checkGrades, false);

const gradeMap = {
  "A": 4,
  "A-":3.7,
  "B+":3.3,
  "B": 3,
  "B-": 2.7,
  "C+": 2.4,
  "C": 2.1,
  
}

function checkGrades() {
  final.textContent = [...inputs].reduce((total, grade) => {
    return total += gradeMap[grade.value.toUpperCase()]/4;
  }, 0);
}