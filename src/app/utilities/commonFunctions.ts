export const formatCurrency = (value: any) => {
  return (
    '$' +
    parseFloat(value).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};
