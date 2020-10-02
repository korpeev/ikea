
const catalog = document.querySelector('.catalog')
const btnBurger = document.querySelector('.btn-burger')
const btnClose = document.querySelector('.btn-close')
const subCatalog = document.querySelector('.subcatalog')
const subCatalogHeader = document.querySelector('.subcatalog-header')
const btnReturn = document.querySelector('.btn-return')

const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.insertAdjacentElement('beforeend', overlay)

const openMenu = () => {
    catalog.classList.add('open')
    overlay.classList.add('active')
}

const closeMenu = () => {
    catalog.classList.remove('open')
    overlay.classList.remove('active')
    closeSubMenu()
}

const openSubMenu = (e) => {
    e.preventDefault()
    const target = e.target
    console.log(target)
    const itemList = target.closest('.catalog-list__item')
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML
        subCatalog.classList.add('subopen')
    }
}

const closeSubMenu = () => {
     subCatalog.classList.remove('subopen')
}

btnBurger.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)
catalog.addEventListener('click', openSubMenu)
btnReturn.addEventListener('click', closeSubMenu)
document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && overlay.classList.contains('active')) {
        closeMenu()
    }
})
