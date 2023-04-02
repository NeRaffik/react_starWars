import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

//import routesConfig from '@routes/routesConfig';

import Header from '@components/Header';
import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import SearchPage from '@containers/SearchPage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '@containers/NotFoundPage';
import ErrorMessage from '@components/ErrorMessage';

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
         
          <Fragment>
            <Header />

            <Routes>
              {/*routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                Component={route.component} 
              />
              ))} */}
              <Route path='/' exact='true' Component={HomePage} />
              <Route path='/people' exact='true' Component={PeoplePage} />
              <Route path='/people/:id' exact='true' Component={PersonPage} />
              <Route path='/search' exact='true' Component={SearchPage} />
              <Route path='/favorites' exact='true' Component={FavoritesPage} />
              <Route path='/fail' exact='true' Component={ErrorMessage} />
              <Route path='/not-found' exact='true' Component={NotFoundPage} />
              <Route path='*' exact='false' Component={NotFoundPage} />
            </Routes>
          </Fragment>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App;