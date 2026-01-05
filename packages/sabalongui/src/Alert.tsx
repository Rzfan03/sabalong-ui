import { AlertCircleIcon } from "lucide-react"
import { CheckCircleIcon } from "lucide-react"

export function Alert({Text = "This is failed example alert components"}: {Text?:string}) {
    return(
        <div className="px-5 py-3 w-fit bg-zinc-900 border rounded border-zinc-700 text-zinc-200">
            <div className="flex gap-2 items-center">
                <AlertCircleIcon fontSize={10} className="text-red-500"/>
                <span className="text-sm">{Text}</span>
            </div>
        </div>
    )
}

export function AlertGreen({Text = "This is success example alert components"}: {Text?:string}) {
    return(
        <div className="px-5 py-3 w-fit bg-zinc-900 border rounded border-zinc-700 text-zinc-200">
            <div className="flex gap-2 items-center">
                <CheckCircleIcon fontSize={10} className="text-green-500"/>
                <span className="text-sm max-md:text-xs">{Text}</span>
            </div>
        </div>
    )
}


export function AlertNeutral({Text = "this is neutral example alert components"}: {Text?:string}) {
    return(
        <div className="px-5 py-3 w-fit bg-zinc-900 border rounded border-zinc-700 text-zinc-200">
            <div className="flex gap-2 items-center">
                <AlertCircleIcon fontSize={10} className="text-zinc-500"/>
                <span className="text-sm">{Text}</span>
            </div>
        </div>
    )
}