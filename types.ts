export interface iPost {
  id: string;
  cover: string;
  avatar: string;
  author: string;
  date: string;
  title: string;
  text?: string;
  tags: string[];
  views: number;
  commentsCount: number;
}

export interface iComments {
  id: string;
  avatar: string;
  author: string;
  text: string;
}
