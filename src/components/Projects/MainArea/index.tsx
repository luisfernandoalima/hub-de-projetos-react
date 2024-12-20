import {ProjectsCard} from '../Card'

import './ProjectsMainArea.scss'

export const ProjectsMainArea = () => {
    return(
        <section className="p-5 main_area">
            <div className="project_area">
                <ProjectsCard tags={["html", "sass", "bootstrap", "javascript", "nodejs", "mongodb"]}/>
                <ProjectsCard tags={["html", "css", "javascript", "bootstrap"]}/>
                <ProjectsCard tags={["html", "sass", "tailwind", "typescript", "react"]}/>
            </div>
        </section>
    )
}