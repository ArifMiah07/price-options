import PropTypes from 'prop-types'
import { FaClipboardCheck } from "react-icons/fa";
<FaClipboardCheck />
const Feature = ({feature}) => {
    return (
        <div >
            <p className='flex gap-2 items-center'><FaClipboardCheck className='text-xl font-bold'></FaClipboardCheck> {feature}</p>
        </div>
    );
};


Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;