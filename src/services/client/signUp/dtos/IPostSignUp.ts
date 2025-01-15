
interface IPostSignUpRequest {
    name:string;
    phone:string;
    avatarId?:string;
    email: string;
    password: string; 
    passwordConfirmation:string;
}

export type { IPostSignUpRequest}