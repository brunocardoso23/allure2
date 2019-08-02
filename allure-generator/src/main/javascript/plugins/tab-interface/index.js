import interfaces from './interface';

allure.api.addTab('interfaces', {
    title: 'Interface Tests', icon: 'fa fa-th-list',
    route: 'interfaces',
    onEnter: () => new interfaces()
});
