AOS.init()

// 0. 헤더
// 0-1. 모바일 메뉴창 (by 헤더)
const $menuButton = document.querySelector('.header-nav-button')
const $menuLinkButton = document.querySelectorAll('.modal-menu-link')
const $modalMenu = document.querySelector('.modal-menu')
const $backdrop = document.querySelector('.backdrop')

const toggleMenu = () => {
  $menuButton.classList.toggle('is-open')
  $modalMenu.classList.toggle('is-open')
  $backdrop.classList.toggle('is-open')
}

const removeMenu = () => {
  $backdrop.classList.remove('is-open')
  $modalMenu.classList.remove('is-open')
  $menuButton.classList.remove('is-open')
}

$menuButton.addEventListener('click', toggleMenu)
$backdrop.addEventListener('click', removeMenu)
$menuLinkButton.forEach((button) => {
  button.addEventListener('click', toggleMenu)
})
