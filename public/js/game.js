function show(number) {
    var num, no, fact;
    fact = 1;
    no = parseInt(number);
    if (no < 0) {
        alert(-1);
        return -1;
    } else {
        for (num = 1; num <= no; num++) {
            fact = fact * num;
        }
      alert(fact);
        return fact;
    }
}