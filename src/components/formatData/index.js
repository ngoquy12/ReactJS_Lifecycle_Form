/**
 * Format thời gian
 * @param {*} date chuỗi thời gian cần format
 * @returns chuỗi thời gian đã được format
 * Auhthor: NVQUY(18/07/2023)
 */
export const formatDate = (date) => {
  // Lấy ra thời gian hiện tại
  const today = new Date(date);

  // Lấy ra ngày
  let day = today.getDate();
  // Lấy ra tháng
  let month = today.getMonth() + 1;

  // Lấy ra năm
  let year = today.getFullYear();

  // Kết quả của chuỗi thời gian đã được format
  return `${day}/${month}/${year}`;
};
