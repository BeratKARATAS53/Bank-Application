/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionServiceService } from './SessionService.service';

describe('Service: SessionService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SessionServiceService],
        });
    });

    it('should ...', inject(
        [SessionServiceService],
        (service: SessionServiceService) => {
            expect(service).toBeTruthy();
        }
    ));
});
