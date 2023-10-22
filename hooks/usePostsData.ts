import { postDummyData } from '@/constant/postDummyData';

function usePostsData({ currentPage = 1 }) {
  if (isNaN(currentPage)) {
    return {
      totalPages: 1,
      posts: postDummyData,
      currentPosts: [],
    };
  }

  const maxPostsOnEachPage = 3;
  const totalPages = Math.ceil(postDummyData.length / maxPostsOnEachPage);

  const startIndex = (currentPage - 1) * maxPostsOnEachPage;
  const endIndex = currentPage * maxPostsOnEachPage;
  const currentPosts = postDummyData.slice(startIndex, endIndex);

  return {
    totalPages,
    currentPosts,
    posts: postDummyData,
  };
}

export default usePostsData;
