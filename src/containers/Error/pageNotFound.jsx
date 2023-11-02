import React from 'react';
import "./styles.scss";
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const PageNotFound = () => {

  return (
    <div className="page-not-found">
        <h1>:( Página no encontrada.</h1>
        <Link to="/">
            <Button
                text="Volver al inicio"
            />
        </Link>
    </div>

  );
};

export default PageNotFound;