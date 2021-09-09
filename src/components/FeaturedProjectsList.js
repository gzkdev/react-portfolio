import featuredProjectList from "../FeaturedProjectsContent"

function FeaturedProjectsList() {
    return (
        <div className="featured-projects-ctn">
            {
                featuredProjectList.map(project => (
                    <div className="featured-project-box" key={project.id}>
                        <div className="project-img-box"></div>
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
