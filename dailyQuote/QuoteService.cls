public with sharing class QuoteService {
    @AuraEnabled(cacheable=true)
    public static Map<String, String> getQuote() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.quotable.io/random');
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200) {
            Map<String, Object> results = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
            return new Map<String, String>{
                'quote' => (String)results.get('content'),
                'author' => (String)results.get('author')
            };
        } else {
            throw new AuraHandledException('Error fetching quote');
        }
    }
}