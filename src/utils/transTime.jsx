function transTime(time) {
  let diffTime = new Date().getTime() - new Date(time).getTime();
  let sec = Math.floor(diffTime / 1000);
  let min = Math.floor(sec / 60);

  let hours = Math.floor(min / 60);
  let day = Math.floor(hours / 24);
  let month = Math.floor(day / 30);
  let year = Math.floor(day / 365);

  let result = year
    ? year + "年"
    : month
    ? month + "月"
    : day
    ? day + "天"
    : hours
    ? hours + "小时"
    : "刚刚";
  return result == "刚刚" ? result : result + "前";
}

export default transTime;
