export interface User {
    id: string; //email
    name: string;
    phone: string;
    institution: string; //COLLEGE / COMPANY
    designation: string; // COURSE / DESIGNATION
    experience: number;
    eventSourceInfo: string;
    shareWithUsInfo: string;
    recieveNotification: boolean;
    isStudent: boolean; //TRUE
}
