import Intro from "../components/IntroSection"
import FeaturedProjectsSection from '../components/FeaturedProjectsSection'
import InspiroSection from "../components/InspiroSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import GoToTop from "../GotoTop"
import { motion } from 'framer-motion'

function Home() {
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
