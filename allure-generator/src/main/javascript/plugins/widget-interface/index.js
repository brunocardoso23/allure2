import WidgetStatusView from '../../components/widget-status/WidgetStatusView';

allure.api.addWidget('interfaces', 'behaviors', WidgetStatusView.extend({
    rowTag: 'a',
    title: 'Interface Tests',
    baseUrl: 'interfaces',
    showLinks: true
}));