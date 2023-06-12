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

        $("#first").show();

        $("#second").hide();

        if (userCourse === "11") {
            $(".myCoure2").hide();

            let oneCoursegpa;
            let twoCoursegpa;

            $(".course-info").fadeOut();

            $(".11-course").show();
            // $(".8-course").hide();
            // $(".9-course").hide();
            // $(".10-course").hide();
            // $(".11-course").hide();
            // $(".12-course").hide();
            // $(".13-course").hide();

            // writing the algorithm 

            $(".continue2").hide()

            // clicking on continue1
            $(".continue1").click(() => {
                


                let userUnits1 = $(".unit1").find(":selected").val();
                
                // let userUnits3 = $(".unit3").find(":selected").val();
                // let userUnits4 = $(".unit4").find(":selected").val();
                // let userUnits5 = $(".unit5").find(":selected").val();
                // let userUnits6 = $(".unit6").find(":selected").val();
                // let userUnits7 = $(".unit7").find(":selected").val();
                // let userUnits8 = $(".unit8").find(":selected").val();
                // let userUnits9 = $(".unit9").find(":selected").val();
                // let userUnits10 = $(".unit10").find(":selected").val();
                // let userUnits11 = $(".unit11").find(":selected").val();

                // for the grades
                let userGrade1 = $(".grade1").find(":selected").val();
                
                // let userGrade3 = $(".grade3").find(":selected").val();
                // let userGrade4 = $(".grade4").find(":selected").val();
                // let userGrade5 = $(".grade5").find(":selected").val();
                // let userGrade6 = $(".grade6").find(":selected").val();
                // let userGrade7 = $(".grade7").find(":selected").val();
                // let userGrade8 = $(".grade8").find(":selected").val();
                // let userGrade9 = $(".grade9").find(":selected").val();
                // let userGrade10 = $(".grade10").find(":selected").val();
                // let userGrade11 = $(".grade11").find(":selected").val();


                let myScore1;

                

                
                // For a 1 unit course and several grades
                if(userGrade1 == "A" && userUnits1 == "1")
                {
                    oneCoursegpa = 1 * 5;

                    $(".myResult").text("You had an A in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);
                 
                }
                else if(userGrade1 == "B" && userUnits1 == "1")
                {
                    oneCoursegpa = 1 * 4;

                    $(".myResult").text("You had a B in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "C" && userUnits1 == "1")
                {
                    oneCoursegpa = 1 * 3;

                    $(".myResult").text("You had a C in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "D" && userUnits1 == "1")
                {
                    oneCoursegpa = 1 * 2;

                    $(".myResult").text("You had a D in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "E" && userUnits1 == "1")
                {
                    oneCoursegpa = 1 * 1;

                    $(".myResult").text("You had an E in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "F" && userUnits1 == "1")
                {
                    oneCoursegpa = 1 * 0;

                    $(".myResult").text("You had an F in a 1 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }

                // For 2 units now

                if(userGrade1 == "A" && userUnits1 == "2")
                {
                    oneCoursegpa = 2 * 5;

                    $(".myResult").text("You had an A in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);
                 
                }
                else if(userGrade1 == "B" && userUnits1 == "2")
                {
                    oneCoursegpa = 2 * 4;

                    $(".myResult").text("You had a B in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "C" && userUnits1 == "2")
                {
                    oneCoursegpa = 2 * 3;

                    $(".myResult").text("You had a C in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "D" && userUnits1 == "2")
                {
                    oneCoursegpa = 2 * 2;

                    $(".myResult").text("You had a D in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "E" && userUnits1 == "2")
                {
                    oneCoursegpa = 2 * 1;

                    $(".myResult").text("You had an E in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "F" && userUnits1 == "2")
                {
                    oneCoursegpa = 2 * 0;

                    $(".myResult").text("You had an E in a 2 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }

                // For 3 unit courses now

                
                if(userGrade1 == "A" && userUnits1 == "3")
                {
                    oneCoursegpa = 3 * 5;

                    $(".myResult").text("You had an A in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);
                 
                }
                else if(userGrade1 == "B" && userUnits1 == "3")
                {
                    oneCoursegpa = 3 * 4;

                    $(".myResult").text("You had a B in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "C" && userUnits1 == "3")
                {
                    oneCoursegpa = 3 * 3;

                    $(".myResult").text("You had a C in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "D" && userUnits1 == "3")
                {
                    oneCoursegpa = 3 * 2;

                    $(".myResult").text("You had a D in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "E" && userUnits1 == "3")
                {
                    oneCoursegpa = 3 * 1;

                    $(".myResult").text("You had an E in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }
                else if(userGrade1 == "F" && userUnits1 == "3")
                {
                    oneCoursegpa = 3 * 0;

                    $(".myResult").text("You had an E in a 3 unit course")
                    $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

                }

                let gradePCourse1 = oneCoursegpa;

                $(".continue1").fadeOut();
                $(".continue2").fadeIn();

                $("#Next-1").fadeIn();


              


















            });

            // clicking on continue2
            $("#Next-1").click(()=>{

                
                let userUnits2 = $(".unit2").find(":selected").val();
                let userGrade2 = $(".grade2").find(":selected").val();
                
                $("#first").fadeOut();
                $("#second").fadeIn();
                
                $(".continue2").fadeIn();
                $("#Next-2").fadeOut();
                   
                // For a 1 unit course and several grades
                if(userGrade2 == "A" && userUnits2 == "1")
                {
                    twoCoursegpa = 1 * 5;

                    $(".mySecondResult").text("You had an A in a 1 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);
                 
                }
                else if(userGrade2 == "B" && userUnits2 == "1")
                {
                    twoCoursegpa = 1 * 4;

                    $(".mySecondResult").text("You had a B in a 1 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "C" && userUnits2 == "1")
                {
                    twoCoursegpa = 1 * 3;

                    $(".mySecondResult").text("You had a C in a 1 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "D" && userUnits2 == "1")
                {
                    twoCoursegpa = 1 * 2;

                    $(".mySecondResult").text("You had a D in a 1 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "E" && userUnits2 == "1")
                {
                    twoCoursegpa = 1 * 1;

                    $(".mySecondResult").text("You had an E in a 1 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "F" && userUnits2 == "1")
                {
                    twoCoursegpa = 1 * 0;

                    $(".mySecondResult").text("You had an F in a 1 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }

                // For 2 units now

                if(userGrade2 == "A" && userUnits2 == "2")
                {
                    twoCoursegpa = 2 * 5;

                    $(".mySecondResult").text("You had an A in a 2 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);
                 
                }
                else if(userGrade2 == "B" && userUnits2 == "2")
                {
                    twoCoursegpa = 2 * 4;

                    $(".mySecondResult").text("You had a B in a 2 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "C" && userUnits2 == "2")
                {
                    twoCoursegpa = 2 * 3;

                    $(".mySecondResult").text("You had a C in a 2 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "D" && userUnits2 == "2")
                {
                    twoCoursegpa = 2 * 2;

                    $(".mySecondResult").text("You had a D in a 2 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "E" && userUnits2 == "2")
                {
                    twoCoursegpa = 2 * 1;

                    $(".mySecondResult").text("You had an E in a 2 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "F" && userUnits2 == "2")
                {
                    twoCoursegpa = 2 * 0;

                    $(".mySecondResult").text("You had an E in a 2 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }

                // For 3 unit courses now

                
                if(userGrade2 == "A" && userUnits2 == "3")
                {
                    twoCoursegpa = 3 * 5;

                    $(".mySecondResult").text("You had an A in a 3 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);
                 
                }
                else if(userGrade2 == "B" && userUnits2 == "3")
                {
                    twoCoursegpa = 3 * 4;

                    $(".mySecondResult").text("You had a B in a 3 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "C" && userUnits2 == "3")
                {
                    twoCoursegpa = 3 * 3;

                    $(".mySecondResult").text("You had a C in a 3 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "D" && userUnits2 == "3")
                {
                    twoCoursegpa = 3 * 2;

                    $(".mySecondResult").text("You had a D in a 3 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "E" && userUnits2 == "3")
                {
                    twoCoursegpa = 3 * 1;

                    $(".mySecondResult").text("You had an E in a 3 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }
                else if(userGrade2 == "F" && userUnits2 == "3")
                {
                    twoCoursegpa = 3 * 0;

                    $(".mySecondResult").text("You had an E in a 3 unit course")
                    $(".mySecondResult2").text("and your grade point per course in your second course is: " + twoCoursegpa);

                }

                let gradePCourse1 = twoCoursegpa;

                // $(".continue2").fadeOut();
                // $("#Next-2").fadeIn();


                
            })




        }
        
    })

});