import "./AboutMe.css";
import data from "../../data/data";
import AboutmeCard from "../AboutmeCard/AboutmeCard";

const { aboutMe, header } = data;

const template = () => `
    <main id="aboutme">
        <section class="about-inner">
            <h2 class="about-title">${aboutMe.aboutmeTitle}</h2>
            <article class="about-part">
            ${AboutmeCard()}
            </article>
        </section>
    </main>
`

const AboutMe = () => template();

export default AboutMe;