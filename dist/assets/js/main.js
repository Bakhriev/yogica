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

document.addEventListener('click', (e) => {
  let currentDropdown
  if (e.target.closest('[data-dropdown]')) {
    console.log('click')
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('opened')

    // let selected = currentDropdown.querySelector('.selected')
    // currentDropdown.querySelectorAll('.sub-menu__item').forEach((item) => {
    //   item.addEventListener('click', () => {
    //     selected.innerText = item.innerText
    //   })
    // })
  }
  document.querySelectorAll('[data-dropdown].opened').forEach((dropdown) => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('opened')
  })
})