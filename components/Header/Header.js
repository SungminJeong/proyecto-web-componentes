import "./Header.css";
import data from "../../data/data";

const { header } = data;

const Header = () => `
<header id="header">
	<section id="header-container">
		<article id="header__logo">
			<a href="#header" class="logo">Proyecto4<em>Components</em></a> 
		</article>
		<ul id="header-list">
			${header.map((i) => `
				<li>
					<a href="#${i}">${i}</a>
				</li>
				`).join("")}
		</ul>
		<section id="hamburger">
			<img src="/icon/hamburger.png" alt="hamburger"/>
		</section>
		<ul id="modal-list">
			${header.map((i) => `
				<li>
					<a href="#${i}">${i}</a>
				</li>
				`).join("")}
		</ul>
	</section>
</header>
`

export default Header;