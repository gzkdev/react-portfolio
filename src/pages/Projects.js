import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader"
import GoToTop from "../GotoTop";
import { motion } from "framer-motion";

const projectsArchive = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function Projects() {
    GoToTop();
    const containerVariants = {
        from: {
            opacity: 0,
            y: "10vh",
        },
        to: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.4 }
        },
        exit: {
            y: "10vh",
            opacity: 0,
            transition: { type: "tween", duration: 0.3 }
        }
    }
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
