import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostPreview from '../../components/post-preview/post-preview.component';
import HomePage from '../../pages/home-page/home-page.component';
import DetailPage from '../../pages/detail-page/detail-page.component';
import SavedPage from '../../pages/saved-page/saved-page.component';
import ProfilePage from '../../pages/profile-page/profile-page.component';

export default function MainRoute (){
  return (
    <div className='main-route'>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/detail' exact component={PostPreview} />
        <Route path={`/post-detail/:id`} exact component={DetailPage} />
        <Route path='/saved' exact component={SavedPage} />
        <Route path='/profile' exact component={ProfilePage} />
      </Switch>
    </div>
  );
}
