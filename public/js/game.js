function show() {
  var num, no,fact;
  fact=1;
  no=Number(document.getElementById("num").value);
  for(num=1; num<=no; num++)
  {
      fact=fact*num;
  }
  alert(fact);
  }