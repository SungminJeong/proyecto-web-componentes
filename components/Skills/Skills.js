import "./Skills.css";
import data from "../../data/data";
import SkillCard from "../SkillCard/SkillCard";

const template = () => `
<section id="skills">
	<h2 class="skill-title">MY Skills</h2>
	<section class="skill-card">
		${SkillCard()}
	</section>
</section>
`

const Skills = () => template();

export default Skills;