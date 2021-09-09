import SectionHeader from "./SectionHeader"

function ContactSection() {
    return (
        <section className="contact">
            <div className="contact-ctn ctn">
                <SectionHeader headerType="section-header-alt" headingText='Get in Touch' paragraphText='Whether you have a project you want to bring me on or you want to say hi, feel free to contact me' ></SectionHeader>

                <form className="form" autoComplete='off'>
                    <div className="form-input-ctn">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-input-box" id="name" />
                    </div>
                    <div className="form-input-ctn">
                        <label htmlFor="name">Email</label>
                        <input type="text" className="form-input-box" id="email" />
                    </div>
                    <textarea name="message" placeholder="Hey, can we work on a project together..." className="form-message"></textarea>
                    <button className="form-submit-btn" type="submit">Send message</button>
                </form>
            </div>

        </section>
    )
}

export default ContactSection
