let rates = document.querySelectorAll('.rate p');
let selectedRating = null; 

rates.forEach(function(rate) {
   rate.addEventListener('click', function() {
      rates.forEach(function(r) {
         r.classList.remove('selected');
      });
      rate.classList.add('selected');
      selectedRating = rate.textContent;
   });
});

let submit = document.querySelector('.submit');
let firstPage = document.querySelector('.f-page');
let secondPage = document.querySelector('.s-page');
let span = document.querySelector('.span')

submit.addEventListener('click',function(){
    if (selectedRating === null) {
   alert("Please select a rating first.");
} else {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
    span.textContent = selectedRating;
    }
});