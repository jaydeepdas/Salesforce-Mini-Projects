import { LightningElement } from 'lwc';
import getWeather from '@salesforce/apex/WeatherAPI.getWeather';
export default class WeatherAPI extends LightningElement {

    city;
    imageURL;
    condition;
    temp;
    time;

    handleonchange(event) {
        this.city=event.target.value;
    }

    buttonclick(){
        getWeather({ city: this.city}).then((response)=>{
            console.log("Response........." +response);
            let parseData = JSON.parse(response);
            this.imageURL = parseData.current.condition.icon;
            this.condition = parseData.current.condition.text;
            this.temp =  parseData.current.temp_c;
            this.time = parseData.location.localtime;
        })
        .catch((error)=>{
            this.condition = "No matching Location Found";
            console.log('error :'+JSON.stringify(error));
        });

    }
}