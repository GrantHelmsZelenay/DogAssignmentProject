import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DogFactCreator extends NavigationMixin(LightningElement) {
    isLoading = false;

    async handleGenerate() {
        this.isLoading = true;
        try {
            const rec = await createRecord({ apiName: 'Dog_Fact__c', fields: {} });
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: rec.id,
                    objectApiName: 'Dog_Fact__c',
                    actionName: 'view'
                }
            });
        } catch (e) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Could not create Dog Fact',
                message: e?.body?.message || e?.message || 'Unknown error',
                variant: 'error'
            }));
            this.isLoading = false;
        }
    }
}