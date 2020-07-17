$(function () {

// register gsap scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger);

// animate home text
    gsap.fromTo(".openers", {scale: 0.3}, {duration: 1.5, delay: 0.5, opacity: 1, scale: 1, ease: "back"});

// animate each section when arriving from link
    gsap.timeline({
        scrollTrigger: {
            trigger: "#bio",
            toggleActions: "restart none none reset"
        }
    })
        .from('.about', {duration: .5, x: -500, opacity: 0})
        .to('.about', {rotation: 350})
        .from('.img-dodger', {delay: 0.25, duration: .5, x: -500, opacity: 0}, '-= 0.25')
        .to('#bio', {delay: 0.5, duration: .5, backgroundColor: "rgba(34, 34, 34, 1)"}, '-= 0');

// change background image after scrolled past bio
    gsap.to('.img-lakers', {
        opacity: 1, scrollTrigger: {
            trigger: "#next-img",
            start: "top top",
            toggleActions: "restart none none reset"
        }
    });

// smooth scroll anchor links
    document.querySelectorAll('.nav-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// contact me form
    let form = document.querySelector('#form-contact');
    let div = document.querySelector('#form-div');

    form.addEventListener('submit', event => {
        event.preventDefault();
        div.innerHTML = `<div id="message-div"><p>Message has been sent!</p></div>`;
        div.classList.add('submitted');
    });

});