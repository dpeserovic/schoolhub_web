import React from 'react';
import {inject, observer} from 'mobx-react';
import {ViewNotificationsPageViewStore} from '../stores';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from 'react-bootstrap/Button';
import Icon from '@material-ui/core/Icon';

@inject(stores => ({
    viewStore: new ViewNotificationsPageViewStore(stores.rootStore)
}))
@observer
class ViewNotificationsListComponent extends React.Component
{
    render()
    {
        return(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align = 'center'>Date</TableCell>
                            <TableCell align = 'center'>Title</TableCell>
                            <TableCell align = 'center'>Edit</TableCell>
                            <TableCell align = 'center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {Object.keys(this.props.notifications).reverse().map((key) =>
                        <TableRow key = {key}>
                            <TableCell align = 'center'>{this.props.notifications[key].date}</TableCell>
                            <TableCell align = 'center'>{this.props.notifications[key].title}</TableCell>
                            <TableCell align = 'center'><Button key = {key} onClick = {e=>this.props.viewStore.navigateEditNotification(key)} variant = 'warning'><Icon fontSize = 'small'>edit</Icon></Button></TableCell>
                            <TableCell align = 'center'><Button key = {key} onClick = {e=>this.props.viewStore.deleteNotification(key)} variant = 'dark'><Icon fontSize = 'small'>delete</Icon></Button></TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default ViewNotificationsListComponent;