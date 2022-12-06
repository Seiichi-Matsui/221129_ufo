const sticky1 = document.getElementById('sticky_item1')
const sticky1_img = document.getElementById('sticky_item1_img')
const sticky_item2_img = document.getElementById('sticky_item2_img')
const sticky__bg = document.getElementById('sticky__bg')
let sticky1Point = sticky1_img.getBoundingClientRect().top
const animation1 = document.getElementById('container_1_animation')
const animation2 = document.getElementById('container_3_animation_1')
const animation3 = document.getElementById('container_3_animation_2')
let width = document.documentElement.clientWidth
let windowH = document.documentElement.clientHeight
let skewBack = ""
let setHeight = "0.3"


const hamburgerMenu = document.getElementById('hamburger__menu')
const navWrapper = document.getElementById('sp_nav_wrapper')
const navSpecialToggle = document.getElementById('nav_special')
const navIconToggle = document.getElementById('nav_icon')
const specialBtn = document.getElementById('special_btn')

let scroll_1 = ""
let scroll_2 = ""
let scroll_3 = ""
let scroll_4 = ""
let scroll_5 = ""
let scroll_6 = ""



// ハンバーガーメニュー
function menu__toggle() {
    hamburgerMenu.classList.toggle('nav__button__on')
    navWrapper.classList.toggle('sp__nav__wrapper')
    navIconToggle.classList.toggle('nav__icon__on')
}

// navスペシャル
function navSpecial() {
    if (width <= 940) {
        navSpecialToggle.classList.toggle('nav__special__on')
        specialBtn.classList.toggle('special__btn__opn')
        specialBtn.classList.toggle('special__btn__cls')
    }
}

window.addEventListener('resize', () => {
    setH()
    width = document.documentElement.clientWidth
    windowH = document.documentElement.clientHeight
})

window.addEventListener('load', () => {
    setH()
})

// 焼きそばアニメーション数値調整
function setH() {
    if (2501 < width) {
        setValuePc()
    } else if (2001 < width && width < 2500) {
        setHeight = 0.2
        setValuePc()
    } else if (1501 < width && width < 2000) {
        setHeight = 0.3
        setValuePc()
    } else if (941 < width && width < 1500) {
        setHeight = 0.35
        setValuePc()
    } else if (801 < width && width < 940) {
        setHeight = 0.1
        setValueSpM()
    } else if (601 < width && width < 800) {
        setHeight = -0.1
        setValueSpM()
    } else if (401 < width && width < 600) {
        setHeight = 0.1
        setValueSpS()
    } else if (width < 400) {
        setHeight = 0.1
        setValueSpS()
    }
}
function setValuePc() {
    skewBack = 1.2
    scroll_1 = 0.15
    scroll_2 = 0.48
    scroll_3 = 0.57
    scroll_4 = 0.69
    scroll_5 = 0.98
    scroll_6 = 1.432
}

function setValueSpM() {
    skewBack = 0.9
    scroll_1 = 0.15
    scroll_2 = 0.875
    scroll_3 = 0.57
    scroll_4 = 0.69
    scroll_5 = 2.375
    scroll_6 = 2
}
function setValueSpS() {
    skewBack = 0.9
    scroll_1 = 0.15
    scroll_2 = 0.375
    scroll_3 = 0.57
    scroll_4 = 0.69
    scroll_5 = 1.875
    scroll_6 = 2
}

window.addEventListener('scroll', () => {
    const scroll = window.scrollY + (windowH * setHeight)
    const stickyH1 = scroll - width * scroll_2
    const bgH = (scroll - width * scroll_5) * skewBack
    const noodleBottom = width * scroll_4 //焼きそば下100vw
    setH()
    width = document.documentElement.clientWidth
    windowH = document.documentElement.clientHeight




        // console.log("スクロール量：" + scroll);
    if (width * scroll_1 < scroll) {
        animation1.classList.add('container__1__animation')
    }
    if (width * scroll_2 < scroll && width * scroll_5 > scroll ){
        // 焼きそば上
        sticky1_img.style.top = stickyH1 + "px"
        sticky__bg.style.height = "10px"
    } else if (width * scroll_5 <= scroll && width * scroll_3 > bgH ) {
        // 焼きそば上
        sticky1_img.style.top = stickyH1 - bgH + "px"
        // 焼きそば背
        sticky__bg.style.height = bgH + "px"
        // 焼きそば下
        const t = noodleBottom - bgH
        sticky_item2_img.style.transform =  "skew(0, 12deg) translate(0," + t + "px)"
        animation2.classList.remove('container_3_animation_1')
        animation3.classList.remove("container_3_animation_2")

    } else if (width * scroll_6 <+ scroll){
        animation2.classList.add('container_3_animation_1')
        animation3.classList.add("container_3_animation_2")
    }
})