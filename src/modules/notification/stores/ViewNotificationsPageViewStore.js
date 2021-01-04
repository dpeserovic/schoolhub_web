import { observable, action, runInAction } from 'mobx';

class ViewNotificationsPageViewStore
{
    @observable
    myNotifications = [];

    @observable
    status = 'pending';

    constructor(rootStore)
    {
        this.rootStore = rootStore;
    }

    @action.bound
    getMyNotifications = async () =>
    {
        this.myNotifications = [];
        this.status = 'pending';
        try
        {
            await this.rootStore.firebaseApp.oDbNotifications.on('value', (snapshot) =>
            {
                var notifications = {};
                const snapshotNotifications = snapshot.val();
                if(snapshotNotifications != null)
                {
                    const currentUserUid = this.rootStore.firebaseApp.auth.currentUser.uid;
                    const school_key = currentUserUid.substring(0, 5);
                    Object.keys(snapshotNotifications).forEach((key) =>
                    {
                        if(snapshotNotifications[key].school_key === school_key)
                        {
                            notifications[key] = snapshotNotifications[key];
                        }
                    });
                }
                runInAction(() =>
                {
                    this.myNotifications = notifications;
                    this.status = 'done';
                });
            })
        }
        catch(e)
        {
            runInAction(() => (this.status = 'error'));
            console.log(e);
        }
    }

    navigateEditNotification = (sNotificationKey) =>
    {
        this.rootStore.routerStore.goTo('editNotification', {key: sNotificationKey});
    }

    deleteNotification = async (sNotificationKey) =>
    {
        const oNotificationRef = await this.rootStore.firebaseApp.app.database().ref('notifications/' + sNotificationKey);
        oNotificationRef.remove();
    }

    navigateDashboard = () =>
    {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default ViewNotificationsPageViewStore;