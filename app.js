'use strict';

angular.module('calculator',[])
	.controller('CalcCtrl', function($scope){	
		$scope.calculate = function(){
			$scope.tax /= 100;
			$scope.sub = parseFloat($scope.base) + parseFloat($scope.tax);
			$scope.percentage /=100;
			$scope.tip = parseFloat($scope.percentage) * parseFloat($scope.sub);
			$scope.total = parseFloat($scope.sub) + parseFloat($scope.tip);
		};

		$scope.cancel = function(){
			$scope.base = '';
			$scope.tax = '';
			$scope.percentage = '';

		};

		
	});