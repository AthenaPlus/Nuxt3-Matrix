setTimeout(() => {
    const img1 = document.querySelector('.img1')

    gsap.set(img1, { autoAlpha: 0 })
    gsap.fromTo('.img1', {
        y: -300,
        rotation: 45,
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        y: 0,
        rotation: 0,
        duration: 2,
        delay: 1,
    })

    document.querySelector('.btn').addEventListener('click', () => {

    })

})