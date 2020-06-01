import React from "react"; 
import { MDXRenderer } from "gatsby-plugin-mdx";

const OtherPages = ({body}) => {

return <MDXRenderer>{body}</MDXRenderer>
}

export default OtherPages;