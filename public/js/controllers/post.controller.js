(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      id: '543783ggd64hd46',
      title: "the greatest thing ever",
      body: "stuff and things more stuff and things",
      created: new Date(),
      updated: new Date()
    };

    function edit(post){
      console.log('editing the post');
    }
    function create(post){
     PostService.create(post);
    }

  }
}());
