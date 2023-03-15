import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { IconTextField } from '../TextField/TextFieldWithIcon';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { manipulateStatments } from '../../redux/ContactInfo/StatmentsAction';
import { useState } from 'react';
import { ADDSTATMENT, DASHBOARD, EDIT_OBJECT } from '../../redux/ContactInfo/Contact-Constants';
import { useEffect } from 'react';

const StatmentSlidInput = ({title,stateEditStatment,selected,newIndex}) => {

const data=useSelector(state=>state.StatementReducer.statments)


const dispatch=useDispatch()





const [statement,setStatement]=useState(selected.name)
const newid=new Date().getTime()


// console.log('sad', statement.name);
const obj={
  id:selected.id,
  name:statement
}
// console.log(statement);

  const handleAdd=()=>{
dispatch(manipulateStatments(EDIT_OBJECT,obj))
dispatch(manipulateStatments(DASHBOARD,selected))
  }
const handleChange=(e)=>{
  setStatement(e.target.value)
}
    return (
        
        <Box>
          
        
          <h4>{title}</h4>
        <Box
         
        sx={{
          // border: "1px solid #BCBCBC",
          p: 2,
          borderRadius: "10px",
          mt: 2,
          // width: width,
        }} >

        
        <IconTextField
        value={statement}
        name='stat'
        onChange={(e)=>handleChange(e)}
             color="neutral"
             size="small"
             placeholder="Statment"
             fullWidth
            >

            </IconTextField>

            
      </Box>
      <Box  display={'flex'} justifyContent={'center'}>
                <Button
                style={{backgroundColor:'#C8343A',width:'350px'}}
                onClick={handleAdd} >
                 Update </Button>
                {/* <Typography sx={{ color: "#C8343A" }} variant="span">Add</Typography> */}
            </Box>


      </Box>

    );
};

export default StatmentSlidInput;