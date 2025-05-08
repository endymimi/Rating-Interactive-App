
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.getElementById('error-msg');
const thankYouCard = document.getElementById('thankyou-card');
const ratingCard = document.getElementById('rating-card');
const selectedRatingText = document.getElementById('selected-rating-text');
const rateAgainBtn = document.getElementById('rate-again-btn');

let selectedRating = null;

ratingButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedRating = btn.dataset.value;

    ratingButtons.forEach(b => {
      b.classList.remove('bg-[var(--orange-500)]', 'text-black');
      b.classList.add('bg-gray-700', 'text-gray-300');
      b.setAttribute('aria-pressed', 'false');
    });

    btn.classList.remove('bg-gray-700', 'text-gray-300');
    btn.classList.add('bg-[var(--orange-500)]', 'text-black');
    btn.setAttribute('aria-pressed', 'true');

    errorMsg.classList.add('hidden');
  });
});

submitBtn.addEventListener('click', () => {
  if (!selectedRating) {
    errorMsg.classList.remove('hidden');
    return;
  }

  selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
});

rateAgainBtn.addEventListener('click', () => {
  selectedRating = null;
  ratingButtons.forEach(b => {
    b.classList.remove('bg-[var(--orange-500)]', 'text-white');
    b.classList.add('bg-gray-700', 'text-gray-300');
    b.setAttribute('aria-pressed', 'false');
  });

  ratingCard.classList.remove('hidden');
  thankYouCard.classList.add('hidden');
});
