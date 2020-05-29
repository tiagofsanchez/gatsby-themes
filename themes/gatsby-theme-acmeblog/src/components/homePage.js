import React from "react";
import { Styled } from "theme-ui"
import PropTypes from 'prop-types';

const HomePage = ({posts}) => {
  return <div>
    <Styled.h1>Blog HomePage!</Styled.h1>
    <Styled.h2>Blog HomePage!</Styled.h2>
    <Styled.h3>Blog HomePage!</Styled.h3>
  </div>;
};

HomePage.prototype ={ 
    posts: PropTypes.array.isRequired
}

export default HomePage;