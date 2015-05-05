'use strict';

angular.module('calculator',[])
	.controller('CalcCtrl', function($scope){
		$scope.sub = 0;
		$scope.tip = 0;
		$scope.total = 0;
		$scope.calculate = function(){
			$scope.sub = $scope.base * $scope.tax;
			$scope.tip = ($scope.percentage/100) * $scope.sub;
			$scope.total = $scope.sub + $scope.tip;
		};
	});