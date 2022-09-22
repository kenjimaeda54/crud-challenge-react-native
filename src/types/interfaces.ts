export interface FireStoreProps {
  description: string;
  uid: string;
}

export interface UserProps {
  displayName: string;
  email: string;
  isAnonymous: boolean;
  photoUrl?: string;
  refreshToken?: string;
  uid: string;
}
