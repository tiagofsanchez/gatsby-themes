/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import moment from "moment";
import Img from "gatsby-image";


const PostHeaderContainerMinimal = styled.div`
  padding: 10px;
  border-radius: 4px;
`;

const ThumbnailContainer = styled.div`
  width: ${(props) => (props.big ? "200px" : "40px")};
  margin: ${(props) => (props.big ? "auto" : null)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;
`;

const PostHeaderContainer = styled.div`
width: 100%
`
const Desktop = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 15px;
  @media (max-width: 600px) { 
    display: none
  }
`;

const Mobile = styled.div`
display: grid;
grid-template-columns: auto 1fr;
align-items: center;
grid-gap: 20px;
@media(min-width: 600px) { 
  display: none
}
 `

const TagsCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export const BlogHeaderMax = ({ title, date, tags, category, thumbnail }) => {
         return (
           <PostHeaderContainer>
             <Desktop>
               <ThumbnailContainer big={true}>
                 <Img fluid={thumbnail.childImageSharp.fluid} />
               </ThumbnailContainer>
               <div>
                 <h1 sx={{ my: `0px`, textAlign: `center` }}>{title}</h1>
                 <p sx={{ color: `primary`, my: `5px`, textAlign: `center` }}>
                   {date}
                 </p>
               </div>
               <TagsCatContainer>
                 <Card variant="category" sx={{ color: `white` }}>
                   {category}
                 </Card>
                 {tags.map((tag, index) => (
                   <Card variant="tag" key={index}>
                     {tag}
                   </Card>
                 ))}
               </TagsCatContainer>
             </Desktop>
             <Mobile>
               <ThumbnailContainer>
                 <Img fluid={thumbnail.childImageSharp.fluid} />
               </ThumbnailContainer>
               <div>
                 <h3 sx={{my:0}}>{title}</h3>
                 <p sx={{ color: `primary`, my: `5px`}}>
                   {date}
                 </p>
               </div>
               {/* <TagsCatContainer sx={{gridColumn: `span 2`, justifyContent:`start`}}>
                 <Card variant="category" sx={{ color: `white` }}>
                   {category}
                 </Card>
                 {tags.map((tag, index) => (
                   <Card variant="tag" key={index}>
                     {tag}
                   </Card>
                 ))}
               </TagsCatContainer> */}
             </Mobile>
           </PostHeaderContainer>
         );
       };

export const BlogHeaderMinimal = ({
  title,
  date,
  slug,
  timeToRead,
  thumbnail,
}) => {
  const newest = moment(new Date(date)) > moment().subtract(1, "months");
  return (
    <PostHeaderContainerMinimal
      sx={{ ":hover": { bg: `hover`, boxShadow: "inset 0 0 0 0" } }}
    >
      <Link
        style={{
          textDecoration: `none`,
          color: `inherit`,
          fontWeight: `normal`,
        }}
        to={slug}
        aria-label={`post title: ${title}`}
      >
        <Grid>
          <ThumbnailContainer>
            <Img fluid={thumbnail.childImageSharp.fluid} />
          </ThumbnailContainer>
          <div>
            <h2 sx={{ marginBottom: `3px` }}>{title}</h2>
            <p sx={{ color: `primary`, my: `5px` }}>
              {date} . {timeToRead} minutes
            </p>
          </div>
          {newest && <p sx={{ color: `highlight`, fontWeight: `900` }}>new</p>}
        </Grid>
      </Link>
    </PostHeaderContainerMinimal>
  );
};