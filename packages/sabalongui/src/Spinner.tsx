import { CgSpinner } from "react-icons/cg";

export default function Spinner() {
    return(
        <div className="p-5 animate-spin">
            <CgSpinner className="text-zinc-500" fontSize={35}/>
        </div>
    )
}