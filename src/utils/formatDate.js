
const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = String(date.getFullYear()).slice(-2);

    return `${day}-${month}-${year}`;
};

export default formatDate;