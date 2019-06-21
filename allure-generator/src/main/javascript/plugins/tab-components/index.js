import graphCom from './graphCom';

allure.api.addTab('graphCom', {
    title: 'Suites', icon: 'fa fa-pie-chart',
    route: 'graphCom',
    onEnter: () => new graphCom()
});
