let comments: { name: string; message: string }[] = [];

export const getComments = () => comments;

export const addComment = (comment: { name: string; message: string }) => {
  comments.push(comment);
};
