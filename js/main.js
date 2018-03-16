var adressap = angular.module("adressApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/list.html',
                controller: 'listController',
                reloadOnSeach: 'false'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'contactController',
                reloadOnSeach: 'false'
            })
    })
    .controller("mainApp", function ($scope) {
        var contact = new Contact({
            first_name: "Freddy",
            last_name: "Castillo",
            email: "freddy.geovanni@gmail.com",
            country: "Ecuador"
        });
        var datos = localStorage.getItem("addresApp-data");
        if (datos != null) {
            $scope.contacts = [];
            var rowContact = JSON.parse(datos);
            _(rowContact).forEach(function (value) {
                $scope.contacts.push(new Contact());
            });
        } else {
            $scope.contacts = [
                new Contact({
                    first_name: "Freddy",
                    last_name: "Castillo",
                    email: "freddy.geovanni@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy1",
                    last_name: "Castillo1",
                    email: "freddy.geovanni1@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy2",
                    last_name: "Castillo2",
                    email: "freddy.geovanni2@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy3",
                    last_name: "Castillo3",
                    email: "freddy.geovanni3@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy4",
                    last_name: "Castillo4",
                    email: "freddy.geovanni4@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy4",
                    last_name: "Castillo4",
                    email: "freddy.geovanni4@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy4",
                    last_name: "Castillo4",
                    email: "freddy.geovanni4@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy4",
                    last_name: "Castillo4",
                    email: "freddy.geovanni4@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy4",
                    last_name: "Castillo4",
                    email: "freddy.geovanni4@gmail.com",
                    country: "Ecuador"
                }),
                new Contact({
                    first_name: "Freddy4",
                    last_name: "Castillo4",
                    email: "freddy.geovanni4@gmail.com",
                    country: "Ecuador"
                })
            ]
        }

    })
    .controller("listController", function ($scope, $location) {
        document.getElementsByTagName("html")[0].className = "listController";
        $scope.goForm = function (_id) {
            $location.path("contact").search({ id: _id });
        }
        $scope.btn_scroll_down = function (direccion) {
            $scope.scroll_direccion = direccion;
            $scope.scroll_interval = setInterval(scroll_exe, 10);
        }
        $scope.btn_scroll_up = function () {
            clearInterval($scope.scroll_interval);
        }
        var scroll_exe = function () {
            var graper = document.getElementsByClassName("list_wrapper")[0];
            graper.scrollTo(0, graper.scrollTop + $scope.scroll_direccion);
        };
    })
    .controller("contactController", function ($scope) {
        document.getElementsByTagName("html")[0].className = "contactController";
    })
    .directive('listReadyDirective', function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, elme, atr) {
                if ($scope.$last === true) {
                    $timeout(function () {
                        var wraper = document.getElementsByClassName("list_wrapper")[0];

                        var ul = wraper.getElementsByTagName("ul")[0];
                        var _display = "none";
                        console.log(ul.offsetHeight + ">" + wraper.offsetHeight);
                        if (ul.offsetHeight > wraper.offsetHeight) {
                            _display = "block";
                        }
                        document.getElementsByClassName("scroll-bar")[0].style.display = _display;
                    }, 10);

                }
            }
        }
    });