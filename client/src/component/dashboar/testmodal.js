/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React,{useState} from 'react';
import { Button} from 'reactstrap';
import Modals from './Modal';
const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
  
    return(
        <div>
        <Button color="danger" onClick={toggle}>dfsfssfd</Button>
        <Modals
        isShowing={isShowing}
        toggle={toggle}
      />
        
      </div>
    )
  };
  
  export default useModal;
