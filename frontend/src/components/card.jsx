/* eslint-disable react/prop-types */
const Card = ({ title, content }) => {
    return (
        <>
            <div className='bg-emerald-900 px-6 py-10 rounded-md'>
                <p className="font-medium mb-2 text-emerald-50 text-3xl">{title}</p>
                <p className="font-[300] text-emerald-50">{content}</p>
            </div>
        </>
    )
}

export default Card