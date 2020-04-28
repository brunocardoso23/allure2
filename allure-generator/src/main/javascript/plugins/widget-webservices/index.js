import WidgetStatusView from '../../components/widget-status/WidgetStatusView';

allure.api.addWidget('webservice', 'behaviors', WidgetStatusView.extend({
    rowTag: 'a',
    title: 'Web Services Tests',
    baseUrl: 'webservice',
    showLinks: true
}));