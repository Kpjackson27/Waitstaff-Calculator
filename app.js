'use strict';

angular.module('calculator',[])
	.controller('CalcCtrl', function($scope){	
		$scope.subtotal = [];
		$scope.calculate = function(){
			$scope.tax /= 100;
			$scope.sub = parseFloat($scope.base) + parseFloat($scope.tax);
			$scope.percentage /=100;
			$scope.tip = parseFloat($scope.percentage) * parseFloat($scope.sub);
			$scope.total = parseFloat($scope.sub) + parseFloat($scope.tip);
			
			
			var num;
			for (var i=0 ; i < $scope.subtotal.length; i++){
				num = parseFloat($scope.subtotal[i]);
					if(!isNan(num)) 
						$scope.subtotal.push(parseFloat($scope.sub+=num));
				}
			};

		$scope.cancel = function(){
			$scope.base = '';
			$scope.tax = '';
			$scope.percentage = '';

		};


	});