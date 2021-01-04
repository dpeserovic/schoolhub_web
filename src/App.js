import React from 'react';
import {inject, observer} from 'mobx-react';
import {RouterView} from 'mobx-state-router';
import {LoginPage} from './modules/membership/pages';
import {RegisterPage} from './modules/membership/pages';
import {DashboardPage} from './modules/dashboard/pages';
import {MyProfilePage} from './modules/profile/pages';
import {CreateSchoolPage} from './modules/school/pages';
import {AddNotificationPage} from './modules/notification/pages';
import {ViewNotificationsPage} from './modules/notification/pages';
import {EditNotificationPage} from './modules/notification/pages';
import {NotFoundPage} from './NotFoundPage';

const viewMap =
{
  login: <LoginPage/>,
  register: <RegisterPage/>,
  dashboard: <DashboardPage/>,
  myProfile: <MyProfilePage/>,
  createSchool: <CreateSchoolPage/>,
  addNotification: <AddNotificationPage/>,
  viewNotifications: <ViewNotificationsPage/>,
  editNotification: <EditNotificationPage/>,
  notFound: <NotFoundPage/>
};

@inject(stores => (
{
  routerStore: stores.rootStore.routerStore,
  rootStore: stores.rootStore
}))
@observer
class App extends React.Component
{

  componentDidMount()
  {
    this.props.rootStore.init();
  }

  render()
  {
    const {routerStore} = this.props;
    return <RouterView routerStore = {routerStore.router} viewMap={viewMap}/>;
  }
}

export default App;