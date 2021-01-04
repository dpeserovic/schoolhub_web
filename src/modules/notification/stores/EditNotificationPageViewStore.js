import {EditNotificationForm} from '../forms';

class EditNotificationPageViewStore
{
    constructor(rootStore)
    {
        this.rootStore = rootStore;
        this.sNotificationKey = this.rootStore.routerStore.router.routerState.params.key;
        this.form = new EditNotificationForm({
            onSuccess: async(form) =>
            {
                const values = form.values();
                console.log('Success', values);
                try
                {
                    await this.rootStore.firebaseApp.app.database().ref('notifications/' + this.sNotificationKey).update({title: values.title, body: values.body})
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
        this.rootStore.firebaseApp.app.database().ref('notifications/' + this.sNotificationKey).once('value', (snapshot) =>
        {
            const snapshotNotification = snapshot.val();
            this.form.set('value', {title: snapshotNotification.title, body: snapshotNotification.body});
        });
    }

    navigateViewNotifications = () =>
    {
        this.rootStore.routerStore.goTo('viewNotifications');
    }
}

export default EditNotificationPageViewStore;