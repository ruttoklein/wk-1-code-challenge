function calculateGrade(Grade) 
{ 
    let userInput = prompt("Enter student marks (0-100):");{
if (userInput = ( "marks < 0 marks > 100" )) {
    console.log("Invalid input ");
}
} // calculate grade
    if(marks>=0 && marks<=100){
    let grade;
    if (marks >79&& marks <=100) {
      return "A";
    } else if (marks >= 60&& marks <=79) {
      return "B";
    } else if (marks >= 49&& marks <=59) {
      return "C";
    } else if (marks >= 40&&marks <49 ) {
      return "D";
    } else if (marks >40 ) {
        return "E";
    } else { 
        return "Invalid input";

    }
}
}
 const result = calculateGrade(Grade);
    console.log(Grade);
    
