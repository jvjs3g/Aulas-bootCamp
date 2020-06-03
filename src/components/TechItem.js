import React from 'react';
import PropTypes from 'prop-types'; 
function TechItem({ techs, onDelete}){
  return (
    <li>
    {techs}
    <button onClick={onDelete}  type="button">Remover</button>
    </li>
  );
}


/*
techItem.defaultProps = {
  techs:'Oculto',
}

techItem.propTypes ={
  techs:PropTypes.string,
  onDelete:PropTypes.func.isRequired,
} 

*/
export default TechItem;