const sticky1 = document.getElementById('sticky_item1')
const sticky1_img = document.getElementById('sticky_item1_img')
const sticky_item2_img = document.getElementById('sticky_item2_img')
const sticky__bg = document.getElementById('sticky__bg')
let sticky1Point = sticky1_img.getBoundingClientRect().top
const animation1 = document.getElementById('container_1_animation')
const animation2 = document.getElementById('container_3_animation_1')
const animation3 = document.getElementById('container_3_animation_2')

const hamburgerMenu = document.getElementById('hamburger__menu')
const navWrapper = document.getElementById('sp_nav_wrapper')
const navSpecialToggle = document.getElementById('nav_special')
const navIconToggle = document.getElementById('nav_icon')
const specialBtn = document.getElementById('special_btn')


// ハンバーガーメニュー
function menu__toggle() {
    hamburgerMenu.classList.toggle('nav__button__on')
    navWrapper.classList.toggle('sp__nav__wrapper')
    navIconToggle.classList.toggle('nav__icon__on')
}

// navスペシャル
function navSpecial() {
        const width = document.documentElement.clientWidth
    if (width <= 940) {
        navSpecialToggle.classList.toggle('nav__special__on')
        specialBtn.classList.toggle('special__btn__opn')
        specialBtn.classList.toggle('special__btn__cls')
    }
}

window.addEventListener('scroll', () => {
    const width = document.documentElement.clientWidth
    const scroll = window.scrollY;
    const stickyH1 = scroll - width * 0.48
    const bgH = (scroll - width * 0.98) * 1.4
    const noodleBottom = width *0.69 //焼きそば下100vw



        console.log("スクロール量：" + scroll);
    if (width * 0.15 < scroll) {
        animation1.classList.add('container__1__animation')
    }
    if (width * 0.48 < scroll && width * 0.98 > scroll ){
        // 焼きそば上
        sticky1_img.style.top = stickyH1 + "px"
    } else if (width * 0.98 <= scroll && width * 0.57 > bgH ) {
        // 焼きそば上
        sticky1_img.style.top = stickyH1 - bgH + "px"
        // 焼きそば背景
        sticky__bg.style.height = bgH + "px"
        // 焼きそば下
        const t = noodleBottom - bgH
        sticky_item2_img.style.transform =  "skew(0, 12deg) translate(0," + t + "px)"

    } else if (width * 0.57 <= bgH && width * 1.432 > scroll) {
        // 焼きそば上
        sticky1_img.style.top = stickyH1 - width * 0.57 + "px"


        animation2.classList.remove('container_3_animation_1')
        animation3.classList.remove("container_3_animation_2")

    } else if (width * 1.432 <+ scroll){
        animation2.classList.add('container_3_animation_1')
        animation3.classList.add("container_3_animation_2")
    }
})