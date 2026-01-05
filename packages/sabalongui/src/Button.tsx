import Link from "next/link"

export function ButtonDark({title, href}: {title: string, href: string}) {
    return(
    <div className="bg-zinc-900 flex no-underline inset-shadow-sm inset-shadow-zinc-800 border w-fit py-2 px-4 rounded-lg text-sm border-zinc-700 text-zinc-200">
        <Link href={href} className="text-zinc-200 no-underline">{title}</Link>
    </div>

    )
}


export function ButtonLight({title, href}: {title: string, href: string}) {
    return(
    <div className="bg-zinc-200 border no-underline w-fit py-2 px-4 rounded-lg text-sm border-zinc-100 text-zinc-600">
        <Link href={href} className="text-zinc-600 no-underline">{title}</Link>
    </div>

    )
}