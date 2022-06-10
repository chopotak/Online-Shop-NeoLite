document.getElementById("guide").addEventListener("click", ()=> {
    alert("Че самый умный?")
})

document.getElementById("list").addEventListener('mouseover', ()=> {
    document.getElementById("link").classList.add('underline');
    document.getElementById("intro-social-link1").style.transition = "all .3s linear";
    document.getElementById("intro-social-link2").style.transition = "all .3s linear";
    document.getElementById("intro-social-link3").style.transition = "all .3s linear";
})

document.getElementById("list").addEventListener('mouseout', ()=> {
    document.getElementById("link").classList.remove('underline');
    document.getElementById("intro-social-link1").style.transition = "none";
    document.getElementById("intro-social-link2").style.transition = "none";
    document.getElementById("intro-social-link3").style.transition = "none";
})

document.getElementById("copy").addEventListener('click', ()=> {
    navigator.clipboard.writeText('neolite.me')
});

document.getElementById("copy").addEventListener('focus', ()=> {
    document.querySelector(".alert").style.animation = "show .1s ease-in";
    document.querySelector(".alert").style.display = "block";
});

document.getElementById("copy").addEventListener('blur', ()=> {
    document.querySelector(".alert").style.animation = ".3s hide linear";
    document.querySelector(".alert").style.display = "none";
});

let scene = document.getElementById('intro');
let parallaxInstance = new Parallax(intro, {
    calibrateY: true
});

$('.single-item').slick();

document.getElementById("footer-modal-btn").addEventListener('click', ()=> {
    document.querySelector(".footer__modal").style.display = "block";
});

document.querySelector(".footer__modal-close").addEventListener('click', ()=> {
    document.querySelector(".footer__modal").style.display = "none";
})

window.onclick = function(event) {
    if (event.target == document.querySelector('.footer__modal')) {
        document.querySelector('.footer__modal').style.display = 'none'
    }
}