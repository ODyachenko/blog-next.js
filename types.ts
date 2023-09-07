// export interface iPost {
//   id: string;
//   cover: string;
//   avatar: string;
//   author: string;
//   date: string;
//   title: string;
//   text?: string;
//   tags: string[];
//   views: number;
//   commentsCount: number;
// }

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
