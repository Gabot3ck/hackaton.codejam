import moment from 'moment';



export const calculateDays = ( date ) => {

  let currentDate = moment().format('YYYY-MM-DD');

  let dateValue = date && moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');

  let result = moment(dateValue).diff(moment(currentDate),'days');

  return result;

}
