import { ConfigService } from './config.service';

export class EnrollmentService {
    // tslint:disable-next-line:max-line-length
    dependent: {firstName: string, lastName: string, middleName: string, suffix: string, ssn: string, covered: boolean, tobaccoUsage: string};
    displayData = {};

    constructor() {
        // tslint:disable-next-line:max-line-length
        // console.log('config' + configService);
        this.dependents.push({firstName: 'Rajesh', lastName: 'Kotari', middleName: '', suffix: '', ssn: '123-45-6789', covered: true, tobaccoUsage: 'No' });
    }

    dependents = [];
    // displayData = this.configService.getConfigurartion();

}
