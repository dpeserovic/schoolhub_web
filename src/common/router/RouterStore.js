import {RouterState, RouterStore as MobxRouterStore} from 'mobx-state-router';
import {routes} from './routes';

const notFound = new RouterState('notFound');

class RouterStore
{
    constructor(rootStore)
    {
        this.router = new MobxRouterStore(rootStore, routes, notFound);
    }

    goTo(routeName, params={}, queryParams={})
    {
        this.router.goTo(routeName, params, queryParams);
    }
}

export default RouterStore;