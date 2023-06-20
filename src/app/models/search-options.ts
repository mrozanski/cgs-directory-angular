export class SearchOptions {
    selectedServiceTypeId: string = '0';
    selectedCity: string = '';
    constructor(serviceTypeId: string = '0', city: string = '') {
        this.selectedServiceTypeId = serviceTypeId
        this.selectedCity = city;
    }
}