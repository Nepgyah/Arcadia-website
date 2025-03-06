var isOpen = false;
var openDropdownClass = 'nav__item--dropdown-open';
var nav = document.getElementById('navigation');
const mediaQuery = window.matchMedia('(max-width: 768px)')

handleBreakPointChange(mediaQuery)

function openNavBar() {
    isOpen = !isOpen;
    if (isOpen) {
        nav.classList.add('nav--open')
    } else {
        nav.classList.remove('nav--open')
    }
}

function openSubNav(category) {

    var dropdowns = document.getElementsByClassName('nav__item--has-dropdown');
    for (let index = 0; index < dropdowns.length; index++) {
        if (dropdowns[index].id === category) {
            if (dropdowns[index].classList.contains(openDropdownClass)) {
                dropdowns[index].classList.remove(openDropdownClass)
            } else {
                dropdowns[index].classList.add(openDropdownClass)
            }
        } else {
            dropdowns[index].classList.remove(openDropdownClass);
        }
    }
}

function handleBreakPointChange(event){
    if (!event.matches) {
        nav.classList.remove('nav--open')
    }
}

mediaQuery.addEventListener("change", handleBreakPointChange)
