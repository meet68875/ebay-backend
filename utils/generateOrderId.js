// utils/generateOrderId.js
function generateOrderId() {
  const now = new Date();

  const pad = (num) => num.toString().padStart(2, '0');

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const randomNum = Math.floor(1000 + Math.random() * 9000);

  return `ORD-${year}${month}${day}-${hours}${minutes}${seconds}-${randomNum}`;
}

export default generateOrderId;
