export interface Team {
    id: string;
    name: string;
    email: string; //ADMIN
    users: TeamMember[]; //list of emails
}

export interface TeamMember {
    id: string; //Email
    accepted: boolean; //FALSE
}
