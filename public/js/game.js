function show(number) {
    var num, no, fact;
    fact = 1;
    no = parseInt(number);
    if (no < 0) {
       
        return -1;
    } 
    else {
        for (num = 1; num <= no; num++) 
            fact = fact * num;
           }
     
      document.getElementById("result").innerHTML="The factorial is "+fact;
      console.log(fact);
        return fact;
    }

