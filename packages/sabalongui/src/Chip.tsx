import { IoCloseOutline } from "react-icons/io5";

export function Chip({Text}: {Text:string}) {
    return(
        <div className="p-2 w-fit gap-4 rounded-lg flex items-center bg-zinc-900 border border-zinc-800 text-zinc-200">
            <span className="text-sm">{Text}</span>
            <IoCloseOutline className="cursor-pointer"/>
        </div>
    )
}