$(document).ready(() => {
    $(".amountCourses").click(() => {
        $(".course-11").fadeIn();
        $(".course-info").fadeOut();






        function checkingGpa(){
            // picking up the unit and grade
            let userUnits = $(".unit3").find(":selected").val();
            let userGrade3 = $(".grade3").find(":selected").val();
    
            let threeCoursegpa;
    
                  // For a 1 unit course and several grades
                  if (userGrade3 === "A" && userUnits === "1") {
                      threeCoursegpa = 1 * 5;
      
                      $(".myThirdResult").text("You had an A in a 1 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "B" && userUnits === "1") {
                      threeCoursegpa = 1 * 4;
      
                      $(".myThirdResult").text("You had a B in a 1 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "C" && userUnits === "1") {
                      threeCoursegpa = 1 * 3;
      
                      $(".myThirdResult").text("You had a C in a 1 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "D" && userUnits === "1") {
                      threeCoursegpa = 1 * 2;
      
                      $(".myThirdResult").text("You had a D in a 1 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "E" && userUnits === "1") {
                      threeCoursegpa = 1 * 1;
      
                      $(".myThirdResult").text("You had an E in a 1 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "F" && userUnits === "1") {
                      threeCoursegpa = 1 * 0;
      
                      $(".myThirdResult").text("You had an F in a 1 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
      
                  // For 2 units now
      
                  else if (userGrade3 === "A" && userUnits === "2") {
                      threeCoursegpa = 2 * 5;
      
                      $(".myThirdResult").text("You had an A in a 2 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "B" && userUnits === "2") {
                      threeCoursegpa = 2 * 4;
      
                      $(".myThirdResult").text("You had a B in a 2 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "C" && userUnits === "2") {
                      threeCoursegpa = 2 * 3;
      
                      $(".myThirdResult").text("You had a C in a 2 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "D" && userUnits === "2") {
                      threeCoursegpa = 2 * 2;
      
                      $(".myThirdResult").text("You had a D in a 2 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "E" && userUnits === "2") {
                      threeCoursegpa = 2 * 1;
      
                      $(".myThirdResult").text("You had an E in a 2 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "F" && userUnits === "2") {
                      threeCoursegpa = 2 * 0;
      
                      $(".myThirdResult").text("You had an E in a 2 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
      
                  // For 3 unit courses now
      
      
                  else if (userGrade3 === "A" && userUnits === "3") {
                      threeCoursegpa = 3 * 5;
      
                      $(".myThirdResult").text("You had an A in a 3 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "B" && userUnits === "3") {
                      threeCoursegpa = 3 * 4;
      
                      $(".myThirdResult").text("You had a B in a 3 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "C" && userUnits === "3") {
                      threeCoursegpa = 3 * 3;
      
                      $(".myThirdResult").text("You had a C in a 3 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "D" && userUnits === "3") {
                      threeCoursegpa = 3 * 2;
      
                      $(".myThirdResult").text("You had a D in a 3 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "E" && userUnits === "3") {
                      threeCoursegpa = 3 * 1;
      
                      $(".myThirdResult").text("You had an E in a 3 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
                  else if (userGrade3 === "F" && userUnits === "3") {
                      threeCoursegpa = 3 * 0;
      
                      $(".myThirdResult").text("You had an E in a 3 unit course")
                      $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
      
                  }
      
                  return threeCoursegpa;
    
    }




        // Checking out the first course

        $(".check1").click(() => {
            // picking up the unit and grade
            let userUnits1 = $(".unit1").find(":selected").val();
            let userGrade1 = $(".grade1").find(":selected").val();


            let oneCoursegpa;

            // For a 1 unit course and several grades
            if (userGrade1 === "A" && userUnits1 === "1") {
                oneCoursegpa = 1 * 5;

                $(".myResult").text("You had an A in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "B" && userUnits1 === "1") {
                oneCoursegpa = 1 * 4;

                $(".myResult").text("You had a B in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "C" && userUnits1 === "1") {
                oneCoursegpa = 1 * 3;

                $(".myResult").text("You had a C in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "D" && userUnits1 === "1") {
                oneCoursegpa = 1 * 2;

                $(".myResult").text("You had a D in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "E" && userUnits1 === "1") {
                oneCoursegpa = 1 * 1;

                $(".myResult").text("You had an E in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "F" && userUnits1 === "1") {
                oneCoursegpa = 1 * 0;

                $(".myResult").text("You had an F in a 1 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }

            // For 2 units now

            else if (userGrade1 === "A" && userUnits1 === "2") {
                oneCoursegpa = 2 * 5;

                $(".myResult").text("You had an A in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "B" && userUnits1 === "2") {
                oneCoursegpa = 2 * 4;

                $(".myResult").text("You had a B in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "C" && userUnits1 === "2") {
                oneCoursegpa = 2 * 3;

                $(".myResult").text("You had a C in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "D" && userUnits1 === "2") {
                oneCoursegpa = 2 * 2;

                $(".myResult").text("You had a D in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "E" && userUnits1 === "2") {
                oneCoursegpa = 2 * 1;

                $(".myResult").text("You had an E in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "F" && userUnits1 === "2") {
                oneCoursegpa = 2 * 0;

                $(".myResult").text("You had an E in a 2 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }

            // For 3 unit courses now


            else if (userGrade1 === "A" && userUnits1 === "3") {
                oneCoursegpa = 3 * 5;

                $(".myResult").text("You had an A in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "B" && userUnits1 === "3") {
                oneCoursegpa = 3 * 4;

                $(".myResult").text("You had a B in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "C" && userUnits1 === "3") {
                oneCoursegpa = 3 * 3;

                $(".myResult").text("You had a C in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "D" && userUnits1 === "3") {
                oneCoursegpa = 3 * 2;

                $(".myResult").text("You had a D in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "E" && userUnits1 === "3") {
                oneCoursegpa = 3 * 1;

                $(".myResult").text("You had an E in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }
            else if (userGrade1 === "F" && userUnits1 === "3") {
                oneCoursegpa = 3 * 0;

                $(".myResult").text("You had an E in a 3 unit course")
                $(".myResult2").text("and your grade point per course is: " + oneCoursegpa);

            }

        });




        // Checking for the second course

        $(".check2").click(() => {
            // picking up the unit and grade
            let userUnits2 = $(".unit2").find(":selected").val();
            let userGrade2 = $(".grade2").find(":selected").val();

            let twoCoursegpa;

              // For a 1 unit course and several grades
              if (userGrade2 === "A" && userUnits2 === "1") {
                twoCoursegpa = 1 * 5;

                $(".mySecondResult").text("You had an A in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "B" && userUnits2 === "1") {
                twoCoursegpa = 1 * 4;

                $(".mySecondResult").text("You had a B in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "C" && userUnits2 === "1") {
                twoCoursegpa = 1 * 3;

                $(".mySecondResult").text("You had a C in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "D" && userUnits2 === "1") {
                twoCoursegpa = 1 * 2;

                $(".mySecondResult").text("You had a D in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "E" && userUnits2 === "1") {
                twoCoursegpa = 1 * 1;

                $(".mySecondResult").text("You had an E in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "F" && userUnits2 === "1") {
                twoCoursegpa = 1 * 0;

                $(".mySecondResult").text("You had an F in a 1 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }

            // For 2 units now

            else if (userGrade2 === "A" && userUnits2 === "2") {
                twoCoursegpa = 2 * 5;

                $(".mySecondResult").text("You had an A in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "B" && userUnits2 === "2") {
                twoCoursegpa = 2 * 4;

                $(".mySecondResult").text("You had a B in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "C" && userUnits2 === "2") {
                twoCoursegpa = 2 * 3;

                $(".mySecondResult").text("You had a C in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "D" && userUnits2 === "2") {
                twoCoursegpa = 2 * 2;

                $(".mySecondResult").text("You had a D in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "E" && userUnits2 === "2") {
                twoCoursegpa = 2 * 1;

                $(".mySecondResult").text("You had an E in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "F" && userUnits2 === "2") {
                twoCoursegpa = 2 * 0;

                $(".mySecondResult").text("You had an E in a 2 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }

            // For 3 unit courses now


            else if (userGrade2 === "A" && userUnits2 === "3") {
                twoCoursegpa = 3 * 5;

                $(".mySecondResult").text("You had an A in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "B" && userUnits2 === "3") {
                twoCoursegpa = 3 * 4;

                $(".mySecondResult").text("You had a B in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "C" && userUnits2 === "3") {
                twoCoursegpa = 3 * 3;

                $(".mySecondResult").text("You had a C in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "D" && userUnits2 === "3") {
                twoCoursegpa = 3 * 2;

                $(".mySecondResult").text("You had a D in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "E" && userUnits2 === "3") {
                twoCoursegpa = 3 * 1;

                $(".mySecondResult").text("You had an E in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }
            else if (userGrade2 === "F" && userUnits2 === "3") {
                twoCoursegpa = 3 * 0;

                $(".mySecondResult").text("You had an E in a 3 unit course")
                $(".mySecondResult2").text("and your grade point per course is: " + twoCoursegpa);

            }

        });


        // Checking for the third course

        $(".check3").click(()=>{
            //   picking up the unit and grade
              let userUnits3 = $(".unit3").find(":selected").val();
              let userGrade3 = $(".grade3").find(":selected").val();
  
              let threeCoursegpa;

                    // For a 1 unit course and several grades
                    if (userGrade3 === "A" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 5;
        
                        $(".myThirdResult").text("You had an A in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "B" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 4;
        
                        $(".myThirdResult").text("You had a B in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "C" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 3;
        
                        $(".myThirdResult").text("You had a C in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "D" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 2;
        
                        $(".myThirdResult").text("You had a D in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "E" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 1;
        
                        $(".myThirdResult").text("You had an E in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "F" && userUnits3 === "1") {
                        threeCoursegpa = 1 * 0;
        
                        $(".myThirdResult").text("You had an F in a 1 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
        
                    // For 2 units now
        
                    else if (userGrade3 === "A" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 5;
        
                        $(".myThirdResult").text("You had an A in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "B" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 4;
        
                        $(".myThirdResult").text("You had a B in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "C" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 3;
        
                        $(".myThirdResult").text("You had a C in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "D" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 2;
        
                        $(".myThirdResult").text("You had a D in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "E" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 1;
        
                        $(".myThirdResult").text("You had an E in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "F" && userUnits3 === "2") {
                        threeCoursegpa = 2 * 0;
        
                        $(".myThirdResult").text("You had an E in a 2 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
        
                    // For 3 unit courses now
        
        
                    else if (userGrade3 === "A" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 5;
        
                        $(".myThirdResult").text("You had an A in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "B" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 4;
        
                        $(".myThirdResult").text("You had a B in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "C" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 3;
        
                        $(".myThirdResult").text("You had a C in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "D" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 2;
        
                        $(".myThirdResult").text("You had a D in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "E" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 1;
        
                        $(".myThirdResult").text("You had an E in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
                    else if (userGrade3 === "F" && userUnits3 === "3") {
                        threeCoursegpa = 3 * 0;
        
                        $(".myThirdResult").text("You had an E in a 3 unit course")
                        $(".myThirdResult2").text("and your grade point per course is: " + threeCoursegpa);
        
                    }
            // checkingGpa();


  
        });


        // Checking for the fourth course

        $(".check4").click(()=>{
            let userUnits4 = $(".unit4").find(":selected").val();
            let userGrade4 = $(".grade4").find(":selected").val();

            let fourthCoursegpa;

               // For a 1 unit course and several grades
               if (userGrade4 === "A" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 5;

                $(".myThirdResult").text("You had an A in a 1 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "B" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 4;

                $(".myThirdResult").text("You had a B in a 1 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "C" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 3;

                $(".myThirdResult").text("You had a C in a 1 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "D" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 2;

                $(".myThirdResult").text("You had a D in a 1 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "E" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 1;

                $(".myThirdResult").text("You had an E in a 1 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "F" && userUnits4 === "1") {
                fourthCoursegpa = 1 * 0;

                $(".myThirdResult").text("You had an F in a 1 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }

            // For 2 units now

            else if (userGrade4 === "A" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 5;

                $(".myThirdResult").text("You had an A in a 2 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "B" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 4;

                $(".myThirdResult").text("You had a B in a 2 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "C" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 3;

                $(".myThirdResult").text("You had a C in a 2 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "D" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 2;

                $(".myThirdResult").text("You had a D in a 2 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "E" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 1;

                $(".myThirdResult").text("You had an E in a 2 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "F" && userUnits4 === "2") {
                fourthCoursegpa = 2 * 0;

                $(".myThirdResult").text("You had an E in a 2 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }

            // For 3 unit courses now


            else if (userGrade4 === "A" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 5;

                $(".myThirdResult").text("You had an A in a 3 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "B" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 4;

                $(".myThirdResult").text("You had a B in a 3 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "C" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 3;

                $(".myThirdResult").text("You had a C in a 3 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "D" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 2;

                $(".myThirdResult").text("You had a D in a 3 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "E" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 1;

                $(".myThirdResult").text("You had an E in a 3 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }
            else if (userGrade4 === "F" && userUnits4 === "3") {
                fourthCoursegpa = 3 * 0;

                $(".myThirdResult").text("You had an E in a 3 unit course")
                $(".myThirdResult2").text("and your grade point per course is: " + fourthCoursegpa);

            }


        });

    });
});


