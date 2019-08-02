import './styles.scss';
import {View} from 'backbone.marionette';
import {regions} from '../../decorators';
import template from './TestResultOverviewViewJS.hbs';
import {makeArray} from '../../utils/arrays';
import AttachmentView from '../attachment/AttachmentView';

@regions({
    execution: '.status-details_status_failed'
})
class TestResultOverviewViewJS extends View {
    template = template;

    onRender() {
        const after = makeArray(this.model.get('afterStages'));

        for(var result in after){
            for(var attachments in after[result].attachments){
                if(after[result].attachments[attachments]['name'] === 'JavaScript Errors'){
                    this.getRegion('execution').show(new AttachmentView({
                        attachment: this.model.getAttachment(after[result].attachments[attachments]['uid'])
                    }));
                } 
            }
        }
    }

    templateContext() {
        return {
            cls: this.className
        };
    }
}

export default TestResultOverviewViewJS;