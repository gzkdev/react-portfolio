import SectionHeader from "./SectionHeader"
import InspiroCarousel from "./InspiroCarousel";

const InspiroSection = () => {
    return (
        <section className="inspiros">
            <div className="ctn">
                <SectionHeader headerType="section-header" headingText="Daily design Inspiro - " paragraphText="My design works and inspirations"></SectionHeader>
            </div>
            <div className="ctn-alt">
                <InspiroCarousel></InspiroCarousel>
            </div>
        </section>
    )
}

export default InspiroSection
