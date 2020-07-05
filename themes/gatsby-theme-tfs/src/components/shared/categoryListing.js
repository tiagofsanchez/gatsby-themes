/** @jsx jsx */
import { jsx, Card } from "theme-ui";
import { Link } from "gatsby";
import styled from '@emotion/styled'; 

const Flex = styled.div`
display: flex; 
flex-wrap: wrap;
`

const _ = require("lodash");

const CatListing = ({ categoriesArray, categoryPath, blogPath }) => {
  return (
    <Flex>
      {categoriesArray.map((cat) => (
        <Link
          key={cat.fieldValue}
          to={`${blogPath}${categoryPath}/${_.kebabCase(cat.fieldValue)}`}
          sx={{borderBottom: 'none'}}
          aria-label={`${cat.fieldValue} category`}
        >
          <Card variant="category" sx={{marginTop: `10px`}}>
            <h3 sx={{ color: `white`, my: `0px` }}>{cat.fieldValue}</h3>
          </Card>
        </Link>
      ))}
    </Flex>
  );
};

export default CatListing;
