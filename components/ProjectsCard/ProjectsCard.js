import "./ProjectsCard.css";
import data from "../../data/data";

const { projects } = data;
const template = () => `
${projects.map((project) => `
    <div class="project-item">
        <img src="${project.image}" alt="image">
        <h3>${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tech-container">${project.tech.map((item) => `
        <p class="cadauno">${item}</p>
        `).join("")}</div>
        <div class="project-link">
            <a href="${project.github}"><img src="https://images.thepowermba.com/production/3bb8bd63-3a15-48a1-9316-11bdbfff7345.png" alt="github"/></a>
            <a href="${project.link}"><img src="https://images.thepowermba.com/production/99a47580-1bf4-41be-9122-58f46e400a34.png" alt="link"/></a>
        </div>
    </div>
    `).join("")}
`

const ProjectsCard = () => template();

export default ProjectsCard;