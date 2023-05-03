var ExamResult={

    "Name":"Ramesh",
    "DOB":"18.03.2000",
    "RegNo":"1212122",
    "Percentage":"80"
    
  }

    // for in loop
   
  
      for(var i in ExamResult){
      
      console.log(i,ExamResult[i]);
      
  }
  
    // for loop
  
     var ExamResult1 = [];
     ExamResult1.push(ExamResult);
    
      
      for(var i=0; i<ExamResult1.length; i++){

      console.log(ExamResult1[i]);

      }