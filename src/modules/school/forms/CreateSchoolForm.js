import FormBase from '../../../common/forms/FormBase';

const fields = ['key', 'name', 'city', 'address'];

const values =
{
};

const labels =
{
    name: 'Name',
    city: 'City',
    address: 'Address'
};

const placeholders =
{
};

const rules =
{
    name: 'required|string',
    city: 'required|string',
    address: 'required|string'
};

class CreateSchoolForm extends FormBase
{
    constructor(hooks)
    {
        super({fields, values, labels, placeholders, rules}, {hooks});
    }
}

export default CreateSchoolForm;