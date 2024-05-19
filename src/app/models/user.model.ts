import { Profile } from './profile.model';
export interface User {
  name: string;
  email: string;
  imageUrl: string;
  profile?: Profile[];
}
