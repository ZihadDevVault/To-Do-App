export const formatCustomTime=(date)=> {
  const hours24 = date.getHours();
  const hours = hours24 % 12 || 12; 
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours24 >= 12 ? 'pm' : 'am';
  const year = date.getFullYear();

  return `${hours}.${minutes} ${ampm} ${year}`;
}

