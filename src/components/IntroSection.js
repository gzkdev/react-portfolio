import handEmoji from '../assets/images/emoji-hand.png'
function Intro() {
    return (
        <section className="intro">
            <div className="intro-ctn ctn">
                <h1>
                    {/* <span>Design.</span> <span>Develop.</span><span>Optimize.</span> */}
                    {/*  */}
                    <span>Hi there! <img src={handEmoji} alt="waving hand" /></span> <span>
                        I'm Ezihe Godswill</span>
                </h1>
                {/* I design and develop sparkling web experiences. I'm an experienced front-end software engineer proficient in bringing forth expertise in design, prototyping, testing and maintenance of front-end web systems. Knowledgeable in user interface, testing, and debugging processes. Equipped with a diverse and promising skill-set. */}
                <p>I'm a freelance frontend web developer and UI designer based in Nigeria. I enjoy turning ideas into prototypes and prototypes into products with code and design.</p>
            </div>
        </section>
    )
}

export default Intro
