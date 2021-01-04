import React from 'react';
import {observer} from 'mobx-react';

import TextField from '@material-ui/core/TextField';

export default observer(({field, type}) => (
    <div>
        <TextField className = 'textArea' multiline htmlFor={field.id} label={field.label} helperText={field.error}{...field.bind({type})}/>
    </div>
));