import React from 'react';

import Header from './Header';
import Gallery from './Gallery';

const Search = props =>
  <div>
    <Header {...props} handleSearch={props.handleSearch} />
    <Gallery
      photos={props.photos}
      loading={props.loading}
      title={props.title} />
  </div>;

export default Search;
