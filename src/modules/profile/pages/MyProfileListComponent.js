import React from 'react';
import {inject, observer} from 'mobx-react';
import {MyProfilePageViewStore} from '../stores';

import ListGroup from 'react-bootstrap/ListGroup';

@inject(stores => ({
    viewStore: new MyProfilePageViewStore(stores.rootStore)
}))
@observer
class MyProfileListComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <ListGroup className = 'list' as = 'ul'>
                    {this.props.userInfo.map((user) =>
                    <ListGroup.Item as ='li' key = {user.uid}>
                        <h2><u>E-mail</u></h2>
                        <h3>{user.email}</h3>
                    </ListGroup.Item>
                    )}
                    {this.props.schoolInfo.map((school) =>
                    <ListGroup.Item as ='li' key = {school.key}>
                        <h2><u>School key</u></h2>
                        <h3><b>{school.key}</b></h3>
                        <h2><u>School name</u></h2>
                        <h3>{school.name}</h3>
                        <h2><u>School address</u></h2>
                        <h3>{school.address}, {school.city}</h3>
                    </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        )
    }
}

export default MyProfileListComponent;