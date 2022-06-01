export const formatCurrency = (value) => {
  value = String(value);
  if (value.includes("$")) return value;
  let dollarUSLocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return dollarUSLocale.format(value);
};
export const unformatCurrency = (value) => {
  value = String(value);
  value = value.replace(",", "");
  value = value.replace(",", "");
  value = value.replace(",", "");
  value = value.replace("$", "");
  return value;
};
