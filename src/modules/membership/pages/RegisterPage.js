import React from 'react';
import {inject, observer} from 'mobx-react';
import {RegisterPageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';
import {MembershipInput} from '../../../common/components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

@inject(stores => ({
    viewStore: new RegisterPageViewStore(stores.rootStore)
}))
@observer
class RegisterPage extends React.Component
{
    render()
    {
        return(
            <div>
                <SchoolHubNavbar/>
                <div className = 'center'>
                    <h1>Signup</h1>
                    <Form>
                        <Form.Group>
                            <MembershipInput type = {'text'} field = {this.props.viewStore.form.$('email')}/>
                        </Form.Group>
                        <Form.Group>
                            <MembershipInput type = {'password'} field = {this.props.viewStore.form.$('password')}/>
                        </Form.Group>
                        <Form.Group>
                            <MembershipInput type = {'password'} field = {this.props.viewStore.form.$('confirmPassword')}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>{this.props.viewStore.form.error}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button type = 'submit' onClick = {this.props.viewStore.form.onSubmit} variant = 'danger'>Sign up</Button>
                        </Form.Group>
                    </Form>
                    <Button onClick = {this.props.viewStore.navigateLogin} variant = 'warning'>Have an account? Log in</Button>
                </div>
            </div>
        )
    }
}

export default RegisterPage;