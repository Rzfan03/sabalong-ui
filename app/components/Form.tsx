import Link from "next/link"

type FormProps = {
  mode: "dark" | "light";
}

export default function Form({ mode }: FormProps) {
  const isDark = mode === "dark";

  return (
    <div className={`p-8 w-full max-w-md flex flex-col rounded-lg transition-colors duration-300 border ${
      isDark ? "bg-zinc-900 border-zinc-700 text-zinc-200" : "bg-white border-zinc-200 text-zinc-800 shadow-sm"
    }`}>
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className={`text-2xl font-semibold ${!isDark ? "text-zinc-900" : ""}`}>
          Welcome Back
        </h1>
        <p className={`text-sm ${isDark ? "text-zinc-400" : "text-zinc-800"}`}>
          Please login with your account
        </p>
      </div>

      <form className="flex gap-4 flex-col">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className={`bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg w-full ${
              isDark ? "border-zinc-700 placeholder:text-zinc-600" : "border-zinc-300 placeholder:text-zinc-400"
            }`}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Password</label>
            <Link 
              href="/" 
              className={`no-underline text-xs transition-colors ${
                isDark ? "text-zinc-400 hover:text-zinc-200" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className={`bg-transparent border p-2 focus:outline-1 outline-indigo-500 transition-all rounded-lg w-full ${
              isDark ? "border-zinc-700 placeholder:text-zinc-600" : "border-zinc-300 placeholder:text-zinc-400"
            }`}
          />
        </div>

        <button
          type="submit"
          className={`mt-3 w-full text-white font-medium py-2 rounded-lg transition-all shadow-lg ${
            isDark ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20" : "bg-indigo-600 hover:bg-indigo-700 shadow-md"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}