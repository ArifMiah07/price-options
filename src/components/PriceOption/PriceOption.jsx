import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
import { IoPricetagsSharp } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";




const PriceOption = ({option}) => {
    console.log(option)
    const {name, price, features} = option;
    return (
        <div className='flex flex-col gap-6 m-5 bg-green-300 p-6 rounded-2xl text-center'>
            <h2><span className='text-3xl font-black flex items-center gap-3'><IoPricetagsSharp />{price}</span></h2>
            {/* <span className='text-3xl'></span> */}
            <h4 className='text-2xl font-bold flex items-center justify-center gap-3'><MdCardMembership /> {name}</h4>
            <div className='font-semibold text-left flex-grow'>
                {
                    features.map((feature, idx)=> <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='flex items-center btn text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>Buy Now <FaMoneyCheckAlt className='text-2xl'></FaMoneyCheckAlt></button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;