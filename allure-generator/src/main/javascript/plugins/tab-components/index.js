import graphCom from './graphCom';

allure.api.addTab('graphCom', {
    title: 'Components', icon: 'fa fa-pie-chart',
    route: 'graphCom',
    onEnter: () => new graphCom()
});
