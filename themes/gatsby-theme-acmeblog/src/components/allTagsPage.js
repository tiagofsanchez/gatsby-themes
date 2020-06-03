import React from 'react'; 
import TagsListing from './tagsListing'

const AllTagsPage = ({allTagsArray}) => { 
    return (
    <>
    <h1>Tags</h1>
    <TagsListing allTagsArray={allTagsArray}/>
    </>
    )
}

export default AllTagsPage;