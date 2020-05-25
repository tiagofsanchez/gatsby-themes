import React from "react";
import PropTypes from 'prop-types';

const HomePage = ({posts}) => {
  return <div>
    <h1>Blog HomePage!</h1>
  
  </div>;
};

HomePage.prototype ={ 
    posts: PropTypes.array.isRequired
}

export default HomePage;