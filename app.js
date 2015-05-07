'use strict';

angular.module('calculator',[])
	.controller('CalcCtrl', function($scope){

	$scope.submit = function(){
		
		$scope.tipPercent = function(){
			return $scope.tip/100;
		};

		$scope.taxRatePercent = function(){
			return $scope.tax/100;
		};

		$scope.totalTax = function(){
			return $scope.base * $scope.taxRatePercent;
		};

		$scope.totalTip = function(){
			return $scope.base * $scope.tipPercent;
		};

		$scope.subtotal = function(){
			return $scope.base + $scope.totalTax;
		};

		$scope.total = function(){
			return $scope.subtotal + $scope.totalTip;
		};
	};
});