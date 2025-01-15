interface IPostSignInRequest {
    email: string;
    password: string; 
}

interface IPostSignInResponse {
  accessToken: string;
}

export type { IPostSignInRequest, IPostSignInResponse}