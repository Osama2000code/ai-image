import { SignIn } from "@clerk/nextjs";

export default function Page() {
return(
    <>
<div className="h-auto bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex items-center justify-center h-screen">
            <SignIn 
            afterSignOutUrl={'/'}
            />
        </div>
</div>

    </>
);
}