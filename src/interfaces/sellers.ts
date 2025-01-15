interface ISellersResponse {
  seller: {
    id: string;
    name: string;
    phone: string;
    email: string;
    avatar: {
      id: string;
      url: string;
    };
  };
}

interface IStoreProfileDialogProps {
  data: {
    avatar: {
      url: string;
    };
    name: string;
    phone: string;
    email: string;
  };
}

export type {ISellersResponse, IStoreProfileDialogProps}