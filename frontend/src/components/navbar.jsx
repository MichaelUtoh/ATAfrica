const Navbar = () => {
    return (
        <>
            <header className="flex flex-col shadow-sm w-full">
                <div className="flex items-center justify-between mx-auto p-4 w-10/12">
                    <div className="">
                        <p className="font-bold text-2xl">ATAfrica</p>
                    </div>

                    <div className="flex">
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">cash</p>
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">stocks</p>
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">investing</p>
                    </div>

                    <div className="">
                        <button className="bg-emerald-400 capitalize hover:bg-emerald-300 font-medium mx-2 p-3 px-5 rounded-full text-emerald-900">login</button>
                        <button className="border-2 border-emerald-400 font-medium hover:border-emerald-300 hover:text-emerald-300 mx-2 p-3 px-5 rounded-full text-emerald-400">get started</button>
                    </div>
                </div>

                <hr className="border-[.75px] border-stone-700" />

                <div className="flex items-center justify-between mx-auto p-4 w-10/12">
                    <div className="flex">
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">transfer and mortgage</p>
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">credit management</p>
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">tax filing</p>
                        <p className="capitalize cursor-pointer hover:text-emerald-300 p-2 mx-2">account types</p>
                    </div>
                </div>
                <hr className="border-[.75px] border-stone-700" />
            </header>
        </>
    )
}

export default Navbar