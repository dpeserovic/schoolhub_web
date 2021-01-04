import { observable, action, runInAction } from 'mobx';

class AuthStore
{
    @observable
    isLoggedIn = false;

    @observable
    loggedInUser = null;

    constructor(rootStore)
    {
        this.rootStore = rootStore;
    }

    signIn = async (credentials) =>
    {
        try
        {
            await this.rootStore.firebaseApp.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
        }
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }

    signOut = async () =>
    {
        try
        {
            await this.rootStore.firebaseApp.auth.signOut();
        }
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }

    @action.bound
    checkUser = async () =>
    {
        await this.rootStore.firebaseApp.auth.onAuthStateChanged(firebaseUser =>
        {
            if(firebaseUser)
            {
                runInAction(() =>
                {
                    this.isLoggedIn = true;
                    this.loggedInUser = firebaseUser;
                })
                this.rootStore.routerStore.goTo('dashboard');
            }
            else
            {
                runInAction(() =>
                {
                    this.isLoggedIn = false;
                    this.loggedInUser = null;
                })
                this.rootStore.routerStore.goTo('login');
            }
        });
    }
}

export default AuthStore;