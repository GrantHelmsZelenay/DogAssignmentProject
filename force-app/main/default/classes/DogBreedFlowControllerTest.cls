@isTest
private class DogBreedFlowControllerTest {

    private class Mock implements HttpCalloutMock {
        public HttpResponse respond(HttpRequest req) {
            HttpResponse res = new HttpResponse();
            res.setStatusCode(200);
            res.setBody('{"data":['
                + '{"id":"1","attributes":{"name":"Beagle","life":{"min":10,"max":15},"hypoallergenic":false}},'
                + '{"id":"2","attributes":{"name":"Poodle","hypoallergenic":true}}'
                + '],"links":{}}');
            return res;
        }
    }

    @isTest
    static void excludesAssignedBreeds() {
        insert new Dog_Fact__c(Breed_Name__c = 'Beagle'); // DML before startTest
        Test.setMock(HttpCalloutMock.class, new Mock());
        Test.startTest();
        List<DogBreedController.BreedWrapper> result = DogBreedFlowController.getAvailableBreeds();
        Test.stopTest();
        Assert.areEqual(1, result.size());
        Assert.areEqual('Poodle', result[0].name);
    }
}