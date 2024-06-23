let numRows = 2;
let totalCredits = 0;
let gradeXCredit = 0.0;

const add_row = document.getElementById('add-row');
const reset = document.getElementById('reset');
const cross_course = document.getElementById('cross');
const calculate = document.getElementById('calculate');

function addCourseInput(sibling) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('text-sm', 'bg-red-300', 'text-center', 'col-span-5', 'pb-6', 'h-6');

    const newDiv2 = document.createElement('div');
    newDiv2.classList.add('bg-zinc-200','h-4');

    const courseInput = document.createElement('input');
    courseInput.classList.add('w-36','text-center', 'h-4', 'pt-1');

    newDiv2.appendChild(courseInput);
    newDiv.appendChild(newDiv2);

    addGradeSelector(sibling);
    sibling.insertAdjacentElement('afterend', newDiv);
}

function addGradeSelector(sibling) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('text-xs', 'text-center', 'bg-rose-50', 'w-22', 'col-span-2');

    const newDiv2 = document.createElement('div');
    newDiv2.classList.add('bg-rose-50');

    const select = document.createElement('select');
    select.classList.add('w-full', 'h-4', 'grade-selector');

    const op0 = document.createElement('option');
    op0.selected = true;
    op0.disabled = true;
    op0.value = '';
    op0.textContent = '';

    const op1 = document.createElement('option');
    op1.value = '4.0';
    op1.textContent = 'A';

    const op2 = document.createElement('option');
    op2.value = '3.5';
    op2.textContent = 'B+';

    const op3 = document.createElement('option');
    op3.value = '3.0';
    op3.textContent = 'B';

    const op4 = document.createElement('option');
    op4.value = '2.5';
    op4.textContent = 'C+';

    const op5 = document.createElement('option');
    op5.value = '2.0';
    op5.textContent = 'C';

    const op6 = document.createElement('option');
    op6.value = '1.0';
    op6.textContent = 'D';

    const op7 = document.createElement('option');
    op7.value = '0.0';
    op7.textContent = 'F';

    select.appendChild(op0);
    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);
    select.appendChild(op4);
    select.appendChild(op5);
    select.appendChild(op6);
    select.appendChild(op7);

    newDiv2.appendChild(select);
    newDiv.appendChild(newDiv2);

    addCreditsSelector(sibling);
    sibling.insertAdjacentElement('afterend', newDiv);
}

function addCreditsSelector(sibling) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('text-xs', 'text-center', 'bg-yellow-50', 'w-22', 'col-span-2', 'outer');

    const newDiv2 = document.createElement('div');
    newDiv2.classList.add('bg-yellow-50');

    const select = document.createElement('select');
    select.classList.add('w-full', 'h-4', 'credit-selector');

    const op0 = document.createElement('option');
    op0.selected = true;
    op0.disabled = true;
    op0.value = '0';
    op0.textContent = '';

    const op1 = document.createElement('option');
    op1.value = '5';
    op1.textContent = '5';

    const op2 = document.createElement('option');
    op2.value = '4';
    op2.textContent = '4';

    const op3 = document.createElement('option');
    op3.value = '3';
    op3.textContent = '3';

    const op4 = document.createElement('option');
    op4.value = '2';
    op4.textContent = '2';
    
    const op5 = document.createElement('option');
    op5.value = '1';
    op5.textContent = '1';

    select.appendChild(op0);
    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);
    select.appendChild(op4);
    select.appendChild(op5);

    newDiv2.appendChild(select);
    newDiv.appendChild(newDiv2);

    createXButton(sibling);
    sibling.insertAdjacentElement('afterend', newDiv);

}

 function createXButton(sibling) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('bg-orange-200', 'col-span-1', 'text-center', 'outer');
    newDiv.id = 'cross';

    const newDiv2 = document.createElement('div');
    newDiv2.classList.add('bg-zinc-200', 'h-4', 'flex', 'justify-center', 'items-center');

    const button = document.createElement('button');
    button.classList.add('w-2', 'h-2', 'hover:bg-red-200', 'rounded-md');

    const img = document.createElement('img');
    img.classList.add('text-center');
    img.src = 'images/cross.png';

    button.appendChild(img);
    newDiv2.appendChild(button);
    newDiv.appendChild(newDiv2);

    sibling.insertAdjacentElement('afterend', newDiv);
    button.addEventListener('click', function() {
        newDiv.previousElementSibling.remove();
        newDiv.previousElementSibling.remove();
        newDiv.previousElementSibling.remove();
        newDiv.remove();
        numRows--;
    
    });

 }

add_row.addEventListener('click', function() {
    addCourseInput(cross_course);
    numRows++;
  });

reset.addEventListener('click', function() {
    location.reload();
    numGrades = 2;
});

calculate.addEventListener('click', function() {
    const allCredits = document.querySelectorAll('.credit-selector');
    allCredits.forEach(selectElement => {
        const val = parseInt(selectElement.value);
        totalCredits += val;
    });


    const allGrade = document.querySelectorAll('.grade-selector');
    for (let i = 0; i < numRows; i++) { 
        let tempGrade = parseFloat(allGrade[i].value);
        let tempCredit = parseInt(allCredits[i].value)
        gradeXCredit += (tempCredit * tempGrade);
    }
    
    let gpa = gradeXCredit / totalCredits;
    alert(gpa.toFixed(1));

    gradeXCredit = 0;
    totalCredits = 0;

});

