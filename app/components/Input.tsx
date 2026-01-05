import { FaMagnifyingGlass } from "react-icons/fa6";

export function InputDark () {
    return(
        <div className="p-3 w-full max-w-2xl flex justify-between items-center gap-3 rounded-2xl bg-zinc-900 text-zinc-200 outline-0 inset-shadow-sm inset-shadow-zinc-800">

            <input type="text" placeholder="Search Here" className="outline-0"/><FaMagnifyingGlass className="text-zinc-500"/>
        </div>

    )
}


export function InputLight () {
    return(
        <div className="p-3 w-full max-w-2xl flex justify-between items-center gap-3 rounded-2xl bg-zinc-100 text-zinc-600 outline-0 inset-shadow-sm inset-shadow-zinc-200">

            <input type="text" placeholder="Search Here" className="outline-0"/><FaMagnifyingGlass className="text-zinc-500"/>
        </div>

    )
}