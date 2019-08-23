import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers } from './test-data';

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        let customers = createTestCustomers();
        return {customers};
    }
}