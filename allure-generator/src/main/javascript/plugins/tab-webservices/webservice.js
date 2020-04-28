import AppLayout from '../../layouts/application/AppLayout';
import {View} from 'backbone.marionette';

export default class webservice extends AppLayout {

    getContentView() {
        return new webserviceView();
    }
}

const template = function () {
   
    var url = '';
    var split = window.location.href.split('/');

    if(split[4] === 'dev'){
        url = 'http://norris.softexpert.com:8080/view/Web%20Service%20Dev/';
    }else{
        url = 'http://norris.softexpert.com:8080/view/Web%20Service%20Master//';
    }

    var html = '<iframe src="'+url+'" style="position:absolute;" width="100%" marginwidth="0" height="100%" marginheight="0" align="top" scrolling="no" frameborder="0" hspace="0" vspace="0"> </iframe>';
   
    return html;
};

var webserviceView =View.extend({
    template: template,

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});