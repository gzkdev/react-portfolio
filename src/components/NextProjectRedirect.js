import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NextProjectRedirect({ nextPojectLink }) {
    return (

        <div className="project-next">
            <Link to={nextPojectLink}>
                <FaArrowRight></FaArrowRight>
            </Link>
            See Next Project
        </div>
    )
}

export default NextProjectRedirect
