import { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioSlider from './portfolioSlider';


const PortfolioCard = () => {
    const [portfolioData, setPortfolioData] = useState([])
    const [tolerance, setTolerance] = useState(0);

    const handleSliderChange = (e) => {
        setTolerance(parseInt(e.target.value, 10));
    };

    const handlePortfolioData = async () => {
        await axios.get('https://at-africa-backend.onrender.com/portfolios', {
            withCredentials: false
        })
            .then((res) => {
                console.log(res);
                setPortfolioData(res.data.portfolios);
            }).catch((err) => {
                console.error(err);
            })
    }
    useEffect(() => {
        handlePortfolioData()
    }, [])

    const matchingPortfolio = portfolioData.find((portfolio) => portfolio.risk_score === tolerance);

    return (
        <>
            <div className='flex items-center mx-auto w-10/12'>
                <div className='h-[450px] my-[40px] w-6/12'>
                    <p className='font-bold text-xl'>Sample Portfolio</p>
                    <div className='p-2'>
                        <input
                            type="range"
                            min="0"
                            max="9"
                            step="1"
                            value={tolerance}
                            onChange={handleSliderChange}
                            className="w-6/12 text-secondary range range-xs"
                        />

                        <p className='text-sm'>{tolerance}</p>
                    </div>

                    {matchingPortfolio && <PortfolioSlider portfolio={matchingPortfolio} />}
                </div>

                <div className='flex flex-col items-start p-4 wrap w-6/12'>
                    <p className='leading-[4.5rem] mb-4 text-[48px] text-emerald-300'>Personal investment with an automated touch.</p>
                    <p className="mb-[40px] text-stone-400 w-10/12">Just answer a few questions, and we’ll build you
                        a personalized portfolio of low-cost index funds from up to 17 global
                        asset classes. Our software handles all the trading, rebalancing, and
                        other busywork to help grow your wealth for the long term.</p>
                    <button className="bg-emerald-400 capitalize font-bold hover:bg-emerald-300 p-3 px-5 rounded-full text-emerald-900 w-[250px]">get started</button>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard