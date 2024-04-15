export const formatCurrency = (value: any) => {
  return (
    '$' +
    parseFloat(value).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + (date.getHours() % 12) || 12).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${year}-${day}-${month} ${hours}:${minutes}${ampm}`;
};

export const creditCardDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${year}`;
};

export const formatCreditCardNumber = (cardNumber: number): string => {
  const cardNumberStr = cardNumber.toString();
  const formatted = cardNumberStr.replace(/(\d{4})/g, '$1 ');
  return formatted.trim();
};

export const formatMastercard = (cardNumber: number): string => {
  const cardNumberStr = cardNumber.toString();
  const lastFourDigits = cardNumberStr.slice(-4);
  const formatted = `Mastercard •••• ${lastFourDigits}`;

  return formatted;
};
