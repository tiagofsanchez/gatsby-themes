/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import styled from "@emotion/styled";

const Flex = styled.footer`
  display: flex;
  bottom: 0;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Flex sx={{ variant: `layout.footer` }}>
      <h5>2020 by ACME. All rights reserved</h5>
      <h5>
        Theme by{" "}
        <Link
          href="https://www.tiagofsanchez.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Tiago
        </Link>{" "}
      </h5>
    </Flex>
  );
};

export default Footer;
