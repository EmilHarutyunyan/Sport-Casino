export const formatDateMDY = (data) => {
  return new Date(`${data}`).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
