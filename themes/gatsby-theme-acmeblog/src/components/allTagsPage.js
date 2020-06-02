import React from 'react'; 

import TagsListing from './tagsListing'

const AllTagsPage = ({allTagsArray}) => { 
    return (
    <>
    <h1>All tags array Page</h1>
    <TagsListing allTagsArray={allTagsArray}/>
    </>
    )
}

export default AllTagsPage;