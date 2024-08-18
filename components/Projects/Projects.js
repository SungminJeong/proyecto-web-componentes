import "./Projects.css";
import data from "../../data/data";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const template = () => `
<section id="projects">
    <h2 class="project-title">Project</h2>
    <article class="projects-container">${ProjectsCard()}<article>
</section>
`

const Projects = () => template();

export default Projects;