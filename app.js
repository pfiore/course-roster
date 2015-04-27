var courseRoster = angular.module("courseRoster", ["ui.router"]);
/////DIRECTIVE//////////////////////////////////////////////////////

// courseRoster.directive("welcomeText", function() {
//     return {
//         restrict: "E",
//         template: "<div>Welcome!</div>"
//     };
// });
courseRoster.directive("enter", function() {
    return function(scope, element){
        element.bind("mouseenter", function () {
            console.log("I love school! wooooo!")
        });
    };
});
courseRoster.directive("leave", function() {
    return function(scope, element){
        element.bind("mouseleave", function () {
            console.log("no, im ready for lunch")
        });
    };
});

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
