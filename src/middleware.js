import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export const middleware = (request) => {
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/dashboard/:path*'],
}

//will implement later for private and secure route 