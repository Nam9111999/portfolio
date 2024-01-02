import { useState } from 'react';
import './style.css'

function NavBtn() {

    const [isButtonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
      // Toggle the state when the button is clicked
      setButtonClicked(true);
      setTimeout(() => {
        setButtonClicked(false);
      }, 600);
    };

    let buttonClasses = 'nav-btn'; // Default class

    if (isButtonClicked) {
        buttonClasses += ' animate'; // Add class when the button is clicked
    }
    return (
        <a onClick={handleClick} href='#' className={buttonClasses}>
           Click me
        </a>
    )
}

export default NavBtn
