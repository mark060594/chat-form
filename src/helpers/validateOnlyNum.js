
const validateOnlyNum = (phone) => {
  
    if(!/^[0-9]+$/.test(phone)){
      return false;
    } return true;
  
  }


export default validateOnlyNum;