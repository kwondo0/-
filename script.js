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

const fades = document.querySelectorAll('.fade')

window.addEventListener('scroll', () => {
  fades.forEach((item) => {
    const top = item.getBoundingClientRect().top

    if (top < window.innerHeight - 100) {
      item.classList.add('show')
    }
  })
})

const darkBtn = document.getElementById('darkBtn')

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

const topBtn = document.getElementById('topBtn')

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
