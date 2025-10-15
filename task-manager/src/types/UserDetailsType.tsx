
export interface User {
  id: number;
  name: string;
  phone:string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}
