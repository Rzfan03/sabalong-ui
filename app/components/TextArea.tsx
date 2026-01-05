export default function TextArea({Placeholder = "Type Something!"}: {Placeholder?: string}) {
    return(
        <div className="flex justify-center items-center w-full max-w-2xl">
            <textarea placeholder={Placeholder} autoFocus className=" focus:outline-blue-500 p-2 text-sm outline-2 transition-all outline-zinc-800 lg:w-6/12 rounded-lg border border-zinc-800 bg-zinc-900">

            </textarea>
        </div>
    )
}