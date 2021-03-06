import {className} from '../../decorators';
import SideBySideView from '../side-by-side/SideBySideView';
import TreeViewContainerJS from '../tree-view-container/TreeViewContainerJS';
import EmptyView from '../empty/EmptyView';
import TestResultViewJS from '../testresult/TestResultViewJS';
import TestResultModel from '../../data/testresult/TestResultModel';
import ErrorSplashView from '../error-splash/ErrorSplashView';

@className('side-by-side')
class TestResultTreeViewJS extends SideBySideView {

    initialize({tree, routeState}) {
        super.initialize();
        this.tree = tree;
        this.routeState = routeState;
        this.listenTo(this.routeState, 'change:treeNode', (_, treeNode) => this.showLeaf(treeNode));
    }

    showLeaf(treeNode) {
        if (treeNode && treeNode.testResult) {
            const baseUrl = `#${this.options.baseUrl}/${treeNode.testGroup}/${treeNode.testResult}`;
            const model = new TestResultModel({uid: treeNode.testResult});
            model.fetch({
                success: () => this.showChildView('right', new TestResultViewJS({baseUrl, model, routeState: this.routeState})),
                error: () => this.showChildView('right', new ErrorSplashView({
                    code: 404,
                    message: `Test result with uid "${treeNode.testResult}" not found`
                }))
            });
        } else {
            this.showChildView('right', new EmptyView({message: 'No item selected'}));
        }
    }

    onRender() {
        const {tabName, baseUrl} = this.options;
        const left = new TreeViewContainerJS({
            collection: this.tree,
            routeState: this.routeState,
            treeSorters: [],
            tabName: tabName,
            baseUrl: baseUrl,
        });
        this.showChildView('left', left);
    }

    templateContext() {
        return {
            cls: 'testresult-tree'
        };
    }

}

export default TestResultTreeViewJS;