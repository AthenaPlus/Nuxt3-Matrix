gsap.registerPlugin(ScrollTrigger);



gsap.utils.toArray('#triggerSpan').forEach((span) => {

    ScrollTrigger.create({
        trigger: span,
        start: 'top bottom',
        toggleClass: 'active',
    })
})

gsap.to('.imgscroll', {
    scrollTrigger: {
        triger: '.imgscroll',
        start: 'center 60%',
        end: 'center 200px',
        scrub: true,
        toggleActions: 'restart pause',
        // markers: true,

    },
    x: 170,
    y: -100,
    // rotation: 360,
    duration: 3,
})




