// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    ImagePath: string;
    username: string;
    replyTitle: string;
    likes: number;
}
export type { ReplyProps };

interface PostOwnnerProps {
    name: string;
    studentId: string;
    likes: number;
}
export type { PostOwnnerProps };

interface CommentProps {
    ImagePath: string;
    username: string;
    commentTitle: string;
    likes: number;
    replies: string[];
}
export type { CommentProps };

