import { FaTwitter, FaLinkedin, FaCodepen, FaGithub } from 'react-icons/fa'
import SectionHeader from "./SectionHeader"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-ctn ctn">
                <SectionHeader headerType="section-header-alt" headingText="Let's Connect" paragraphText="Even though we may have not met before, I'm definitely one of the best people you'll come across in life because I easily fall in love with people. I'm not a hopeless romantic please 😅. Why not connect with me let's roll "></SectionHeader>

                <nav className="footer-nav">
                    <ul>
                        <li><a href="https://twitter.com/EziheGodswill" target="_blank" rel="noopener noreferrer">
                            <span className="text">
                                Twitter</span><FaTwitter />
                        </a></li>
                        <li><a className="footer-link" href="https://www.linkedin.com/in/ezihe-godswill" target="_blank" rel="noopener noreferrer">
                            <span className="text">LinkedIn</span><FaLinkedin />
                        </a></li>
                        <li><a href="https://github.com/zheeey" target="_blank" rel="noopener noreferrer">
                            <span className="text">Github</span><FaGithub />
                        </a></li>
                        <li><a href="https://twitter.com/EziheGodswill" target="_blank" rel="noopener noreferrer">
                            <span className="text">Codepen</span><FaCodepen />
                        </a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
