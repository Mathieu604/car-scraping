import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import CarRankingView from './containers/CarRankingView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID' component={ArticleDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />

        <Route exact path='/cars/' component={CarRankingView} />
    </div>
);

export default BaseRouter;