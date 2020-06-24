import { useStaticQuery, graphql } from "gatsby";

const usePostsForIndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      posts: allMdx(
        filter: { frontmatter: { date: { ne: null } } }
        limit: 5
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            title
            date (formatString: "MMMM DD, YYYY")
            category
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  `);
  let postsArray = [];
  data.posts.nodes.map((post) => {
    const postObject = {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      category: post.frontmatter.category,
      tags: post.frontmatter.tags,
      excerpt: post.excerpt,
      slug: post.fields.slug,
    };
    postsArray.push(postObject);
    return postsArray;
  });
  return postsArray;
};

export default usePostsForIndexPage;
