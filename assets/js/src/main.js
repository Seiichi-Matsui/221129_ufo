const noodle = document.getElementById('rellax_1')


window.addEventListener('scroll', () => {
    const point = document.getElementById('rellax_1').clientHeight;
    const noodlePoint = point - 250;
    const stop = document.getElementById('container_3').clientHeight;
    const noodleStop = stop + 1000
    const scroll = window.scrollY;

    if(scroll > noodlePoint && scroll < noodleStop) {
        const i = scroll-noodlePoint-45
        noodle.style.transform = "translateY(" + i + "px)"
    } else if (scroll >= noodleStop){
        const i = noodleStop - 600
        noodle.style.transform = "translateY(" + i + "px)"

    }
    
})