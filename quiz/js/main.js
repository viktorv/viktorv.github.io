(function(){
    function TasksCtrl($scope) {
        $scope.tasks = {
            questions: [],
            answers: []
        };

        $scope.tasks.questions = [
            "в комнате отдыха {val} окна в мир",
            "в комнате отдыха {val} радужных листочков",
            "в комнате отдыха {val} больших ламп",
            "в комнате отдыха под столом с пилоном цфифра {val}",
            "на сладкой корове в холодильнике цфифра {val}",
            "ты {val}-й элемент",
            "в комнате отдыха, время играть в консоль - {val}",
            "бублик это - {val}"
        ];

        $scope.getQuestion = function (str,value) {
            var answ = value >= 0 ? value : "...";
           return str.replace("{val}",answ);
        };
        $scope.getAnswers = function () {
            var lat = "";
            angular.forEach($scope.tasks.answers,function(value,index){
                if(index == 1) {
                    value += ".";
                }
                lat += value;
            });
            return lat;
        };
    }
    var app = angular.module('myApp', []);
    app.controller('TasksCtrl', TasksCtrl);
})();
