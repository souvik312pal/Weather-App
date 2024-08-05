const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp_status = document.getElementById("temp_status")
const temp_real_val = document.getElementById("temp_real_val")
const day = document.getElementById("day")
const date = document.getElementById("today_date")


async function getInfo(event){
    event.preventDefault()
    const cityVal = cityName.value
    if(cityVal === ''){
        city_name.innerText = 'Give the name of a City before search'
    } else {
        try {
            const WAETHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8a03ddbccb9d9b3165d580a2552b9589`
            const res = await fetch(WAETHER_API)
            const data = await res.json()
            const array = [data]
            city_name.innerText = `${array[0].name}, ${array[0].sys.country}`
            temp_real_val.innerText = array[0].main.temp

            const tempMood = array[0].weather[0].main
            switch(tempMood) {
                case 'Clear' : {
                    temp_status.innerHTML = `<i class='fas fa-sun' style='color: #eccc68;'></i>`
                    break
                }
                case 'Clouds': {
                    temp_status.innerHTML = `<i class='fa fa-cloud' style='color: #6fbae2;'></i>`
                    break
                } 
                case 'Rain': {
                    temp_status.innerHTML = `<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>`
                    break
                }
                default : {
                    temp_status.innerHTML = `<i class="fas fa-sun-cloud" style='color: #eccc68;'></i>`
                    break
                }
            }
            

            // get the date
            function getCurrentDay() {
                const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
                const d = new Date()
                return week[d.getDay()]
            }
            day.innerHTML = `${getCurrentDay()}`

            // get the month
            function getCurrentMonth() {
                const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                const d = new Date()
                return month[d.getMonth()]
            }
            date.innerHTML = `${new Date().getDate()} ${getCurrentMonth()}`
        
        } catch(err){
            city_name.innerText = 'Give proper name of the City'
        }
    }
}

submitBtn.addEventListener('click', getInfo)