public without sharing class DogBreedFlowController {

    @AuraEnabled
    public static List<DogBreedController.BreedWrapper> getAvailableBreeds() {
        // SOQL first, callout second (no DML before the callout)
        Set<String> taken = new Set<String>();
        for (Dog_Fact__c d : [SELECT Breed_Name__c FROM Dog_Fact__c WHERE Breed_Name__c != null]) {
            taken.add(d.Breed_Name__c.toLowerCase());
        }

        List<DogBreedController.BreedWrapper> available = new List<DogBreedController.BreedWrapper>();
        for (DogBreedController.BreedWrapper b : DogBreedController.getBreeds()) {
            if (b.name != null && !taken.contains(b.name.toLowerCase())) {
                available.add(b);
            }
        }
        return available;
    }
}