/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferService } from './TransferService.service';

describe('Service: TransferService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TransferService],
        });
    });

    it('should ...', inject([TransferService], (service: TransferService) => {
        expect(service).toBeTruthy();
    }));
});
