import Api from "./Api";
import NewApi from "./NewApi";

export default class NewApiAdapter extends Api {
    newApi: NewApi;

    constructor(newApi: NewApi) {
        super();
        this.newApi = newApi;
    }

    getName(): void {
        return this.newApi.get_Name();
    }
    getAge(): void {
        return this.newApi.get_Age();
    }
    getGender(): void {
        return this.newApi.get_Gender();
    }
}