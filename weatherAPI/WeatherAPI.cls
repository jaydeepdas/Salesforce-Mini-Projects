public with sharing class WeatherAPI {
    @AuraEnabled
    public static string getWeather(String city){
        Http http=new Http();
        HttpRequest req= new HttpRequest();
        req.setEndpoint('callout:WeatherAPI/current.json?q='+city);
        req.setMethod('GET');
        HttpResponse res= http.send(req);

        System.debug('WeatherAPI Request URL: ' + req.getEndpoint());
        System.debug('WeatherAPI Request Method: ' + req.getMethod());
        System.debug('WeatherAPI Response Status Code: ' + res.getStatusCode());
        System.debug('WeatherAPI Response Body: ' + res.getBody());
        
        return res.getBody();
    }
}