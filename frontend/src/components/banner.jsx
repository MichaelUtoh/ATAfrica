const Banner = () => {
    return (
        <>
            <div className='flex items-center h-[60dvh] mx-auto my-3 w-10/12'>
                <div className='flex flex-col items-start p-4 wrap w-6/12'>
                    <p className='capitalize leading-[4.5rem] mb-4 text-[64px] text-emerald-300'>automated investment to grow your future.</p>
                    <p className="mb-[40px] text-stone-400 w-10/12">We&apos;ll help to build you a thriving, equally sophisticated automated investment portfolio to help you achieve your desired fiscal vision.</p>
                    <button className="bg-emerald-400 capitalize font-medium hover:bg-emerald-300 p-3 px-5 rounded-full text-emerald-900 w-[250px]">get started</button>
                </div>
                <div className='w-6/12'>
                    <img src='https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' height='700' width='100%' />
                </div>
            </div>
        </>
    )
}

export default Banner