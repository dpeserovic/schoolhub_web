import React from 'react';
import {inject, observer} from 'mobx-react';
import {DashboardPageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';


@inject(stores => ({
    viewStore: new DashboardPageViewStore(stores.rootStore)
}))
@observer
class DashboardPage extends React.Component
{

    async componentDidMount()
    {
        await this.props.viewStore.loadSchool();
    }

    render()
    {
        return(
            <div>
                <SchoolHubNavbar />
                <div className = 'center'>
                    <ListGroup className = 'list' as = 'ul'>
                        <ListGroup.Item as ='li' style = {{display: this.props.viewStore.showCreate ? 'block' : 'none'}}>
                            <h1>Create School</h1>
                            <Button onClick = {this.props.viewStore.navigateCreateSchool} variant = 'warning'><Icon fontSize = 'large'>school</Icon></Button>
                        </ListGroup.Item>
                        <ListGroup.Item as ='li' style = {{display: this.props.viewStore.showAddAndView ? 'block' : 'none'}}>
                            <h1>Add notification</h1>
                            <Button onClick = {this.props.viewStore.navigateAddNotification} variant = 'warning'><Icon fontSize = 'large'>add_box</Icon></Button>
                        </ListGroup.Item>
                        <ListGroup.Item as ='li' style = {{display: this.props.viewStore.showAddAndView ? 'block' : 'none'}}>
                            <h1>View notifications</h1>
                            <Button onClick = {this.props.viewStore.navigateViewNotifications} variant = 'warning'><Icon fontSize = 'large'>list</Icon></Button>
                        </ListGroup.Item>
                        <ListGroup.Item as ='li'>
                            <h1>My profile</h1>
                            <Button onClick = {this.props.viewStore.navigateMyProfile} variant = 'warning'><Icon fontSize = 'large'>person</Icon></Button>
                        </ListGroup.Item>
                        <ListGroup.Item as ='li'>
                            <h1>Sign out</h1>
                            <Button onClick = {this.props.viewStore.signOut} variant = 'warning'><Icon fontSize = 'large'>exit_to_app</Icon></Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default DashboardPage;