import {React, useState, useEffect} from 'react'
import './table.scss';
// import Checkbox from '@material-ui/core/Checkbox';
import Checkbox from '@mui/material/Checkbox';
// import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import CircleIcon from '@material-ui/icons/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import imgSrc from '../Assets/images/mcd.png';

const Deets = ({row}) => {


  const imgUrl = row.url;  
  return (
    <div className='order-container'>
        <Checkbox
        className='checkbox'
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CircleIcon />}
        />
        {imgUrl && <img src={imgUrl} alt="Image" />}
        <div className='name-container'>
          <span className='company'>{row.Company}</span>
          <span className='product'>{row.product}</span>
        </div>
    </div>
  )
}

export default Deets