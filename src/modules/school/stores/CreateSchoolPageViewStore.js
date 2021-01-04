import {CreateSchoolForm} from '../forms';

class CreateSchoolPageViewStore
{
    constructor(rootStore)
    {
        this.rootStore = rootStore;
        this.form = new CreateSchoolForm({
            onSuccess: async(form) =>
            {
                const values = form.values();
                const currentUserUid = await this.rootStore.firebaseApp.auth.currentUser.uid;
                const key = currentUserUid.substring(0, 5);
                values.key = key;
                console.log('Success', values);
                try
                {
                    const oSchool = {};
                    oSchool[currentUserUid] = values;
                    await this.rootStore.firebaseApp.oDbSchools.update(oSchool);
                    this.navigateMyProfile();
                }
                catch(error)
                {
                    this.form.invalidate(error.data);
                }
            },
            onError: (form) =>
            {
                const values = form.values();
                console.log('Error', values);
            }
        });
    }

    navigateMyProfile = () =>
    {
        this.rootStore.routerStore.goTo('myProfile');
    }

    navigateDashboard = () =>
    {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default CreateSchoolPageViewStore;