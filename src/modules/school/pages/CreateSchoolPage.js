import React from 'react';
import {inject, observer} from 'mobx-react';
import {CreateSchoolPageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';
import {FormInput} from '../../../common/components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';

@inject(stores => ({
    viewStore: new CreateSchoolPageViewStore(stores.rootStore)
}))
@observer
class CreateSchoolPage extends React.Component
{
    render()
    {
        return(
            <div>
                <SchoolHubNavbar/>
                <div className = 'center'>
                    <h1>Create school</h1>
                    <Form>
                        <Form.Group>
                            <FormInput type = {'text'} field = {this.props.viewStore.form.$('name')}/>
                        </Form.Group>
                        <Form.Group>
                            <FormInput type = {'text'} field = {this.props.viewStore.form.$('address')}/>
                        </Form.Group>
                        <Form.Group>
                            <FormInput type = {'text'} field = {this.props.viewStore.form.$('city')}/>  
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>{this.props.viewStore.form.error}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button type = 'submit' onClick = {this.props.viewStore.form.onSubmit} variant = 'danger'><Icon fontSize = 'large'>school</Icon></Button>
                        </Form.Group>
                    </Form>
                    <Button onClick = {this.props.viewStore.navigateDashboard} variant = 'warning'><Icon fontSize = 'large'>arrow_back</Icon></Button>
                </div>
            </div>
        )
    }
}

export default CreateSchoolPage;