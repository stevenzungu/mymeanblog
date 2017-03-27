(function() {
  angular.module('mymeanblog')
         .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
    {
      id: 'fhfhfhjfjfjhfjhfhjfjhfjfu',
      title: 'some title',
      body: 'things and stuff things and stuff and ',
      created: new Date(),
      updated: new Date()
    },
    {
      id: 'fhfhfhjfjfjhfjhfhjfjhfjfu',
      title: 'some title',
      body: 'things and stuff things and studd',
      created: new Date(),
      updated: new Date()
    }
  ];

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting the post with _id of + post._id');
    }

  }
}());
