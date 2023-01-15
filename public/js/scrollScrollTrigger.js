gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('.fact').forEach((fact) => {
    const tl = gsap.timeline();

    tl.fromTo(
        fact.querySelector('.p'),
        {autoAlpha: 0, x: -150 },
        {autoAlpha: 1, x: 0, duration: 0.5}
    ).fromTo(
        fact.querySelector('.second'),
        {autoAlpha: 0, y: 40},
        {autoAlpha: 1, y: 0, duration: 1}
    );
    ScrollTrigger.create({
        animation: tl,
        trigger: fact,
        start: 'top 80%',
        toggleActions: 'restart none none reverse',
        // markers: true
    })
})

gsap.to('.TextTitle', {
    backgroundPositionX: '0',
    duration: 3,
    stagger: 1.5,
    scrollTrigger: {
        trigger: '.TextTitle',
        start: 'top 25%',
        scrub: 1,
        // markers: true
    }
})
