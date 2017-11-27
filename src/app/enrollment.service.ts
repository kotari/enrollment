export class EnrollmentService {
    dependent: {firstName: string, lastName: string, middleName: string, suffix: string, ssn: string}
    dependents = [];

    constructor() {
        this.dependents.push({firstName: 'Rajesh', lastName: 'Kotari', middleName: '', suffix: '', ssn:'123-45-6789' });
    }
  
}