import WidgetStatusView from '../../components/widget-status/WidgetStatusView';

allure.api.addWidget('JavaScript', 'behaviors', WidgetStatusView.extend({
    rowTag: 'a',
    title: 'JavaScript',
    baseUrl: 'JavaScript',
    showLinks: true
}));