import featuredProjectList from "../FeaturedProjectsContent"
import { Link } from "react-router-dom"
// import Image from '../assets/images/six.png'

function FeaturedProjectsList() {
    return (
        <div className="featured-projects-ctn">
            {
                featuredProjectList.map(project => (
                    <div className="featured-project-box" key={project.id}>
                        <div className="project-img-box">
                            <Link to="/projects">
                                <img src={project.image} alt="" style={{
                                    width: "100%",
                                    height: '100%',
                                    objectFit: "cover"
                                }} />
                            </Link>
                        </div>
                        <p className="project-text-box">
                            <span className="project-title">{project.name}&nbsp;-</span>&nbsp;<span>{project.description}</span>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturedProjectsList
