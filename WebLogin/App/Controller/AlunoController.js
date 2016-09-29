var an = angular.module("app3")
    .controller("AlunoController",
        function validar() {
            var ra;
            ra = this.aluno.push({ ra: ra });
            $http.get("http://localhost:49621/api/aluno")
            .success(function (dados) {
                $scope.retornoApi = dados;
            })
          });
