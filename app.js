var courseRoster = angular.module("courseRoster", ["ui.router"]);
/////DIRECTIVE//////////////////////////////////////////////////////

courseRoster.directive("welcomeText", function() {
    return {
        restrict: "E",
        template: "<div>Welcome!</div>"
    };
});

courseRoster.directive("enter", function() {
    return function(scope, element){
        restrict: "C",
        element.bind("mouseenter", function () {
            element.removeClass("btn btn-success");
            element.addClass("btn btn-warning");
        });
        element.bind("mouseleave", function () {
            element.removeClass("btn btn-warning");
            element.addClass("btn btn-success");
        });
    };
});


//
// courseRoster.directive("leave", function() {
//     return function(scope, element){
//
//     };
// });

////ROUTES///////////////////////////////////////////////////////
courseRoster.config(function($stateProvider) {
    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state("courses", {
        url: "/courses",
        templateUrl: "partials/courses.html",
        controller: "CoursesCtrl"
    });

    $stateProvider.state("courses.students", {
        url: "/:courseId",
        templateUrl: "partials/courses.students.html",
        controller: "StudentsCtrl"
    });


});
