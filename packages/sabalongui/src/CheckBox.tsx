export function CheckBox({Text}: {Text:string}) {
    return(
        <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" className="w-4 rounded-lg h-4" />
            <p>{Text}</p>
        </div>
    )
}