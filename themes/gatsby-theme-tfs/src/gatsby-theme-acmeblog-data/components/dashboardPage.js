import React from "react"; 
import DashboardPage from '../../components/pages/dashboardPage'

const MinBlogPost =({data}) => { 
    const { postsArray } = data        
    return <DashboardPage data={data} />
}

export default MinBlogPost