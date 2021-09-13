import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import GoToTop from "../GotoTop"
import containerVariants from "../RoutesContainerVariants";

function Contact() {
    GoToTop();
    return (
        <motion.section variants={containerVariants} initial="from" animate="to" exit="exit">
            <ContactSection></ContactSection>
            <Footer></Footer>
        </motion.section>
    )
}

export default Contact
