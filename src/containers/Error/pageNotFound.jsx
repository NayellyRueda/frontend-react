import PropType from 'prop-types';
import React from 'react';
import { Button } from '../../components';
import "../../styles/containers/Error/_pageNotFound.scss";

const PageNotFound = () => {

  return (
    <div className="page-not-found">
        <h1>:( Página no encontrada.</h1>
    </div>

  );
};

export default PageNotFound;