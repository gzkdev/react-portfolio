import Intro from "../components/IntroSection"
import FeaturedProjectsSection from '../components/FeaturedProjectsSection'
import InspiroSection from "../components/InspiroSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Intro></Intro>
            <FeaturedProjectsSection></FeaturedProjectsSection>
            <InspiroSection></InspiroSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </>
    )
}

export default Home
