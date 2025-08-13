export const formatDate = (stringDate:string) => {
  const dt = new Date(stringDate);

  if(isNaN(dt.getDate())) {
    return '-';
  }

  const min = dt.getMinutes() === 0 ? '00': dt.getMinutes()
  let dataFormatada = ((dt.getDate() )) + "/" + ((dt.getMonth() + 1)) + "/" + dt.getFullYear() + ' ' + dt.getHours() + ':' + min;
  return dataFormatada;
}
