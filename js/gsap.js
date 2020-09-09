gsap.registerPlugin(ScrollTrigger);

let hero = gsap.timeline({
    scrollTrigger: {
        trigger: '#welcome',
        start: 'top center'
    }
})
hero.from('#branding', {
    delay: 2,
    duration: 2,
    opacity: 0,
    scale: 0.5,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

hero.from('.top-nav .logo', {
    delay: 0.5,

    duration: 0.8,
    opacity: 0,
    y: 30,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
hero.from('.top-nav .links-menu', {
    delay: 0.2,
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

hero.from('.side-nav', {
    delay: 0.2,
    duration: 0.8,
    Y: -0.5,
    opacity: 0,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

hero.from('#branding .texto-home', {
    delay: 0.2,
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")




let about = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: 'top center'
    }
})

about.from('#about .creativeAgency', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

about.from('#about p.ouputQuemsomos', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    y: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")




let whatwedo = gsap.timeline({
    scrollTrigger: {
        trigger: '#whatwedo',
        start: 'top center'
    }
})
whatwedo.from('#whatwedo .fazemos', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

whatwedo.from('#whatwedo .sub-title-g1', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
whatwedo.from('#whatwedo .brandingText', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
whatwedo.from('#whatwedo  .img-efeito1', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    y: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")



let ecommerce = gsap.timeline({
    scrollTrigger: {
        trigger: '#ecommerce',
        start: 'top center'
    }
})
ecommerce.from('#ecommerce .esquerda', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: -50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

ecommerce.from('#ecommerce .direita', {
    delay: 0.1,
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")



let content = gsap.timeline({
    scrollTrigger: {
        trigger: '.content-fotografia',
        start: 'top center'
    }
})
content.from('.content-fotografia  .fotografiatitle', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    y: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
content.from('.content-fotografia .FotografiaText', {
    delay: 0.1,
    duration: 1,
    opacity: 0,
    y: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
content.from('.content-fotografia .img-efeito3', {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")




let partners = gsap.timeline({
    scrollTrigger: {
        trigger: '#partners',
        start: 'top center'
    }
})
partners.from('#partners .sub-title-g4', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
partners.from('#partners .parceirosText', {
    delay: 0.2,
    duration: 0.5,
    opacity: 0,
    x: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
partners.from('#partners .img-efeito5', {
    duration: 0.8,
    opacity: 0,
    x: -50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")



let whatwemade = gsap.timeline({
    scrollTrigger: {
        trigger: '#whatwemade',
        start: 'top center'
    }
})
whatwemade.from('#whatwemade  .amazing', {
    delay: 0.2,
    duration: 5,
    opacity: 0,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")

whatwemade.from('#whatwemade  .behance-container', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    y: 50,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")


let contact = gsap.timeline({
    scrollTrigger: {
        trigger: '#contact',
        start: 'top center'
    }
})
contact.from('#contact .title-contact', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
contact.from('#contact .adress:nth-child(1)', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: -25,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
contact.from('#contact .adress:nth-child(2)', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: -25,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
contact.from('#contact .adress:nth-child(3)', {
    delay: 0.2,
    duration: 1,
    opacity: 0,
    x: -25,
    ease:
        "Back.easeOut.config(1.7)",
}, "-=0.8")
