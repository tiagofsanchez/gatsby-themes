/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";

const Container = styled.div`
  padding: 5px;
  border-radius: 4px;
  margin-top: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
`;

const Ul = styled.ul`
  margin-top: 0px;
  display: ${(props) => (props.show ? "block" : "none")};
  transition: display 1000ms ease-in;
`;

const Li = styled.li`
  list-style-type: none;
`;

const TableOfContents = ({ tableOfContentsArray }) => {
  const [hideTable, setHideTable] = useState(false);
  const [isAnimate, setisAnimate] = useState(false);

  const onHideTableHandler = () => {
    setHideTable(!hideTable);
    setisAnimate(!isAnimate);
  };

  return (
    <Container>
      <Link
        sx={{
          variant: `links.secondary`,
          cursor: `pointer`,
        }}
        aria-label="Toggle table of contents"
        onClick={onHideTableHandler}
      >
        <Grid>
          {hideTable ? (
            <IoIosArrowDropdown size={25} />
          ) : (
            <IoIosArrowDropright size={25} />
          )}
          <h3 sx={{ m: `0px`, pb: `4px` }}> Table of contents</h3>
        </Grid>
      </Link>
      {hideTable ? (
        <Ul show={isAnimate}>
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
