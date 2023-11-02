import PropType from 'prop-types';
import React from 'react';
import { Button } from '../../components';
import "../../styles/containers/Error/_pageNotFound.scss";

const PageNotFound = () => {

  return (
    <div className="page-not-found">
        <h1>:( ha  ocurrido un error. Por favor intentelo de nuevo.</h1>
        <br />
        <Button
            width="20%"
            text="Volver a intentarlo"
        >
            Try Again
        </Button>
    </div>

  );
};

export default PageNotFound;