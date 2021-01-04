import {RouterStore} from '../router';
import FirebaseApp from '../firebase/FirebaseApp';
import {AuthStore} from './';

class RootStore
{
    constructor()
    {
        this.routerStore = new RouterStore(this);
        this.firebaseApp = new FirebaseApp();
        this.authStore = new AuthStore(this);
    }
    
    init = () =>
    {
        this.authStore.checkUser();
    }
}

export default RootStore;