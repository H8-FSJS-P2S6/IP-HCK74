export default function timeAgo(dateString) {
  const postDate = new Date(dateString);
  const currentDate = new Date();
  const diffInSeconds = Math.floor((currentDate - postDate) / 1000);

  const units = [
    { name: "year", seconds: 31536000 }, // 365 * 24 * 60 * 60
    { name: "month", seconds: 2592000 }, // 30 * 24 * 60 * 60
    { name: "day", seconds: 86400 }, // 24 * 60 * 60
    { name: "hour", seconds: 3600 }, // 60 * 60
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (let unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval !== 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}
