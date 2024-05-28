// 判断字符串是否包含Unicode字符
export const hasUnicode = (str: string) => {
  const unicodeRegexp = /\\u\{([0-9a-fA-F]+)\}/;
  return unicodeRegexp.test(str);
};

// 将字符串中Unicode字符转回原样
export const unicodeToEmoji = (str: string) => {
  return str.replace(/\\u\{([0-9a-fA-F]+)\}/g, (match, p1) =>
    String.fromCodePoint(parseInt(p1, 16))
  );
};

// 格式化时间
// 使用例子：
// const date = new Date();
// const formattedDate = formatDate(date, 'yyyy-MM-dd HH:mm:ss');
// console.log(formattedDate);
export const formatDate = (date: any, format: string) => {
  if (!date) return;
  if (!format) format = 'yyyy-MM-dd';
  switch (typeof date) {
    case 'string':
      date = new Date(date);
      break;
    case 'number':
      date = new Date(date);
      break;
  }
  if (!(date instanceof Date)) return;
  const dict: any = {
    yyyy: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    MM: ('' + (date.getMonth() + 101)).substr(1),
    dd: ('' + (date.getDate() + 100)).substr(1),
    HH: ('' + (date.getHours() + 100)).substr(1),
    mm: ('' + (date.getMinutes() + 100)).substr(1),
    ss: ('' + (date.getSeconds() + 100)).substr(1),
  };
  return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
    return dict[arguments[0]];
  });
};
