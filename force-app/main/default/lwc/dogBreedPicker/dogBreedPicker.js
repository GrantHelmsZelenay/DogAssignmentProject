import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';
import getAvailableBreeds from '@salesforce/apex/DogBreedFlowController.getAvailableBreeds';

const COLUMNS = [
    { label: 'Breed Name', fieldName: 'name', type: 'text' },
    { label: 'Minimum Life', fieldName: 'minLife', type: 'number', initialWidth: 120 },
    { label: 'Maximum Life', fieldName: 'maxLife', type: 'number', initialWidth: 120 },
    { label: 'Description', fieldName: 'description', type: 'text', wrapText: true },
    { label: 'Hypoallergenic', fieldName: 'hypoallergenic', type: 'boolean', initialWidth: 130 }
];

export default class DogBreedPicker extends LightningElement {
    @api breedName;
    @api minLife;
    @api maxLife;
    @api description;
    @api hypoallergenic;

    breeds = [];
    columns = COLUMNS;
    isLoading = true;
    isLoaded = false;
    errorMessage;

    get hasBreeds() { return this.breeds.length > 0; }

    connectedCallback() { this.loadBreeds(); }

    async loadBreeds() {
        try {
            this.breeds = await getAvailableBreeds();
            this.isLoaded = true;
        } catch (e) {
            this.errorMessage = e?.body?.message || e?.message || 'Unable to load breeds.';
        } finally {
            this.isLoading = false;
        }
    }

    handleSelection(event) {
        const row = event.detail.selectedRows[0];
        this.setOutput('breedName', row ? row.name : null);
        this.setOutput('minLife', row ? row.minLife : null);
        this.setOutput('maxLife', row ? row.maxLife : null);
        this.setOutput('description', row ? row.description : null);
        this.setOutput('hypoallergenic', row ? row.hypoallergenic : null);
    }

    setOutput(name, value) {
        this[name] = value;
        this.dispatchEvent(new FlowAttributeChangeEvent(name, value));
    }

    @api
    validate() {
        if (this.breedName) return { isValid: true };
        return { isValid: false, errorMessage: 'Select a dog breed to continue.' };
    }
}