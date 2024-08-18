import "./Footer.css"
import data from "../../data/data";

const {footer} = data;

const template = () => `
<footer>
    <p>${footer}</p>
</footer>
`

const Footer = () => template();

export default Footer;