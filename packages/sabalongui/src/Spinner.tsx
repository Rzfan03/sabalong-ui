import { CgSpinner } from "react-icons/cg";

export default function Spinner({className = ""}: {className?: string}) {
    return(
        <div className={`p-5 animate-spin ${className}`}>
            <CgSpinner className="text-zinc-500" fontSize={35}/>
        </div>
    )
}