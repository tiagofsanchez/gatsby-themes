/** @jsx jsx */
import { Card, Badge, Link as TLink , jsx} from "theme-ui";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import useAcmeBlogConfig from "../hooks/useAcmeBlogConfig";

const _ = require("lodash");
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagsListing = ({ allTagsArray }) => {
  const { blogPath, tagsPath } = useAcmeBlogConfig();

  return (
    <div>
      <Flex>
        {allTagsArray.map((tag) => (
          <div key={tag.fieldValue}>
            <TLink
              as={Link}
              sx={{ variant: `links.secondary`, display: `flex` }}
              to={`${blogPath}${tagsPath}/${_.kebabCase(tag.fieldValue)}`}
            >
              <Card variant="tag" sx={{ marginRight: `-10px` }}>
                <h4 sx={{my:`0px`}}>{tag.fieldValue}</h4>
              </Card>

              <div>
                <Badge variant="number" style={{ fontSize: `16px` }}>
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
