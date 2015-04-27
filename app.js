var courseRoster = angular.module("courseRoster", ["ui.router"]);
/////DIRECTIVE//////////////////////////////////////////////////////

// courseRoster.directive("welcomeText", function() {
//     return {
//         restrict: "E",
//         template: "<div>Welcome!</div>"
//     };
// });
courseRoster.directive("welcomeText", function() {
  return {
    restrict: "E",
    template: "<div>Welcome!</div>"
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

    // $stateProvider.state("courses.detail", {
    //     url:"/details",
    //     templateUrl:"partials/courses.details.html"
    // });
});
