import React from "react"; 
import CategoryPostsPage from '../../components/categoryPostsPage'; 

const MinBlogPost =({data , pageContext}) => { 
    return <CategoryPostsPage data={{...data, pageContext}} />
}
export default MinBlogPost;