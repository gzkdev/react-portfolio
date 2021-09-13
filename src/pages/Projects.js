import GoToTop from "../GotoTop";
import { motion } from "framer-motion";
import containerVariants from "../RoutesContainerVariants";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader"

const projectsArchive = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function Projects() {
    GoToTop();
    return (
        <motion.section variants={containerVariants} initial='from' animate="to" exit="exit"><section className="projects" id="projects">
            <div className="projects-ctn ctn">
                <SectionHeader headerType="section-header" headingText="Projects Archive" paragraphText="A comprehensive list of worthy things I have worked on as a front-end software engineer and UI designer"  ></SectionHeader>
                <div className="featured-projects-ctn">
                    {projectsArchive.map((item, index) => (
                        <div className="featured-project-box" key={index}>
                            <div className="project-img-box">
                            </div>
                            <p className="project-text-box">
                                <span className="project-title">Tkemeo&nbsp;-</span>&nbsp;<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </motion.section>
    )
}

export default Projects
