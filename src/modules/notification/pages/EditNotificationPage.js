import React from 'react';
import {inject, observer} from 'mobx-react';
import {EditNotificationPageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';
import {EditNotificationListComponent} from './';

import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';

@inject(stores => ({
    viewStore: new EditNotificationPageViewStore(stores.rootStore)
}))
@observer
class EditNotificationPage extends React.Component
{
    render()
    {
        return(
            <div>
                <SchoolHubNavbar/>
                <div className = 'center'>
                    <h1>Edit notification</h1>
                    <EditNotificationListComponent/>
                    <Button onClick = {this.props.viewStore.navigateViewNotifications} variant = 'warning'><Icon fontSize = 'large'>arrow_back</Icon></Button>
                </div>
            </div>
        )
    }
}

export default EditNotificationPage;