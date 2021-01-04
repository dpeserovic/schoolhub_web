import {AddNotificationForm} from '../forms';

class AddNotificationPageViewStore
{
    constructor(rootStore)
    {
        this.rootStore = rootStore;
        this.form = new AddNotificationForm({
            onSuccess: async(form) =>
            {
                const values = form.values();
                const currentUserUid = await this.rootStore.firebaseApp.auth.currentUser.uid;
                const school_key = currentUserUid.substring(0, 5);
                values.school_key = school_key;
                var date = new Date();
                const dd = String(date.getDate()).padStart(2, '0');
                const mm = String(date.getMonth() + 1).padStart(2, '0');
                const yyyy = date.getFullYear();
                date = dd + '.' + mm + '.' + yyyy + '.';
                values.date = date
                console.log('Success', values);
                try
                {
                    const oNotification = {};
                    const sKey = this.rootStore.firebaseApp.oDbNotifications.push().key;
                    oNotification[sKey] = values;
                    await this.rootStore.firebaseApp.oDbNotifications.update(oNotification);
                    this.navigateViewNotifications();
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

    navigateViewNotifications = () =>
    {
        this.rootStore.routerStore.goTo('viewNotifications');
    }

    navigateDashboard = () =>
    {
        this.rootStore.routerStore.goTo('dashboard');
    }
}

export default AddNotificationPageViewStore;