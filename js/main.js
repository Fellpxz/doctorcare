//Adcionando evento na janela
window.addEventListener('scroll', onScroll)

//mudar cor do menu inicial
const scrolling = document.querySelector('#navigation')

const topButton = document.querySelector('#backToTopButton')

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const TargetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha
  // Quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = TargetLine >= sectionTop

  console.log(
    'o topo da seção passou ou chegou na linha',
    sectionTopReachOrPassedTargetline
  )

  // Verificar se a parte de baixo da linha alvo
  // Quais dados vou precisar?

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= TargetLine

  console.log('O fundo da seção passou da linha', sectionEndPassedTargetline)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    scrolling.classList.add('scroll')
  } else {
    scrolling.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 1400) {
    topButton.classList.add('show')
  } else {
    topButton.classList.remove('show')
  }
}

//Menu Expanded
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700'
}).reveal(
  '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, footer'
)
