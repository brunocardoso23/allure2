import template from './FmeaChartView.hbs';
import './styles.scss';
import {View} from 'backbone.marionette';
import {regions} from '../../decorators';
import {Model} from 'backbone';
import PieChartView from '../../components/graph-pie-chart/PieChartView';

@regions({
    chart: '.summary-widget__chart'
})
class FmeaChartView extends View {
    template = template;

    onRender() {
        this.showChildView('chart', new PieChartView({
            model: this.getStatusChartData(),
            showLegend: false
        }));
    }

    getStatusChartData() {
        this.items = this.model.get('items');
        var broken = 0;
        var failed = 0;
        var passed = 0;
        var skipped = 0;
        var total = 0;
        var unknown = 0;
        if(this.items[0].name === 'SE FMEA'){
            broken = this.items[0].statistic.broken;
            failed = this.items[0].statistic.failed;
            passed = this.items[0].statistic.passed;
            skipped = this.items[0].statistic.skipped;
            total = this.items[0].statistic.total;
            unknown = this.items[0].statistic.unknown;
        }
        
        
        const statistic = JSON.parse('{"total": '+ total + ', "broken": '+ broken + ', "failed": '+ failed + ', "passed": '+ passed + ', "skipped": '+ skipped + ', "unknown": '+ unknown + ' }', (key, value) => {
         return value;
        });
 
        return new Model({statistic});
    }
}

export default FmeaChartView;
