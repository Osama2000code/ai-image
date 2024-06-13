import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
const isProtectedRoute= createRouteMatcher(['/api/webhooks/clerk']);
export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });
export const config = {
    // The following matcher runs middleware on all routes
    // except static assets.
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };