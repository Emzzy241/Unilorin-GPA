$(document).ready(() => {
    $(".7-course").hide();
    $(".8-course").hide();
    $(".9-course").hide();
    $(".10-course").hide();
    $(".11-course").hide();
    $(".12-course").hide();
    $(".13-course").hide();

    $(".amountCourses").click(() => {
        let userCourse = $("#myCourses").find(":selected").val();
        console.log(userCourse);
      
        if (userCourse === "11") {
            $(".course-info").fadeOut();
            
            $(".11-course").show();
            // $(".8-course").hide();
            // $(".9-course").hide();
            // $(".10-course").hide();
            // $(".11-course").hide();
            // $(".12-course").hide();
            // $(".13-course").hide();

            // writing the algorithm 

           
            // clicking on continue
            $(".continue").click(()=>{

                let userUnits1 = $(".unit1").find(":selected").val();
                let userUnits2 = $(".unit2").find(":selected").val();
                let userUnits3 = $(".unit3").find(":selected").val();
                let userUnits4 = $(".unit4").find(":selected").val();
                let userUnits5 = $(".unit5").find(":selected").val();
                let userUnits6 = $(".unit6").find(":selected").val();
                let userUnits7 = $(".unit7").find(":selected").val();
                let userUnits8 = $(".unit8").find(":selected").val();
                let userUnits9 = $(".unit9").find(":selected").val();
                let userUnits10 = $(".unit10").find(":selected").val();
                let userUnits11 = $(".unit11").find(":selected").val();
              
                // for the grades
                let userGrade1 = $(".grade1").find(":selected").val();
                let userGrade2 = $(".grade2").find(":selected").val();
                let userGrade3 = $(".grade3").find(":selected").val();
                let userGrade4 = $(".grade4").find(":selected").val();
                let userGrade5 = $(".grade5").find(":selected").val();
                let userGrade6 = $(".grade6").find(":selected").val();
                let userGrade7 = $(".grade7").find(":selected").val();
                let userGrade8 = $(".grade8").find(":selected").val();
                let userGrade9 = $(".grade9").find(":selected").val();
                let userGrade10 = $(".grade10").find(":selected").val();
                let userGrade11 = $(".grade11").find(":selected").val();

                

                // for 1 unit course and a grade of A, b, c, d, e, f

                if((userUnits1 === "1" && userGrade1 === "A") && (userUnits2 === "1" && userGrade2 === "A") && (userUnits3 === "1" && userGrade3 === "A") && (userUnits4 === "1" && userGrade4 === "A") && (userUnits5 === "1" && userGrade5 === "A") && (userUnits6 === "1" && userGrade6 === "A") && (userUnits7 === "1" && userGrade7 === "A") && (userUnits8 === "1" && userGrade8 === "A") && (userUnits9 === "1" && userGrade9 === "A") && (userUnits10 === "1" && userGrade10 === "A") && (userUnits11 === "1" && userGrade11 === "A")){
                    let GradePointPerCourse = 5;
                    console.log(GradePointPerCourse);

                    let totalUnit = 24
                    let totalGradePoint = 5 * 11;

                    let gpa = totalGradePoint / totalUnit;

                    $(".myResult").text("Your result is: " + gpa)

                }

                else if((userUnits1 === "1" && userGrade1 === "B") && (userUnits2 === "1" && userGrade2 === "B") && (userUnits3 === "1" && userGrade3 === "B") && (userUnits4 === "1" && userGrade4 === "B") && (userUnits5 === "1" && userGrade5 === "B") && (userUnits6 === "1" && userGrade6 === "B") && (userUnits7 === "1" && userGrade7 === "B") && (userUnits8 === "1" && userGrade8 === "B") && (userUnits9 === "1" && userGrade9 === "B") && (userUnits10 === "1" && userGrade10 === "B") && (userUnits11 === "1" && userGrade11 === "B")){
                    $(".myResult").text("orale");
                }

                else{
                    $(".myResult").text("Please wait a minute");

                }

            });

            // for user unit 1
    


        }
        // else if (userCourse === "8") {
        //     $(".course-info").fadeOut();

        //     $(".8-course").show();
        //     $(".7-course").hide();
        //     $(".9-course").hide();
        //     $(".10-course").hide();
        //     $(".11-course").hide();
        //     $(".12-course").hide();
        //     $(".13-course").hide();

        // }
        // else if (userCourse === "9") {
        //     $(".course-info").fadeOut();

        //     $(".9-course").show();
        //     $(".7-course").hide();
        //     $(".8-course").hide();
        //     $(".10-course").hide();
        //     $(".11-course").hide();
        //     $(".12-course").hide();
        //     $(".13-course").hide();

        // }
        // else if (userCourse === "10") {
        //     $(".course-info").fadeOut();

        //     $(".10-course").show();
        //     $(".7-course").hide();
        //     $(".8-course").hide();
        //     $(".9-course").hide();
        //     $(".11-course").hide();
        //     $(".12-course").hide();
        //     $(".13-course").hide();

        // }
        // else if (userCourse === "11") {
        //     $(".course-info").fadeOut();

        //     $(".11-course").show();
        //     $(".7-course").hide();
        //     $(".8-course").hide();
        //     $(".9-course").hide();
        //     $(".10-course").hide();
        //     $(".12-course").hide();
        //     $(".13-course").hide();

        // }
        // else if (userCourse === "12") {
        //     $(".course-info").fadeOut();

        //     $(".12-course").show();
        //     $(".7-course").hide();
        //     $(".8-course").hide();
        //     $(".9-course").hide();
        //     $(".10-course").hide();
        //     $(".11-course").hide();
        //     $(".13-course").hide();

        // }
        // else if (userCourse === "13") {
        //     $(".course-info").fadeOut();

        //     $(".13-course").show();
        //     $(".7-course").hide();
        //     $(".8-course").hide();
        //     $(".9-course").hide();
        //     $(".10-course").hide();
        //     $(".11-course").hide();
        //     $(".12-course").hide();

        // }
    })

});