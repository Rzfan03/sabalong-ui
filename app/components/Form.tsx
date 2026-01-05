import Link from "next/link"

export function FormDark() {
    return (
        <div className="p-8 w-full max-w-md bg-zinc-900 border border-zinc-700 flex flex-col rounded-lg text-zinc-200">
            <div className="flex flex-col items-center mb-8 text-center">
                <h1 className="text-2xl font-semibold">Welcome Back</h1>
                <p className="text-zinc-400 text-sm">Please login with your account</p>
            </div>
            <form className="flex gap-4 flex-col">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Username</label>
                    <input 
                        className="bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg border-zinc-700 w-full placeholder:text-zinc-600" 
                        type="text" 
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">Password</label>
                        <Link href="/" className="no-underline text-xs text-zinc-400 hover:text-zinc-200">Forgot password?</Link>
                    </div>
                    <input 
                        className="bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg border-zinc-700 w-full placeholder:text-zinc-600" 
                        type="password" 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <button 
                    type="submit"
                    className="mt-3 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export function FormLight() {
    return (
        <div className="p-8 w-full max-w-md bg-white border border-zinc-200 flex flex-col rounded-lg text-zinc-800 shadow-sm">
            <div className="flex flex-col items-center mb-8 text-center">
                <h1 className="text-2xl text-zinc-900 font-semibold">Welcome Back</h1>
                <p className="text-zinc-800 text-sm">Please login with your account</p>
            </div>
            <form className="flex gap-4 flex-col">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Username</label>
                    <input 
                        className="bg-white border border-zinc-300 p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg w-full placeholder:text-zinc-400" 
                        type="text" 
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">Password</label>
                        <Link href="/" className="no-underline text-xs text-zinc-500 hover:text-zinc-800">Forgot password?</Link>
                    </div>
                    <input 
                        className="bg-white border border-zinc-300 p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg w-full placeholder:text-zinc-400" 
                        type="password" 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <button 
                    type="submit"
                    className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors shadow-md"
                >
                    Login
                </button>
            </form>
        </div>
    )
}