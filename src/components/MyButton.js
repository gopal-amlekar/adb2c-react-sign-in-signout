import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const MyButton = ({ color, variant, text, onClick}) => {
    
    
    
    return (
        <Button variant="contained" variant = {variant} color={color} onClick={onClick}> {text}</Button>
    
    )}

    MyButton.defaultProps = {
    color: "inherit",
    text: 'Hello',
    variant: "text",
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default MyButton
