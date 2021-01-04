import { observable, action, runInAction } from 'mobx';

class MyProfilePageViewStore
{
    @observable
    userInfo = [];

    @observable
    status = 'pending';

    @observable
    schoolInfo = [];

    @observable
    status = 'pending';

    constructor(rootStore)
    {
        this.rootStore = rootStore;
    }

    @action.bound
    getUserInfo = async () =>
    {
        this.userInfo = [];
        this.status = 'pending';

        const user = [];
        const currentUser = await this.rootStore.firebaseApp.auth.currentUser;
        user.push(currentUser);

        runInAction(() =>
        {
            this.userInfo = user;
            this.stauts = 'done';
        })
    }

    @action.bound
    getSchoolInfo = async () =>
    {
        this.schoolInfo = [];
        this.status = 'pending';

        const school = [];
        const currentUserUid = await this.rootStore.firebaseApp.auth.currentUser.uid;
        try
        {
            await this.rootStore.firebaseApp.oDbSchools.on('value', (snapshot) =>
            {
                const snapshotSchools = snapshot.val();
                if(snapshotSchools != null)
                {
                    Object.keys(snapshotSchools).forEach((key) =>
                    {
                        if(key === currentUserUid)
                        {
                            school.push(snapshotSchools[key]);
                        }
                    });
                }
            })
            runInAction(() =>
            {
                this.schoolInfo = school;
                this.stauts = 'done';
            })
        }
        catch(e)
        {
            runInAction(() => (this.status = 'error'));
            console.log(e);
        }
    }

    navigateDashboard = () =>
    {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default MyProfilePageViewStore;