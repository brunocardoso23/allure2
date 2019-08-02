import AppLayout from '../../layouts/application/AppLayout';
import {View} from 'backbone.marionette';

export default class interfaces extends AppLayout {

    getContentView() {
        return new interfacesView();
    }
}

const template = function () {
    var html = '<iframe src="http://norris.softexpert.com:8080/view/InterfaceTests" style="position:absolute;" width="100%" marginwidth="0" height="100%" marginheight="0" align="top" scrolling="no" frameborder="0" hspace="0" vspace="0"> </iframe>';
    return html;
};

var interfacesView =View.extend({
    template: template,

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});