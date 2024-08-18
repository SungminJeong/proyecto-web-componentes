import "./Intro.css";
import data from "../../data/data";

const { intro } = data;
const template = () => `
<main id="intro">
	<section class="intro-inner">
		<h2 class="intro-title">${intro.title}<span>developer</span></h2>
		<article class="intro-text">
			<section class="text">
				<div>${intro.text1}</div>
				<div>${intro.text2}</div>
				<div>${intro.text3}</div>
			</section>
			<img src="${intro.image}" alt="marine"/>
		</article>
	</section>
</main>
`
const Intro = () => template()
export default Intro;