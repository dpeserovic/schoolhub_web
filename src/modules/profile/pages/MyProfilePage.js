import React from 'react';
import {inject, observer} from 'mobx-react';
import {MyProfilePageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';
import {MyProfileListComponent} from './';

import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';

@inject(stores => ({
    viewStore: new MyProfilePageViewStore(stores.rootStore)
}))
@observer
class MyProfilePage extends React.Component
{

    async componentDidMount()
    {
        this.props.viewStore.getUserInfo();
        this.props.viewStore.getSchoolInfo();
    }

    render()
    {
        return(
            <div>
                <SchoolHubNavbar/>
                <div className = 'center'>
                <h1>My profile</h1>
                    <MyProfileListComponent userInfo = {this.props.viewStore.userInfo} schoolInfo = {this.props.viewStore.schoolInfo}/>
                    <Button onClick = {this.props.viewStore.navigateDashboard} variant = 'warning'><Icon fontSize = 'large'>arrow_back</Icon></Button>
                </div>
            </div>
        )
    }
}

export default MyProfilePage;