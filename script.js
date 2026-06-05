/* =========================
   타이핑 효과
========================= */

const typingText = '안녕하세요, 권도영입니다.'

let typingIndex = 0

function startTyping() {
  if (typingIndex < typingText.length) {
    document.getElementById('typing').innerHTML +=
      typingText.charAt(typingIndex)

    typingIndex++

    setTimeout(startTyping, 100)
  }
}

startTyping()

/* =========================
   실시간 시계
========================= */

function updateClock() {
  const now = new Date()

  const time = now.toLocaleTimeString('ko-KR')

  document.getElementById('clock').innerHTML = time
}

setInterval(updateClock, 1000)

updateClock()

/* =========================
   방문 횟수
========================= */

let visitCount = localStorage.getItem('visitCount')

if (!visitCount) {
  visitCount = 1
} else {
  visitCount = Number(visitCount) + 1
}

localStorage.setItem('visitCount', visitCount)

document.getElementById('visitCount').innerHTML = `${visitCount}회`

/* =========================
   랜덤 명언
========================= */

const quotes = [
  '꾸준함은 재능을 이긴다.',

  '오늘의 노력이 내일의 실력이 된다.',

  '배움에는 끝이 없다.',

  '작은 개선이 큰 변화를 만든다.',

  '실패는 경험이고 경험은 자산이다.',

  '코드는 거짓말하지 않는다.',

  '포기하지 않는 사람이 결국 성장한다.',
]

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

document.getElementById('quote').innerHTML = `"${randomQuote}"`

/* =========================
   다크모드
========================= */

const darkBtn = document.getElementById('darkModeBtn')

const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark') {
  document.body.classList.add('dark')

  darkBtn.innerHTML = '☀️'
}

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')

    darkBtn.innerHTML = '☀️'
  } else {
    localStorage.setItem('theme', 'light')

    darkBtn.innerHTML = '🌙'
  }
})

/* =========================
   프로젝트 필터
========================= */

const filterButtons = document.querySelectorAll('.filter-buttons button')

const projectCards = document.querySelectorAll('.project-card')

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter

    projectCards.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block'
      } else if (card.classList.contains(filter)) {
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    })
  })
})

/* =========================
   프로젝트 모달
========================= */

const modal = document.getElementById('projectModal')

const modalTitle = document.getElementById('modalTitle')

const modalDescription = document.getElementById('modalDescription')

const closeModal = document.getElementById('closeModal')

const detailButtons = document.querySelectorAll('.detail-btn')

detailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const project = button.parentElement.dataset.project

    if (project === 'timesense') {
      modalTitle.innerHTML = 'TimeSense'

      modalDescription.innerHTML = `
        시간의 흐름을 직관적으로
        인지할 수 있도록 기획한
        웹 서비스입니다.

        사용자의 시간 관리 능력 향상과
        생산성 향상을 목표로
        제작하였습니다.

        사용 기술:
        HTML, CSS, JavaScript
        `
    }

    if (project === 'portfolio') {
      modalTitle.innerHTML = 'Portfolio Website'

      modalDescription.innerHTML = `
        개인 프로젝트와
        기술 스택을 소개하기 위해
        제작한 포트폴리오 웹사이트입니다.

        반응형 웹,
        다크모드,
        애니메이션을 구현했습니다.

        사용 기술:
        HTML, CSS, JavaScript
        `
    }

    modal.style.display = 'flex'
  })
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})

/* =========================
   스크롤 진행률
========================= */

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const percent = (scrollTop / scrollHeight) * 100

  document.getElementById('progressBar').style.width = percent + '%'
})

/* =========================
   Fade 애니메이션
========================= */

const fadeElements = document.querySelectorAll('.fade')

function revealElements() {
  fadeElements.forEach((item) => {
    const top = item.getBoundingClientRect().top

    if (top < window.innerHeight - 100) {
      item.classList.add('show')
    }
  })
}

window.addEventListener('scroll', revealElements)

revealElements()

/* =========================
   메뉴 활성화
========================= */

const sections = document.querySelectorAll('section')

const navLinks = document.querySelectorAll('.nav-links a')

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

/* =========================
   맨 위 버튼
========================= */

const topBtn = document.getElementById('topBtn')

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    topBtn.style.display = 'block'
  } else {
    topBtn.style.display = 'none'
  }
})

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
