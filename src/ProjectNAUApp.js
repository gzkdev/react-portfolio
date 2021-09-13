import { motion } from "framer-motion"
import containerVariants from "./RoutesContainerVariants"
import SectionHeader from "./components/SectionHeader"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ImgOne from './assets/images/nine.png'
import ImgTwo from './assets/images/seven.png'
import ImgThree from './assets/images/eight.png'
import ImgFour from './assets/images/nine.png'
import ImgFive from './assets/images/ten.png'
import GoToTop from "./GotoTop"
import NextProjectRedirect from "./components/NextProjectRedirect"

function ProjectNAUApp() {
    GoToTop();
    return (
        <motion.section variants={containerVariants} initial='from' animate="to" exit="exit" >
            <section className="project main">
                <div className="project-ctn ctn">
                    <SectionHeader headerType="section-header" headingText="NAU App - The School App for All Academic Activities and Services"></SectionHeader>
                </div>
                <div className="page-main-banner">
                    <img src={ImgOne} alt="" />
                </div>
                <div className="ctn">
                    <div className="project-expo-ctn">
                        <h3>The Challenge</h3>
                        <p>  Students often express their frustration while using the app as the always complain about the difficulty involved for a user to successfully navigate through the app. This is a result of the poorly implemented design principles on the app.
                        </p>
                    </div>
                    <div className="page-main-banner-alt">
                        <img src={ImgThree} alt="" />
                    </div>
                    <div className="project-expo-ctn">
                        <h3>The Solution</h3>
                        <p> I started by fixing the user interface of the app as it needed a refresh. The elements on the pages were given enough breathing so the users won't be overloaded with info when they land on the app. i also used a consistent icon pack with consistent weight and fill, removed unnecessary elements on the pages, redesigned the onboarding screens to communicate the uses of the app with descriptive illustrations. I also made sure the important call-action-elements stood out.
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
                        <h3>Conclusion</h3>
                        <p>
                            The NAU App is the Official app for NNamdi Azikiwe Uiversity, Nigeria. It is meant to be used by students to accomplish a variety of tasks which include generating school payment receipts, resgister courses, view results etc. I think by making the app easy to use by the students is vey important for the optimal use of the app and this is achievable via the implementation of sound design principles.
                        </p>
                    </div>
                    <div className="page-main-banner-alt">
                        <img src={ImgTwo} alt="" />
                    </div>
                    <NextProjectRedirect nextPojectLink='/projects'></NextProjectRedirect>
                </div>
            </section>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </motion.section>
    )
}

export default ProjectNAUApp
