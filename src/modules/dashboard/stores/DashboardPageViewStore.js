import { observable, action, runInAction } from 'mobx';

class DashboardPageViewStore
{
    @observable
    showCreate = false;

    @observable
    showAddAndView = false;

    constructor(rootStore)
    {
        this.rootStore = rootStore;
    }

    @action.bound
    loadSchool = async () =>
    {
        await this.rootStore.firebaseApp.oDbSchools.on('value', (snapshot) =>
        {
            this.showCreate = false;
            this.showAddAndView = false;

            const snapshotSchools = snapshot.val();
            if(snapshotSchools != null)
            {
                const currentUserUid = this.rootStore.firebaseApp.auth.currentUser.uid;
                const keys = Object.keys(snapshotSchools);
                const schoolKey = keys.find(key => key === currentUserUid);
                if(schoolKey === undefined)
                {
                    runInAction(() =>
                    {
                        this.showCreate = true;
                    })
                }
                else
                {
                    runInAction(() =>
                    {
                        this.showAddAndView = true;
                    })
                }
            }
            else
            {
                this.showCreate = true;
            }
        },(errorObject) =>
        {
            console.log(errorObject);
        });
    }

    navigateCreateSchool = () =>
    {
        this.rootStore.routerStore.goTo('createSchool');
    }

    navigateAddNotification = () =>
    {
        this.rootStore.routerStore.goTo('addNotification');
    }

    navigateViewNotifications = () =>
    {
        this.rootStore.routerStore.goTo('viewNotifications');
    }

    navigateMyProfile = () =>
    {
        this.rootStore.routerStore.goTo('myProfile');
    }

    signOut = () =>
    {
        this.rootStore.authStore.signOut();
    }
}

export default DashboardPageViewStore;