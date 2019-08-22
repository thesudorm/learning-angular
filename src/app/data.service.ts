import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';
import { Customer } from './model';

@Injectable()
export class DataService {
    constructor(private loggerService: LoggerService){ }

    getCustomers() {
        var toReturn = createTestCustomers();
        this.loggerService.log(toReturn.length.toString() + " customers received.");
        return toReturn;
    }
}
