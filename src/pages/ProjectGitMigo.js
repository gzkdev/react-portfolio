import { motion } from "framer-motion"
import containerVariants from "../RoutesContainerVariants"
import SectionHeader from "../components/SectionHeader"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import ImgOne from '../assets/images/nine.png'
import ImgTwo from '../assets/images/seven.png'
import ImgThree from '../assets/images/eight.png'
import ImgFour from '../assets/images/nine.png'
import ImgFive from '../assets/images/ten.png'
import GoToTop from "../GotoTop"
import NextProjectRedirect from "../components/NextProjectRedirect"

function ProjectGitMigo() {
    GoToTop();
    return (
        <motion.section variants={containerVariants} initial='from' animate="to" exit="exit" >
            <section className="project main">
                <div className="project-ctn ctn">
                    <SectionHeader headerType="section-header" headingText="GitMigo - Exploring the GitHub REST API "></SectionHeader>
                </div>
                <div className="page-main-banner">
                    <img src={ImgOne} alt="" />
                </div>
                <div className="ctn">
                    <div className="project-expo-ctn">
                        <h3>Overview</h3>
                        <p>  GitMigo is a simple web app built with React on the GitHub REST API that recruiters, hiring managers or anybody can use to glance through the profiles of software developers who use GitHub. At the time of building GitMigo I was desperate to sharpen my ReactJS skills and implement my newly learnt UI/UX design skills too
                        </p>
                    </div>
                    <div className="page-main-banner-alt">
                        <img src={ImgThree} alt="" />
                    </div>
                    <div className="project-expo-ctn">
                        <h3>The Challenge</h3>
                        <p> When the idea of GitMigo was born, I've had little to no experience interacting with external APIs using React and really do not know which HTTP library to use. Also, Since it is a new app concept and I wanted to give a bespoke branding with the new knowledge of UI/UX design I've learnt. I had to come up with a logo and brand identity that will communicate its uniqueness to users.
                        </p>
                    </div>
                    <div className="featured-projects-ctn display">
                        <div className="featured-project-box">
                            <div className="project-img-box">
                                <img src={ImgFive} alt="" />
                            </div>
                            <p className="project-text-box">The Login screen with a simple and straight-forward design
                            </p>
                        </div>
                        <div className="featured-project-box">
                            <div className="project-img-box">
                                <img src={ImgTwo} alt="" />
                            </div>
                        </div>
                        <div className="featured-project-box">
                            <div className="project-img-box">
                                <img src={ImgThree} alt="" /></div><p className="project-text-box">The academics section for non-financial activities
                            </p>
                        </div>
                        <div className="featured-project-box">
                            <div className="project-img-box">
                                <img src={ImgFour} alt="" /></div><p className="project-text-box">Descriptive onboarding screen with intuitive design
                            </p>
                        </div>
                    </div>
                    <div className="project-expo-ctn">
                        <h3>Solution</h3>
                        <p>
                            The name GitMigo was coined from two words 'Git' which is a version control system that is the backbone of the GitHub website and 'Migo' which is a spainish word that means friends. The two words were chosen because I wanted GitMigo to communicate the friendliness in the open source communities that enables collaboration and contribution of many developers to build, maintain and improve open source projects
                        </p>
                    </div>
                    <div className="page-main-banner-alt">
                        <img src={ImgTwo} alt="" />
                    </div>
                    <NextProjectRedirect nextPojectLink='/projects/nau-app'></NextProjectRedirect>
                </div>
            </section>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </motion.section>
    )
}

export default ProjectGitMigo
