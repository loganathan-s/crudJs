const parseDate = (date) => new Date(date).toString().split(' ').splice(1,3).join(' ');

//Named Export
export {parseDate};