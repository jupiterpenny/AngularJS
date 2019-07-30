
       angular.module('ui-rangeSlider', []).directive('rangeSlider', [function() {
        return {
            restrict: 'A',
        replace: true,
            template: ['<div>base</div>'].join('')
    };
}]);
 angular.module('myDirective', []).directive('rangeSlider', [function() {
        return {
            restrict: 'A',
        priority: 500,
            template: ['<div>extended</div>'].join('')
    }
}]);
 angular.module('sample', ['ui-rangeSlider', 'myDirective'])
        .decorator('rangeSliderDirective', ['$delegate', function($delegate){
            console.log($delegate);
        $delegate.shift();
        return $delegate;
      }]);


    