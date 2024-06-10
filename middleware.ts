import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
const isPublickRoute= createRouteMatcher(['/sing-in','/sing-up','/','/api/webhooks/clerk']);
export default clerkMiddleware((auth,req)=>{
    if (!isPublickRoute(req)) {
        auth().protect();
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
    };