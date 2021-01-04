import {RouterState} from 'mobx-state-router';

const checkForUserLogin = (fromState, toState, routerStore) =>
{
    const
    {
        rootStore: {authStore}
    } = routerStore;
    if(authStore.isLoggedIn)
    {
        return Promise.resolve();
    }
    else
    {
        return Promise.reject(new RouterState('login'));
    }
}

export const routes =
[
    {
        name: 'login',
        pattern: '/'
    },
    {
        name: 'register',
        pattern: '/register'
    },
    {
        name: 'dashboard',
        pattern: '/dashboard',
        beforeEnter: checkForUserLogin
    },
    {
        name: 'createSchool',
        pattern: '/dashboard/createSchool',
        beforeEnter: checkForUserLogin
    },
    {
        name: 'addNotification',
        pattern: '/dashboard/addNotification',
        beforeEnter: checkForUserLogin
    },
    {
        name: 'viewNotifications',
        pattern: '/dashboard/viewNotifications',
        beforeEnter: checkForUserLogin
    },
    {
        name: 'editNotification',
        pattern: '/dashboard/viewNotifications/editNotification/:key',
        beforeEnter: checkForUserLogin
    },
    {
        name: 'myProfile',
        pattern: '/dashboard/myProfile',
        beforeEnter: checkForUserLogin
    },
    {
        name: 'notFound',
        pattern: '/notFound'
    }
];