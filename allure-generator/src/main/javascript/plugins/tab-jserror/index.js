allure.api.addTab('JavaScript', {
    title: 'JavaScript', icon: 'fa fa-bug',
    route: 'JavaScript(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayoutJS({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'JavaScript',
            baseUrl: 'JavaScript',
            url: 'data/behaviors.json',
        });
    })
});