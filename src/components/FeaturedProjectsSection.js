import SectionHeader from "./SectionHeader"
import FeaturedProjectsList from "./FeaturedProjectsList";

function FeaturedProjectsSection() {

    return (
        <section className="featured">
            <div className="featured-ctn ctn">
                <SectionHeader headerType="section-header" headingText="Featured Projects" paragraphText="Some things I've worked on"></SectionHeader>
                <FeaturedProjectsList></FeaturedProjectsList>
            </div>
        </section>
    )
}

export default FeaturedProjectsSection
