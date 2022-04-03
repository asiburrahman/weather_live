

const city = document.getElementById("city");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp")
const middle_layer = document.querySelector(".middle_layer");
const temp_status = document.getElementById("temp_status")
const today_data = document.getElementById("today_data");
const day = document.getElementById("day");


const getOutput = async (e)=>{
    e.preventDefault();
    const city_value = city.value;
    
    if(city_value===""){
        city_name.innerHTML="Please Enter The city Name"
         
    } else{
        try {
            let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=6411d1826e011256f0723879ed528729`)
            const data = await url.json();
            
            const arr = [data];
            temp.innerHTML = arr[0].main.temp;
             city_name.innerHTML = `${data.name}, ${data.sys.country}`
            const tempval = data.weather[0].main;
            console.log(tempval);
             middle_layer.classList.remove("data_hide");
             if(tempval =="Clear"){
                 temp_status.innerHTML= "<i class='fa-solid fa-sun' style='color: #eccc68'></i>"
             }else if(tempval =="Clouds"){
                temp_status.innerHTML= "<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>"
             }else if(tempval =="Rain"){
                temp_status.innerHTML= "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>"
             }else{
                temp_status.innerHTML= "<i class='fa-solid fa-cloud' style='color: #f1f2f6'></i>"
             }
            
        } catch {
            city_name.innerHTML="Please Enter Accurate City Name"
            middle_layer.classList.add("data_hide");
        }
    }
}

const getDate=()=>{
    let d =["Sun", "Mon","Tue","Wed","Thus","Fri","Sat"];
    let m = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    let todate = new Date();
    let currentDate = todate.getDate();
    let currentMonth = todate.getMonth();
    let currentday = todate.getDay();
    today_data.innerHTML = currentDate+" "+m[currentMonth];
    day.innerHTML= d[currentday];
    
}

// const getTime=()=>{
//     let t = "AM";
//     let time =new Date();
//     let currentMin = time.getMinutes();
//     let currentHour = time.getHours();

//     if(currentMin<10) "0"+currentMin;
//     if(currentHour>12){
//          currentHour-=12;
//          t="PM";
//     } 
//     return currentHour + ":" + currentMin +" "+ t;
    
// }
getDate();
// let getCurrentTime = getTime();


submitBtn.addEventListener("click", getOutput)