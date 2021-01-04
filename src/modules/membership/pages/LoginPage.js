import React from 'react';
import {inject, observer} from 'mobx-react';
import {LoginPageViewStore} from '../stores';
import {SchoolHubNavbar} from '../../../common/components';
import {MembershipInput} from '../../../common/components';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

@inject(stores => ({
    viewStore: new LoginPageViewStore(stores.rootStore)
}))
@observer
class LoginPage extends React.Component
{
    render()
    {
        return(
            <div>
                <SchoolHubNavbar/>
                <div className = 'center'>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group>
                            <MembershipInput type = {'text'} field = {this.props.viewStore.form.$('email')}/>
                        </Form.Group>
                        <Form.Group>
                            <MembershipInput type = {'password'} field = {this.props.viewStore.form.$('password')}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Text>{this.props.viewStore.form.error}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button type = 'submit' onClick = {this.props.viewStore.form.onSubmit} variant = 'danger'>Log in</Button>
                        </Form.Group>
                    </Form>
                    <Button onClick = {this.props.viewStore.navigateRegister} variant = 'warning'>Don't have an account? Register</Button>
                </div>
            </div>
        )
    }
}

export default LoginPage;