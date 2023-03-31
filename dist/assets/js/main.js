const reviewCards = document.querySelectorAll('.review__card')

reviewCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    reviewCards.forEach((c) => {
      c.classList.remove('hovered')
    })
    card.classList.add('hovered')
  })
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered')
    reviewCards[1].classList.add('hovered')
  })
})