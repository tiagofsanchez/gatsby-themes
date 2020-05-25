import React from 'react'; 
import TagsListing from './tagsListing'

const AllTagsPage = ({allTagsArray}) => { 
    console.log(allTagsArray)
    return (
    <>
    <div>All tags array Page:</div>
    <TagsListing allTagsArray={allTagsArray}/>
    </>
    )
}

export default AllTagsPage;