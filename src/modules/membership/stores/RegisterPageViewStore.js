import {RegisterForm} from '../forms';

class RegisterPageViewStore
{
    constructor(rootStore)
    {
        this.rootStore = rootStore;
        this.form = new RegisterForm({
            onSuccess: async(form) =>
            {
                const values = form.values();
                console.log('Success', values);
                try
                {
                    await this.rootStore.firebaseApp.auth.createUserWithEmailAndPassword(values.email, values.password);
                    console.log('Success');
                }
                catch(error)
                {
                    this.form.invalidate(error.massage);
                }
            },
            onError: (form) =>
            {
                const values = form.values();
                console.log('Error', values);
            }
        });
    }

    navigateLogin = () =>
    {
        this.rootStore.routerStore.goTo('login');
    }
}

export default RegisterPageViewStore;