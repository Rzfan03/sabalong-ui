import { FaCircleCheck } from "react-icons/fa6";

export function VerifiedBadge({Text = "Verified Bagde", className = ""}: {Text?:string, className?: string}) {
    return(
        <div className={`py-2 px-4 h-fit text-sm w-fit bg-zinc-900 inset-shadow-sm inset-shadow-zinc-800 items-center rounded-full flex  gap-3 ${className}`}>
            <span className="text-blue-500">{Text}</span>
            <FaCircleCheck fontSize={15} className="text-blue-500"/>
        </div>
    )
}

export function DefaultBadge({Text = "Default Bagde", className = ""}: {Text?:string, className?: string}) {
    return(
        <div className={`py-2 px-4 text-sm w-fit bg-zinc-900 inset-shadow-sm inset-shadow-zinc-800 items-center justify-center rounded-full flex h-fit gap-3 ${className}`}>
            <span className="text-zinc-100">{Text}</span>
        </div>
    )
}
