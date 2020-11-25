import React from 'react'
import { CertificateDetails, ProjectDetails } from '../../components/constants/data/ConstantData'
import { SideBarContainer } from '../../components/sidebar/SideBarContainer'
import Post from './Post'


const Detail = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="content">
                        <h2 class="entry-title">Project Details</h2>
                        {ProjectDetails.map(project => <Post
                            date={project.date}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            imgName={project.img}
                        />)}
                    </div>
                </div>
                <SideBarContainer Details={CertificateDetails} title={'Certificates'} />
            </div>
        </div>
    )
}

export default Detail