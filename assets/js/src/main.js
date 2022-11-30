const sticky1 = document.getElementById('sticky_item1')
const sticky2 = document.getElementById('sticky_item2')
let sticky__bg = document.getElementById('sticky__bg')
const sticky_item2_img = document.getElementById('sticky_item2_img')


window.addEventListener('scroll', () => {
    let sticky__top = document.getElementById('sticky_item1').getBoundingClientRect().top;
    let sticky__bottom = document.getElementById('sticky_item1').getBoundingClientRect().bottom;
    let sticky_item2_top = document.getElementById('sticky_item2').getBoundingClientRect().top;
    let sticky_item2_bottom = document.getElementById('sticky_item2').getBoundingClientRect().bottom;
    let container_2 = document.getElementById('container_2').getBoundingClientRect().top;
    let sticky__bg__h = document.getElementById('sticky__bg').clientHeight
    const scroll = window.scrollY;
    const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth
    stickyWrapper = document.getElementById('sticky__bg').getBoundingClientRect().top;
    const i = sticky_item2_top * -1
        if (i > -300 && container_2 >= 0) {
                sticky1.style.top = i +250 +"px"
        } else if (container_2 < 0) {
            const h = container_2 * -1
            sticky1.style.top = i + h + 250 +"px"
            sticky__bg.style.height = h * 1.25 + "px"

            if (sticky__bg__h + 30 > width * 0.40 && sticky__bg__h + 30 < width * 0.57) {
                const e = (width * 0.40 - sticky__bg__h - 30) * -1
                const r = (width / e)-2
                sticky_item2_img.style.transform = "rotate(12deg) translate(52%,"+ r +"%)"
                const g = i + h + 250 +"px"
            } else {
                sticky1.style.top = i + h + 250 +"px"
            }
        } else {
        }
        
            

        

})
// window.addEventListener('resize', () => {
//     const element = document.getElementById('scroll__point').clientHeight;
//     const navheight = document.getElementById('global-nav').clientHeight
//     const scroll = window.scrollY;
//     const width = window.screenX
//     if(width < 735) {
//         nav.classList.remove('nav__float__pc')
//         nav.classList.remove('fixed__pc')
//         headerHeight.style.marginBottom = navheight + "px"
//         if(element <= scroll) {
//             nav.classList.remove('nav__float__sp')
//             nav.classList.add('fixed__sp')
//         } else {
//             nav.classList.add('nav__float__sp')
//             nav.classList.remove('fixed__sp')
//         }
//     } else {
//         nav.classList.remove('nav__float__sp')
//         nav.classList.remove('fixed__sp')
//         headerHeight.style.marginBottom = "55px"
//         if(element <= scroll) {
//             nav.classList.remove('nav__float__pc')
//             nav.classList.add('fixed__pc')
//         } else {
//             nav.classList.add('nav__float__pc')
//             nav.classList.remove('fixed__pc')
//         }
//     }
// })