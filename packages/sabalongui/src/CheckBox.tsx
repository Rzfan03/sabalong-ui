export function CheckBox({Text, className = ""}: {Text:string, className?: string}) {
    return(
        <div className={`flex items-center gap-2 ${className}`}>
            <input type="checkbox" name="" id="" className="w-4 rounded-lg h-4" />
            <p>{Text}</p>
        </div>
    )
}