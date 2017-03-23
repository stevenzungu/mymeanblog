(function(){
  angular.module('mymeanblog')

    .factory('PostService', PostService);

    PostService.$inject = ['$http']; //$http == axios

    function PostService($http){
      var baseURL = '/posts';
      var posts= [];

      function fetch(){
        return posts;
      }

      function getAll(){
        return $http.get(baseURL)
                    .then(function(response){
                      todos = response.data.todos;
                    });
      }

      function getOne(){
        return $http.get(baseURL)
                    .then(function(response){
                      posts = response.data.posts;
                    });
      }


      function create(todo){
        return $http.post(baseURL, todo)
                    .then(getAll);
      }

      function deleteTodo(todo){
        return $http.delete(`${baseURL}/${todo._id}`)
                    .then(getAll);
      }

      function update(todo){
        return $http.put(`${baseURL}/${todo._id}`, todo)
                    .then(getAll);
      }


      return {
        getAll: getAll,
        create: create,
        delete: deleteTodo,
        update: update,
        fetch: fetch
      };

    }

})()
