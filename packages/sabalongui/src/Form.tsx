import Link from "next/link"


export function FormDark() {
    return(
        <div className="p-8 mb-5 bg-zinc-900 border border-zinc-700 flex flex-col justify-center items-center rounded-lg text-zinc-200">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-2xl font-semibold">Welcome Back</h1>
                <p className="text-zinc-400">please login with your account</p>
            </div>
            <form action="" className="flex gap-4 flex-col">
                <div className="flex flex-col gap-2">
                 <label className="text-sm">Username</label>
                <input className="bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg border-zinc-700 w-full" type="text" placeholder="Enter your name" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label className="text-sm">Username</label>
                        <Link href={'/'} className="underline text-xs">forget your password?</Link>
                    </div>
                <input className="bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg border-zinc-700 w-full" type="text" placeholder="Enter your password" required/>
                </div>
                <div className="mt-3 flex justify-center items-center bg-indigo-500 inset-shadow-sm inset-shadow-indigo-400 py-2 rounded-lg">
                    <Link href={'/'}>Login</Link>
                </div>
            </form>
        </div>
    )
}


export function FormLight() {
    return(
        <div className="p-8 mb-5 bg-zinc-100 border border-zinc-200 flex flex-col justify-center items-center rounded-lg text-zinc-800">
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-2xl text-zinc-800 font-semibold">Welcome Back</h1>
                <p className="text-zinc-800">please login with your account</p>
            </div>
            <form action="" className="flex gap-4 flex-col">
                <div className="flex flex-col gap-2">
                 <label className="text-sm">Username</label>
                <input className="bg-transparent border text-zinc-500 p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg border-zinc-300" type="text" placeholder="Enter your name" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label className="text-sm">Password</label>
                        <Link href={'/'} className="underline text-xs">forget your password?</Link>
                    </div>
                <input className="bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg border-zinc-300 w-full" type="text" placeholder="Enter your password" required/>
                </div>
                <div className="mt-3 flex justify-center items-center bg-indigo-500 inset-shadow-sm inset-shadow-indigo-400 py-2 rounded-lg">
                    <Link href={'/'} className="text-zinc-200">Login</Link>
                </div>
            </form>
        </div>
    )
}