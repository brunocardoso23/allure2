import AppLayout from '../../layouts/application/AppLayout';
import WidgetsGridView from '../../components/widgets-grid/WidgetsGridView';
import {getSettingsForWidgetGridPlugin} from '../../utils/settingsFactory';
const Defaults = {
    widgets: [[], [], []]
};

export default class graphCom extends AppLayout {

    getContentView() {
        return new WidgetsGridView({tabName: 'graphCom', settings:  getSettingsForWidgetGridPlugin('graphCom', Defaults)});
    }
}
