import { dummyData } from "../../public/data"
import Card from "./card"

const CardSection = () => {
    return (
        <>
            <div className="bg-emerald-50 min-h-[400px] w-full">
                <div className="py-[50px] mx-auto w-10/12">
                    <div className="">
                        <p className="text-5xl mb-2 text-emerald-800">18% daily interest on all your savings</p>
                        <p className="mb-2 text-emerald-700 w-6/12">Earn more on your short-term savings with a high APY delivered through our partner banks.
                            Your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached.</p>

                        <div className="flex gap-x-4 py-4">
                            {
                                dummyData.cards.map((obj, idx) => (
                                    <a href="" key={idx}>
                                        <Card title={obj.title} content={obj.content} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardSection