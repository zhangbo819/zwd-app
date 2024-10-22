const fs = require('fs');
const path = require('path');

const buildGradlePath = path.join(__dirname, 'android', 'app', 'build.gradle');

// 读取 build.gradle 文件
fs.readFile(buildGradlePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取 build.gradle 文件失败:', err);
    return;
  }

  // 正则匹配 versionCode 和 versionName
  const versionCodeRegex = /versionCode (\d+)/;
  const versionNameRegex = /versionName "([^"]+)"/;

  // 获取新的 versionCode
  const newVersionCode = (
    data.match(versionCodeRegex)
      ? parseInt(data.match(versionCodeRegex)[1]) + 1
      : 1
  ).toString();

  // 更新 versionName（可以根据需要自定义更新规则）
  const oldVersionName = data.match(versionNameRegex)
    ? `${data.match(versionNameRegex)[1]}`
    : '1.0.0';
  console.log('oldVersionName', oldVersionName);

  const newVersionName = oldVersionName
    .split('.')
    .map((i, index, data) => {
      if (index === data.length - 1) {
        return Number(i) + 1;
      }
      return i;
    })
    .join('.');

  // 替换 versionCode 和 versionName
  const updatedData = data
    .replace(versionCodeRegex, `versionCode ${newVersionCode}`)
    .replace(versionNameRegex, `versionName "${newVersionName}"`);

  // 写入新的 build.gradle 文件
  fs.writeFile(buildGradlePath, updatedData, 'utf8', err => {
    if (err) {
      console.error('写入 build.gradle 文件失败:', err);
      return;
    }
    console.log(
      `版本号更新成功: versionCode = ${newVersionCode}, versionName = "${newVersionName}"`,
    );
  });
});
