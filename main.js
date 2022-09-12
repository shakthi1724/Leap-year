const year=2022;
function leapyear(year){
    const abc =new Date(year,1,29).getDate()==29;
    if(abc){
        console.log(year+" is a leap year");
    }
    else{
        console.log(year+" is not a leap year");
    }
}
leapyear(year);