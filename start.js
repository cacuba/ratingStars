document.addEventListener('click', function (event) {
  if (event.target.parentNode.matches('.star')) {
    const productStars = event.target.closest('div').children;
    const selectRating = parseInt(event.target.dataset.rating) - 1;

    Object.values(productStars).forEach((star, index) => {
      star.firstElementChild.attributes['xlink:href'].value = selectRating >= index ? '#starFull' : '#starEmpty';
    });
  }
}, false);
