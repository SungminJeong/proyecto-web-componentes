import "./SkillCard.css";
import data from "../../data/data";

const { skills } = data;
const template = () => `
    ${skills.map((i) => `
        <article class="skill-item skill${i.id}">
            <span class="num">${i.id}.</span>
            <div>
                <h3>${i.item}</h3>
                <div>${i.desc}</div>
            </div>
        </article>
        `).join("")}
`


const SkillCard = () => template();

export default SkillCard;
