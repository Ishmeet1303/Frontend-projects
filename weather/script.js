//http://api.weatherapi.com/v1/current.json?key=f82c216d45ea43c1ac6170338251309&q=Mumbai&aqi=no

const temperatureField=document.querySelector(".temp")
const locationField=document.querySelector(".time_location p")
const dateandTimeField=document.querySelector(".time_location span")
const conditionField=document.querySelector(".condition p ")
const searchField=document.querySelector(".search_location")
const form=document.querySelector('form')

form.addEventListener('submit',searchForLocation)

//API functionality
const fetchresults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=f82c216d45ea43c1ac6170338251309&q=${targetLocation}&aqi=no`

    const res=await fetch(url)
    const data= await res.json()
    console.log(data)


    let locationName=data.location.name
    let time=data.location.localtime
    console.log(time)
    let temp=data.current.temp_c
    let condition=data.current.condition.text
    updateDetails(temp,locationName,time,condition)
}


//function to update
function updateDetails(temp,locationName,time,condition){
  
  
    temperatureField.innerText=temp
    locationField.innerText=locationName
    dateandTimeField.innerText=time
    conditionField.innerText=condition


}

function searchForLocation(e){
    e.preventDefault()

    target=searchField.value
    fetchresults(target)
}

searchForLocation()
fetchresults(target)