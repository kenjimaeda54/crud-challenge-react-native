export interface Tasks {
  description: string;
  uuid: string;
}

export interface FireStoreTasks {
  tasks: Tasks[];
}

export interface UserProps {
  displayName: string;
  email: string;
  isAnonymous: boolean;
  photoUrl?: string;
  refreshToken?: string;
  uid: string;
}
