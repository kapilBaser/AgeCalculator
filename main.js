var d1,d2,m1,m2,y1,y2,x,y,day,month,year;
function cdate(){
    document.getElementById("curr").valueAsDate=new Date();
}
function getCurr(){
    x=document.getElementById("curr").value;
    y2 = x.slice(0,4);
    m2 =  x.slice(5,7);
    d2 = x.slice(8);
}
function getDate(){
    y=document.getElementById("dob").value;
    y1 =y.slice(0,4);
    m1 =  y.slice(5,7);
    d1 = y.slice(8);
}
function set(){
   
    getCurr();
    getDate();
    if(y==null){
        y1=2000;
        m1=1;
        d1=1;
    }else{
        day = d2-d1;
        month = m2-m1;
        year = y2-y1;

        day  = day<0?-day:day;
        month =  month<0?-month:month;
        year=year<0?-year:year;

        document.getElementById("result1").innerText=year;
        document.getElementById("presult1").innerHTML="Year";
        document.getElementById("result2").innerText=month;
        document.getElementById("presult2").innerHTML="Month";
        document.getElementById("result3").innerText=day;
        document.getElementById("presult3").innerHTML="Day";
    }
}