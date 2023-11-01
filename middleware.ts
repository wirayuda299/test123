import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/sign-up', '/sign-in', '/'],
});

export const config = {
  matcher: ['/'],
};

// import { authMiddleware } from '@clerk/nextjs';

// export default authMiddleware({
//   publicRoutes: ['/sign-up', '/sign-in', '/'],
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
