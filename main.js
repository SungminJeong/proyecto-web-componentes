import Header from './components/Header/Header'
import './style.css'
import data from './data/data'
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'



document.querySelector("#app").innerHTML = `
${Header()}
${Intro()}
${AboutMe()}
${Skills()}
${Projects()}
${Footer()}
`

const link = () => {
    const a = document.querySelectorAll('a[href^="#"]');
    a.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href");
            console.log(targetId)
            const clicked = document.querySelector(targetId);
            console.log(clicked)
            if (clicked) {
                clicked.scrollIntoView({ behavior: "smooth" });
            }
        })
    })
};

document.querySelector('#hamburger').addEventListener('click', () => {
    const headerToggle = document.querySelector('#modal-list')
    headerToggle.classList.toggle("show")
});



window.addEventListener('load', () => {
    link()
});

const myarr = document.querySelectorAll('.skill-item')
for(let i = 0; i < myarr.length; i++){
    if(i % 2 === 0){
        myarr[i].style.backgroundColor = "var(--main-color)"
        myarr[i].style.color = "white"
    }else{
        myarr[i].style.backgroundColor = "white"
        myarr[i].style.color = "var(--main-color)"
    }
};

