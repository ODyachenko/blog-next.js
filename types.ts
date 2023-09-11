export interface iUser {
  _id: string;
  avatarUrl: string;
  createdAt: string;
  updateAt: string;
  email: string;
  fullName: string;
  passwordHash?: string;
}

export interface iPost {
  _id: string;
  createdAt: string;
  imageUrl: string;
  tags?: string[];
  text: string;
  title: string;
  updateAt?: string;
  user: iUser;
  viewsCount: number;
}

export interface iComments {
  _id: string;
  avatar: string;
  author: string;
  user: {
    avatarUrl: string;
    fullName: string;
  };
  text: string;
}

export interface iUserReg {
  email: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
}
export interface iUserLog {
  email: string;
  password: string;
}
