import React from 'react';
import '../../components/interactive/Arrow/Arrow.css'
import { AiFillCaretDown} from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';


const CollapsibleTrigger = ({ text, page }) => {
  return (
    <div className='conteiner'>
      <div> 
        {page === 'Equipe' && <MdKeyboardArrowDown className='collapsible-arrow'/>}
        {page === 'FAQ' && <AiFillCaretDown />}
       </div>
      
    <div  className='CollapsibleTriggerContainer'>
        <span className='spanText'>{text}</span>
    </div>
    
    </div>
  );
};

export default CollapsibleTrigger;