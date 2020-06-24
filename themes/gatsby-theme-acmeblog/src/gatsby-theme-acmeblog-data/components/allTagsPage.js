import React from "react"; 
import AllTagsPage from '../../components/allTagsPage'

const MinBlogPost = ({data}) => {
    const allTagsArray = data.allMdx.group 
    return <AllTagsPage allTagsArray={allTagsArray}/>
}

export default MinBlogPost;