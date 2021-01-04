import MobxReactForm from 'mobx-react-form';
import DVR from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

class FormBase extends MobxReactForm
{
    constructor(fields, options)
    {
        super(fields, options);
    }
    plugins()
    {
        return{
            dvr: DVR(validatorjs)
        };
    }
}

export default FormBase;