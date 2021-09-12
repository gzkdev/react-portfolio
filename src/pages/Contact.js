import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import GoToTop from "../GotoTop"

function Contact() {
    GoToTop(); const containerVariants = {
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
            <ContactSection></ContactSection>
            <Footer></Footer>
        </motion.section>
    )
}

export default Contact
