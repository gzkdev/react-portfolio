import GoToTop from "../GotoTop"
import { motion } from 'framer-motion'
import containerVariants from "../RoutesContainerVariants";
import Intro from "../components/IntroSection"
import FeaturedProjectsSection from '../components/FeaturedProjectsSection'
import InspiroSection from "../components/InspiroSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

function Home() {
    GoToTop();
    return (
        <motion.section variants={containerVariants} initial="from" animate="to" exit="exit">
            <Intro></Intro>
            <FeaturedProjectsSection></FeaturedProjectsSection>
            <InspiroSection></InspiroSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </motion.section>
    )
}

export default Home
