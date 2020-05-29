import React from 'react'; 
import { Styled } from "theme-ui"

import TagsListing from './tagsListing'

const AllTagsPage = ({allTagsArray}) => { 
    return (
    <>
    <Styled.h1>All tags array Page</Styled.h1>
    <TagsListing allTagsArray={allTagsArray}/>
    </>
    )
}

export default AllTagsPage;