import webservice from './webservice';

allure.api.addTab('webservice', {
    title: 'Web Services Tests', icon: 'fa fa-th-list',
    route: 'webservice',
    onEnter: () => new webservice()
});
