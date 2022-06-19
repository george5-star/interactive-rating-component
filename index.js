const ratings = document.getElementsByClassName('rating');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const submitBtn = document.querySelector('.rating-card__btn');
let rating = document.getElementById('rating');
let submitRating;

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", function() {
        (document.querySelector('.active'))? document.querySelector('.active').classList.toggle('active'): '';
        this.classList.toggle('active');
        submitRating = this.textContent;
    })
}

submitBtn.addEventListener('click', function(){
    if(submitRating){
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'block';    
        rating.textContent = submitRating;
    }
})