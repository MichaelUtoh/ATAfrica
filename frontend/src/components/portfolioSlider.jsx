/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const PortfolioSlider = ({ portfolio }) => {
    const [sliderValues, setSliderValues] = useState({});

    // Fecth initial values on page load
    useEffect(() => {
        setSliderValues({
            nigerian_stocks: portfolio.nigerian_stocks,
            foreign_stocks: portfolio.foreign_stocks,
            tech_stocks: portfolio.tech_stocks,
            emerging_stocks: portfolio.emerging_stocks,
            nigerian_bonds: portfolio.nigerian_bonds,
            foreign_bonds: portfolio.foreign_bonds,
            commodities: portfolio.commodities,
            real_estate: portfolio.real_estate,
            t_bills: portfolio.t_bills,
            alternative: portfolio.alternative,
        });
    }, [portfolio]);

    return (
        <div className='w-full'>
            {Object.keys(sliderValues).map((field) => (
                sliderValues[field] !== 0 && (
                    <div key={field} className='flex items-center my-1'>
                        <div className='w-3/12'>
                            <p className='capitalize'>{field.replace(/_/g, ' ')}</p>
                        </div>

                        <div className='w-9/12'>
                            <div
                                className='p-2'
                                style={{
                                    width: `${sliderValues[field]}%`,
                                    backgroundColor: '#6ee7b7',
                                }}
                            >
                                <p className='text-emerald-900'>{sliderValues[field]}</p>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default PortfolioSlider;
