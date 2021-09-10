import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import SectionHeader from "../components/SectionHeader"

function About() {
    return (
        <>
            <section className="about">
                <div className="ctn">
                    <SectionHeader headerType="section-header" headingText="About Me"></SectionHeader>
                    <div className="about-ctn">
                        <div className="about-img-box"></div>
                        <div className="about-text-ctn">
                            <span className="about-text-ctn-title">I'm Ezihe Godswill </span>&nbsp;<span>@zheeey</span>
                            <p>
                                I'm a front-end software engineer and UI designer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus obcaecati aperiam eaque soluta enim quibusdam eius facilis beatae temporibus officia recusandae assumenda inventore nemo hic, illum, voluptas voluptates possimus maiores at consequuntur numquam. Dicta aperiam amet ipsam molestiae porro, repudiandae odit, nisi magnam earum, repellendus praesentium ratione delectus vel itaque beatae quibusdam quod corrupti in temporibus? Sed ullam, totam aut aliquam quidem facere.
                            </p>

                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio consequuntur voluptate dicta ab vitae! Nisi nulla nesciunt ea tenetur eveniet perspiciatis optio, id quia voluptas fugiat voluptatem, suscipit, nostrum earum! Autem alias, aut veritatis fugiat accusantium amet nisi consectetur, doloribus doloremque eius incidunt eos quidem! Accusamus, aut laborum?
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nostrum rerum! Eos dolores numquam est accusamus ullam harum! Nesciunt temporibus laboriosam ad cupiditate quia aperiam incidunt quas excepturi deleniti quisquam dolore optio exercitationem quaerat ipsam debitis dignissimos ex nam iste, porro rerum voluptatem nostrum itaque! Esse modi quam facere ad alias, assumenda architecto aspernatur ex consectetur?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </>
    )
}

export default About
