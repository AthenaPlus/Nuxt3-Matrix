// JS For Befor and After
gsap.registerPlugin(ScrollTrigger);

    const tlImg = gsap.timeline({
        scrollTrigger: {
            trigger: '#foto',
            start: 'top top',
            scrub: 2,
            pin: true,
            // markers: true
        }
    })


    tlImg.fromTo('.afterIMGContainer', {
            xPercent: 100
        }, {
            xPercent: 0
        })
        .fromTo('.afterIMGContainer img', {
            xPercent: -100
        }, {
            xPercent: 0
        }, 0)


