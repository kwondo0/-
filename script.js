const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.menu a')

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove('active')

    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active')
    }
  })
})

const fades = document.querySelectorAll('.fade')

window.addEventListener('scroll', () => {
  fades.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top

    if (itemTop < window.innerHeight - 100) {
      item.classList.add('show')
    }
  })
})

window.onload = () => {
  alert('안녕하세요! 권도영의 포트폴리오입니다.')
}

const topBtn = document.getElementById('topBtn')

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
