var app = angular.module("taskModule", []);

app.controller('tasksCtrl', function($scope, $interval){
  $scope.taskName = {
    name: '',
    timer: new Date(),
    intervalId: null,
    timeString: '00:00:00'
  };
  $scope.taskList = [];

  $scope.addTask = function(){
    var newTask = angular.copy($scope.taskName);
    $scope.taskList.push(newTask);
    $scope.taskName.name = '';
    console.log('list: ', $scope.taskList);
  }

  $scope.startTimer = function(task){
    var start = new Date();
    console.log("startTimer: ", task);
    task.intervalId = $interval(() => {
       // datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
      Date.dateDiff = function(datepart, fromdate, todate) {	
        datepart = datepart.toLowerCase();	
        var diff = todate - fromdate;	
        var divideBy = { w:604800000, 
                         d:86400000, 
                         h:3600000, 
                         n:60000, 
                         s:1000 };	
        
        return Math.floor( diff/divideBy[datepart]);
      }

      let totalSeconds = Date.dateDiff('s', start, new Date()); 
      hours = Math.floor(totalSeconds / 3600);
      if(hours < 10) hours = '0'+hours;
      totalSeconds %= 3600;

      minutes = Math.floor(totalSeconds / 60);
      if(minutes < 10) minutes = '0'+minutes;

      seconds = totalSeconds % 60;
      if(seconds < 10) seconds = '0'+seconds;

      task.timeString = hours + ':' + minutes + ':' + seconds;
      console.log("timeString: ", task.timeString);
    }, 1000);
  }

  $scope.pauseTimer = function(task){
    console.log('pauseTimer: ', task);
    clearInterval(task.intervalId);
  }

  $scope.resetTimer = function(task){
    console.log('resetTimer: ', task);
    if (angular.isDefined(task.intervalId)) {
      $interval.cancel(task.intervalId);
      task.intervalId= null;
    }
    task.timer = new Date(null);
    task.timeString = '00:00:00';
  }
});
