export interface CommentType {
  id: number | string;
  user: string;
  postedDate: string;
  avatar: string;
  comment: string;
  editedDate?: string;
  subComments?: CommentType[];
}
