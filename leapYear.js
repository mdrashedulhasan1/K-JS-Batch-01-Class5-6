function isLeapYear(year){
    if((year%4 == 0) && (year%100 != 0)){
        console.log(year,"is leap year");
    }
    else if(year%400 == 0){
        console.log(year,"is leap year");
    }
    else{
        console.log(year,"is not leap year");
    }
}

isLeapYear(2000);
isLeapYear(1700);
isLeapYear(1900);
isLeapYear(2100);

