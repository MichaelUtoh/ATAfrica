import { dummyData } from "../../public/data"


const Footer = () => {
    return (
        <>
            <div className="bg-emerald-50 min-h-[400px] w-full">
                <div className="py-[50px] mx-auto w-10/12">
                    <div className="flex items-start">
                        <div className="mb-2 text-emerald-800 w-4/12">
                            <p className="font-bold text-2xl">ATAfrica</p>
                        </div>

                        <div className="m-2 mx-4 p-2 text-emerald-800">
                            <p className="font-bold text-lg">About us</p>
                            {
                                dummyData.footerLinks.map((obj, idx) => (
                                    obj.category === 'About us' && <p className="text-lg" key={idx}>{obj.title}</p>
                                ))
                            }
                        </div>

                        <div className="m-2 mx-4 p-2 text-emerald-800">
                            <p className="font-bold text-lg">Investing</p>
                            {
                                dummyData.footerLinks.map((obj, idx) => (
                                    obj.category === 'Investing' && <p className="text-lg" key={idx}>{obj.title}</p>
                                ))
                            }
                        </div>

                        <div className="m-2 mx-4 p-2 text-emerald-800">
                            <p className="font-bold text-lg">Products</p>
                            {
                                dummyData.footerLinks.map((obj, idx) => (
                                    obj.category === 'Products' && <p className="text-lg" key={idx}>{obj.title}</p>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer