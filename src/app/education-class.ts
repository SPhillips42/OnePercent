export class EducationClass {
    id: number;
    SAT: number;
    GPA: number;
    firstname: string;
    lastname: string;
    InState: boolean;
    
  static Class: any;
    
    constructor(sat: number, gpa: number, firstname: string, lastname: string, instate: boolean){
        this.id = 0;
        this.SAT = sat;
        this.GPA = gpa;
        this.firstname = firstname;
        this.lastname = lastname;
        this.InState = instate;
    }
}
