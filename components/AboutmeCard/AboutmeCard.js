import "./AboutmeCard.css";
import data from "../../data/data";

const { aboutMe } = data;

const template = () => `
    ${aboutMe.partOfaboutme.map((i) => `
    <div>
        <h3 class="part-title">${i.title}</h3>
        <p>${i.description1}</p>
        <p>${i.description2}</p>
        <p>${i.description3}</p>
    </div>
    `).join("")}
`

const AboutmeCard = () => template();

export default AboutmeCard;
