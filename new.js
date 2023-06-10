// My code
// Function to calculate GPA
function calculateGPA(grades) {
    var totalCourseUnits = 0;
    
  
    // Calculate total grade points and credits
    for (var i = 0; i < grades.length; i++) {
      var grade = grades[i].grade;
      var credit = grades[i].credit;
  
      totalGradePoints += grade * credit;
      totalCourseUnits += credit;
    }
  
    // Calculate GPA
    var gpa = totalGradePoints / totalCourseUnits;
  
    return gpa.toFixed(2); // Round to 2 decimal places
  }
  
  var totalGradePoints = 0;
  
  // Function to get user input and display GPA
  function getGradesAndCalculateGPA() {
    var grades = [];
    var numCourses = parseInt(prompt("Enter the number of courses:"));
  
    // Get grades and credits for each course
    for (var i = 0; i < numCourses; i++) {
      var grade = parseFloat(prompt("Enter grade for course " + (i + 1) + ":"));
      grade = grade.toUpperCase();

      if(grade === "A")
      {
        grade = 5;
      }

      if(grade === "B")
      {
        grade = 4;
      }

      if(grade === "C")
      {
        grade = 3;
      }

      if(grade === "D")
      {
        grade = 2;
      }

      if(grade === "E")
      {
        grade = 1;
      }

      if(grade === "F")
      {
        grade = 0;
      }
      console.log(grade);
    //   var credit = parseFloat(prompt("Enter Unit for course " + (i + 1) + ":"));
  
      grades.push({ grade: grade});
    }

    // for the units section
    for (var i = 0; i < numCourses; i++) {
        // var grade = parseFloat(prompt("Enter grade for course " + (i + 1) + ":"));
        var credit = parseFloat(prompt("Enter Unit for course " + (i + 1) + ":"));
    
        grades.push({ grade: grade});
      }
  
    // Calculate GPA
    var gpa = calculateGPA(grades);
  
    // Display the calculated GPA
    console.log("Your GPA is: " + gpa);
  }
  
  // Call the function to get input and calculate GPA
  getGradesAndCalculateGPA();
  
  











// // Function to calculate GPA
// function calculateGPA(grades) {
//     var totalCredits = 0;
//     var totalGradePoints = 0;
  
//     // Calculate total grade points and credits
//     for (var i = 0; i < grades.length; i++) {
//       var grade = grades[i].grade;
//       var credit = grades[i].credit;
  
//       totalGradePoints += grade * credit;
//       totalCredits += credit;
//     }
  
//     // Calculate GPA
//     var gpa = totalGradePoints / totalCredits;
  
//     return gpa.toFixed(2); // Round to 2 decimal places
//   }
  
//   // Function to get user input and display GPA
//   function getGradesAndCalculateGPA() {
//     var grades = [];
//     var numCourses = parseInt(prompt("Enter the number of courses:"));
  
//     // Get grades and credits for each course
//     for (var i = 0; i < numCourses; i++) {
//       var grade = parseFloat(prompt("Enter grade for course " + (i + 1) + ":"));
//       var credit = parseFloat(prompt("Enter credit for course " + (i + 1) + ":"));
  
//       grades.push({ grade: grade, credit: credit });
//     }
  
//     // Calculate GPA
//     var gpa = calculateGPA(grades);
  
//     // Display the calculated GPA
//     console.log("Your GPA is: " + gpa);
//   }
  
//   // Call the function to get input and calculate GPA
//   getGradesAndCalculateGPA();
  