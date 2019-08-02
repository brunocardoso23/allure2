import $ from 'jquery';
import {makeArray} from '../../utils/arrays';

function byStatuses(statuses) {
    return (child) => {
        if (child.children) {
            return child.children.length > 0;
        }
        return statuses[child.status];
    };
}

function byDuration(min, max) {
    return (child) => {
        if (child.children) {
            return child.children.length > 0;
        }
        return min <= child.time.duration && child.time.duration <= max;
    };
}


function byText(text) {
    text = text && text.toLowerCase() || '';
    return (child) => {
        return !text
            || child.name.toLowerCase().indexOf(text) > -1
            || child.children && child.children.some(byText(text));
    };
}

function byAttachment(){
    return (child) => {

        if(typeof child.children !== 'undefined'){
            return true;
        }
        var after = '';
        $.ajax({
                type: 'GET',
                url: 'data/test-cases/' + child.uid + '.json',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: false,
                success: function(json) {
                    after = makeArray(json.afterStages);
                }
            });

            for(var result in after){
                for(var attachments in after[result].attachments){
                    if(after[result].attachments[attachments]['name'] === 'JavaScript Errors'){
                        return true;
                    } 
                }
            }

            return false;  
    };
}

function byMark(marks) {
    return (child) => {
        if (child.children) {
            return child.children.length > 0;
        }
        return (!marks.newFailed || child.newFailed) &&
               (!marks.flaky || child.flaky);
    };

}

function mix(...filters) {
    return (child) => {
        let result = true;
        filters.forEach((filter) => {
            result = result && filter(child);
        });
        return result;
    };
}


export {byStatuses, byDuration, byText, byMark, mix, byAttachment};
