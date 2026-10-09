document.addEventListener('DOMContentLoaded', function () {
    const monthyear = document.getElementById('month-year');
    const btnLeft = document.getElementById('btn_left');
    const btnRight = document.getElementById('btn_right');
    const daysContainer = document.getElementById('days');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let currentDate= new Date();
    let today= new Date();

    function renderCalendar(date){

     const year= date.getFullYear();
     const month=date.getMonth();

     const firstDay= new Date(year,month,1).getDay();
     const lastDay=new Date(year,month+1,0).getDate();

     monthyear.textContent= `${months[month]} ${year}`;
     daysContainer.innerHTML= '';

     const prewLastDay= new Date(year,month,0).getDate();
     for(let i = firstDay; i>0;i--){
        const DayDiv=document.createElement('div');
        DayDiv.textContent=prewLastDay-i+1;
        DayDiv.classList.add('fade');
        daysContainer.appendChild(DayDiv);
     }
     for(let i=1;i<=lastDay;i++){
        const DayDiv=document.createElement('div');
        DayDiv.textContent=i;
        if(i===today.getDate()&&month===today.getMonth()&&year===today.getFullYear()){
            DayDiv.classList.add('today');
        }
        daysContainer.appendChild(DayDiv);
     }
     const nextMonthStartDay=7-new Date(year,month+1,0).getDay()-1;
     for(let i=1;i<=nextMonthStartDay;i++){
        const DayDiv=document.createElement('div');
        DayDiv.textContent=i;
        DayDiv.classList.add('fade')
        daysContainer.appendChild(DayDiv);
     }
    }
btnLeft.addEventListener('click', function(){
currentDate.setMonth(currentDate.getMonth()-1)
renderCalendar(currentDate)
});

btnRight.addEventListener('click', function(){
currentDate.setMonth(currentDate.getMonth()+1)
renderCalendar(currentDate)
});
renderCalendar(currentDate)   
});





