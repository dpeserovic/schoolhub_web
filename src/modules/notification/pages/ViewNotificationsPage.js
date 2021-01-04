import React from 'react';
import {inject, observer} from 'mobx-react';
import {ViewNotificationsPageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';
import {ViewNotificationsListComponent} from './';

import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';

@inject(stores => ({
    viewStore: new ViewNotificationsPageViewStore(stores.rootStore)
}))
@observer
class ViewNotificationsPage extends React.Component
{

    async componentDidMount()
    {
        await this.props.viewStore.getMyNotifications();
    }

    render()
    {
        return(
            <div>
                <SchoolHubNavbar/>
                <div className = 'center'>
                    <h1>View notifications</h1>
                    <Button onClick = {this.props.viewStore.navigateDashboard} variant = 'warning'><Icon fontSize = 'large'>arrow_back</Icon></Button>
                    <ViewNotificationsListComponent notifications={this.props.viewStore.myNotifications}/>
                </div>
            </div>
        )
    }
}

export default ViewNotificationsPage;