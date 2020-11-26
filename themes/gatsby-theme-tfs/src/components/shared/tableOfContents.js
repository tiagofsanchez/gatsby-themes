/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";

const Container = styled.div`
  padding: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style-type: none;
`;

const TableOfContents = ({ tableOfContentsArray }) => {
  const [hideTable, setHideTable] = useState(false);

  const onHideTableHandler = () => {
    setHideTable(!hideTable);
  };

  return (
    <Container>
      <Link
        sx={{ variant: `links.secondary` }}
        aria-label="Toggle table of contents"
        onClick={onHideTableHandler}
      >
        <Grid>
          {hideTable ? (
            <IoIosArrowDropdown size={25} />
          ) : (
            <IoIosArrowDropright size={25} />
          )}
          <h3 sx={{ m: `0px` }}> Table of contents</h3>
        </Grid>
      </Link>
      {hideTable ? (
        <Ul>
          {tableOfContentsArray.map((item) => (
            <Li key={item.url}>
              <Link
                sx={{ variant: `links.secondary`, color: `text` }}
                href={item.url}
                aria-label={item.title}
              >
                {item.title}
              </Link>
            </Li>
          ))}
        </Ul>
      ) : null}
    </Container>
  );
};

TableOfContents.propTypes = {
  tableOfContentsArray: PropTypes.array.isRequired,
};

export default TableOfContents;
