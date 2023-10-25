import format from 'date-fns/format';

function createRandomId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function createComment(comment: string, date: Date): CommentType {
  return {
    id: createRandomId(),
    user: 'Jennifer L',
    comment,
    postedDate: format(date, 'do MMM'),
    avatar: '/user-avatar.svg',
    subComments: [],
  };
}

export interface CommentType {
  id: number | string;
  user: string;
  postedDate: string;
  avatar: string;
  comment: string;
  editedDate?: string;
  subComments?: CommentType[];
}

export const comments: CommentType[] = [
  {
    id: 1,
    user: 'Mishacreatrix',
    postedDate: 'Feb 01',
    editedDate: 'Feb 01',
    avatar: '/user-avatar.svg',
    comment:
      'As an ex-dev, I believed nocode to be only useful for small prototypes or things like landing pages/portfolio pages etc. After tinkering around with Bubble for a bit, I now see that you can indeed build fully fledged apps! It is still not ideal, but I reckon nocode builders will only get more powerful as time goes by',
    subComments: [],
  },
  {
    id: 2,
    user: 'AR Jakir',
    postedDate: 'Feb 02',
    avatar: '/user-avatar.svg',
    comment:
      'What a fantastic article! Thank you for putting so much work into writing this for us.',
    subComments: [],
  },
  {
    id: 3,
    user: 'Jennifer L',
    postedDate: 'Mar 22',
    avatar: '/user-avatar.svg',
    comment: 'This is great',
    subComments: [],
  },
];

export const postStats = [
  {
    id: 1,
    icon: '/assets/posts/orange-heart-square.svg',
    iconName: 'Hearts',
    amount: 24056,
    isHeart: true,
  },
  {
    id: 2,
    icon: '/assets/posts/comment.svg',
    iconName: 'Comments',
    amount: 3086,
  },
  { id: 3, icon: '/assets/posts/share.svg', iconName: 'Shares', amount: 84 },
];

export const userPosts = [
  {
    id: 1,
    title: `Self-Taught Developer Journal, Day 51: TOP Building Rock Paper
    Scissors UI cont.`,
    tags: ['webdev', 'beginners', 'codenewbie', 'devjournal'],
  },
  {
    id: 2,
    title: `Learn Nginx and its basics in 2022`,
    tags: ['webdev', 'nginx', 'node', 'javascript'],
  },
  {
    id: 3,
    title: ` My Learning Path for Programming Tello Drones`,
    tags: ['tello', 'python', 'python3', 'beginners'],
  },
];
