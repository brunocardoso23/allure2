import AppLayout from '../application/AppLayout';
import TreeCollection from '../../data/tree/TreeCollection';
import {Model} from 'backbone';
import TestResultTreeViewJS from '../../components/testresult-tree/TestResultTreeViewJS';
import router from '../../router';

export default class TreeLayoutJS extends AppLayout {

    initialize({url}) {
        super.initialize();
        this.tree = new TreeCollection([], {url});
        this.routeState = new Model();
    }

    loadData() {
        return this.tree.fetch();
    }

    getContentView() {
        const {baseUrl, tabName, csvUrl} = this.options;
        return new TestResultTreeViewJS({tree: this.tree, routeState: this.routeState, tabName, baseUrl, csvUrl});
    }

    onViewReady() {
        const {testGroup, testResult, testResultTab} = this.options;
        this.onRouteUpdate(testGroup, testResult, testResultTab);
    }

    onRouteUpdate(testGroup, testResult, testResultTab) {
        this.routeState.set('treeNode', {testGroup, testResult});
        this.routeState.set('testResultTab', testResultTab);

        const attachment = router.getUrlParams().attachment;
        if (attachment) {
            this.routeState.set('attachment', attachment);
        } else {
            this.routeState.unset('attachment');
        }

    }
} 
