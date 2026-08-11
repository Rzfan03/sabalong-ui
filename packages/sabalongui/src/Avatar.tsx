export function Avatar({UrlImage, Height, Width, alt, className = ""}: {UrlImage: string, Height: number, Width: number, alt:string, className?: string}) {
    return(
        <div className={`w-15 h-15 rounded-full flex justify-center items-center ${className}`}>
            <img className="rounded-full object-cover w-full h-full" src={UrlImage} height={Height} width={Width} alt={alt}/>
        </div>
    )
}

export function AvatarOnlineIndicator({UrlImage, Height, Width, alt, className = ""}: {UrlImage: string, Height: number, Width: number, alt:string, className?: string}) {
    return(
        <div className={` w-15 h-15 rounded-full flex justify-center items-center ${className}`}>
            <img className="rounded-full object-cover w-full h-full border-3 border-green-400" src={UrlImage} height={Height} width={Width} alt={alt}/>
        </div>
    )
}

export function AvatarStr({Text, className = ""}: {Text: string, className?: string}) {
    return(
            <span className={`text-lg font-semibold w-15 h-15 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-700 inset-shadow-sm inset-shadow-zinc-600 flex justify-center items-center ${className}`}>{Text}</span>
    )
}