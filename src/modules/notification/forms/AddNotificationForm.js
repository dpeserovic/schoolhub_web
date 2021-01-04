import FormBase from '../../../common/forms/FormBase';

const fields = ['school_key', 'date', 'title', 'body'];

const values =
{
};

const labels =
{
    title: 'Title',
    body: 'Body'
};

const placeholders =
{
};

const rules =
{
    title: 'required|string',
    body: 'required|string'
};

class AddNotificationForm extends FormBase
{
    constructor(hooks)
    {
        super({fields, values, labels, placeholders, rules}, {hooks});
    }
}

export default AddNotificationForm;