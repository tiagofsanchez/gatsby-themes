/** @jsx jsx */
import { Card, Badge, Link as TLink, jsx } from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const _ = require("lodash");
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagsListing = ({ allTagsArray , blogPath , tagsPath }) => {

  return (
    <div>
      <Flex>
        {allTagsArray.map((tag) => (
          <div key={tag.fieldValue}>
            <TLink
              as={Link}
              sx={{ variant: `links.secondary`, display: `flex` }}
              to={`${blogPath}${tagsPath}/${_.kebabCase(tag.fieldValue)}`}
              aria-label={`${tag.fieldValue} post tag`}
            >
              <Card variant="cards.tag" sx={{ marginRight: `-10px` }}>
                <p sx={{ my: `0px` , fontSize: 2, color: `text` }}>{tag.fieldValue}</p>
              </Card>
              <div>
                <Badge variant="badges.number" >
                  {tag.totalCount}
                </Badge>
              </div>
            </TLink>
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default TagsListing;
