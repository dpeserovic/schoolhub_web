import React from 'react';
import {inject, observer} from 'mobx-react';
import {EditNotificationPageViewStore} from '../stores';
import {FormInput} from '../../../common/components';
import {FormTextarea} from '../../../common/components';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';

@inject(stores => ({
    viewStore: new EditNotificationPageViewStore(stores.rootStore)
}))
@observer
class EditNotificationListComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <ListGroup className = 'list' as = 'ul'>
                    <ListGroup.Item as ='li'>
                        <FormInput field = {this.props.viewStore.form.$('title')}/>
                    </ListGroup.Item>
                    <ListGroup.Item as ='li'>
                        <FormTextarea field = {this.props.viewStore.form.$('body')}/>
                    </ListGroup.Item>
                    <ListGroup.Item as ='li'>
                        <Button type = 'submit' onClick = {this.props.viewStore.form.onSubmit} variant = 'danger'><Icon fontSize = 'large'>edit</Icon></Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default EditNotificationListComponent;