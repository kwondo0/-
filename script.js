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

const topBtn = document.getElementById('topBtn')

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

const text = '안녕하세요, 권도영입니다.'
let index = 0

function typing() {
  if (index < text.length) {
    document.getElementById('typing').innerHTML += text.charAt(index)
    index++
    setTimeout(typing, 100)
  }
}

typing()

window.addEventListener('scroll', () => {
  const scroll =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

  document.getElementById('progress').style.width = scroll + '%'
})

const darkBtn = document.getElementById('darkModeBtn')

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
