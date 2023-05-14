const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


// ==============================  DISPLAY THE MENU ============================== 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ==============================  CLOSE THE MENU ============================== 
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ==============================  REMOVE MENU MOBILE WHEN AN INDIVIDUAL NAV-ITEM IS CLICKED ============================== //
const navItem = document.querySelectorAll('.nav-item')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-item, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navItem.forEach(n => n.addEventListener('click', linkAction))

// ======================= SKILLS SECTION ============================== //
const skillsContent = document.getElementsByClassName('skills-content'),
    skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

//  ============================== QUALIFICATION TABS ============================== //
const tabs = document.querySelectorAll('[data-target'),
    tabcontents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabcontents.forEach(tabcontent => {
            tabcontent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })

        tabs.classList.add('qualification-active')
    })
})

//  ============================== SERVICES ============================== //
const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})