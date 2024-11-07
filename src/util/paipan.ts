/**
 * @author szargv@wo.cn 在其基础上改造
 *
 * 此日历转换类完全源于以下项目,感谢这两个项目作者的无私分享:
 * https://github.com/nozomi199/qimen_star (八字排盘,JS源码)
 * http://www.bieyu.com/ (详尽的历法转换原理,JS源码)
 *
 * 我們現在所使用的以西元年月日表示的格里高利历(Gregorian calendar)
 * 儒略日历(Julian day),以西元前4713年(或-4712年)1月1日12時為起點,方便各历法间的转换
 */

import {DZ_12, JZ_60, Ten, TG, TG_10, WuXing5} from './wuxing';

/**
 * 均值朔望月長(mean length of synodic month)
 * @var float
 */
var synmonth = 29.530588853;
/**
 * 因子
 * @var array
 */
var ptsa = [
  485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16,
  14, 12, 12, 12, 9, 8,
];
var ptsb = [
  324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81,
  297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39,
  287.11, 320.81, 227.73, 15.45,
];
var ptsc = [
  1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934,
  3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956,
  4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756,
  34777.259, 1222.114, 16859.074,
];
/**
 * 计算指定年(公历)的春分点(vernal equinox),但因地球在繞日运行時會因受到其他星球之影響而產生攝動(perturbation),必須將此現象產生的偏移量加入.
 * @param int yy
 * @return boolean|number 返回儒略日历格林威治时间
 */
var VE = function (yy) {
  if (yy < -8000) {
    return false;
  }
  if (yy > 8001) {
    return false;
  }
  if (yy >= 1000 && yy <= 8001) {
    var m = (yy - 2000) / 1000;
    return (
      2451623.80984 +
      365242.37404 * m +
      0.05169 * m * m -
      0.00411 * m * m * m -
      0.00057 * m * m * m * m
    );
  }
  if (yy >= -8000 && yy < 1000) {
    var m = yy / 1000;
    return (
      1721139.29189 +
      365242.1374 * m +
      0.06134 * m * m +
      0.00111 * m * m * m -
      0.00071 * m * m * m * m
    );
  }
};
/**
 * 地球在繞日运行時會因受到其他星球之影響而產生攝動(perturbation)
 * @param float jd
 * @return number 返回某时刻(儒略日历)的攝動偏移量
 */
var Perturbation = function (jd) {
  var t = (jd - 2451545) / 36525;
  var s = 0;
  for (var k = 0; k <= 23; k++) {
    s =
      s +
      ptsa[k] *
        Math.cos(
          (ptsb[k] * 2 * Math.PI) / 360 + ((ptsc[k] * 2 * Math.PI) / 360) * t,
        );
  }
  var w = 35999.373 * t - 2.47;
  var l =
    1 +
    0.0334 * Math.cos((w * 2 * Math.PI) / 360) +
    0.0007 * Math.cos((2 * w * 2 * Math.PI) / 360);
  return (0.00001 * s) / l;
};
/**
 * 求∆t
 * @param int yy 年份
 * @param int mm 月份
 * @return number
 */
var DeltaT = function (yy, mm) {
  var u, t, dt;
  var y = yy + (mm - 0.5) / 12;

  if (y <= -500) {
    u = (y - 1820) / 100;
    dt = -20 + 32 * u * u;
  } else {
    if (y < 500) {
      u = y / 100;
      dt =
        10583.6 -
        1014.41 * u +
        33.78311 * u * u -
        5.952053 * u * u * u -
        0.1798452 * u * u * u * u +
        0.022174192 * u * u * u * u * u +
        0.0090316521 * u * u * u * u * u * u;
    } else {
      if (y < 1600) {
        u = (y - 1000) / 100;
        dt =
          1574.2 -
          556.01 * u +
          71.23472 * u * u +
          0.319781 * u * u * u -
          0.8503463 * u * u * u * u -
          0.005050998 * u * u * u * u * u +
          0.0083572073 * u * u * u * u * u * u;
      } else {
        if (y < 1700) {
          t = y - 1600;
          dt = 120 - 0.9808 * t - 0.01532 * t * t + (t * t * t) / 7129;
        } else {
          if (y < 1800) {
            t = y - 1700;
            dt =
              8.83 +
              0.1603 * t -
              0.0059285 * t * t +
              0.00013336 * t * t * t -
              (t * t * t * t) / 1174000;
          } else {
            if (y < 1860) {
              t = y - 1800;
              dt =
                13.72 -
                0.332447 * t +
                0.0068612 * t * t +
                0.0041116 * t * t * t -
                0.00037436 * t * t * t * t +
                0.0000121272 * t * t * t * t * t -
                0.0000001699 * t * t * t * t * t * t +
                0.000000000875 * t * t * t * t * t * t * t;
            } else {
              if (y < 1900) {
                t = y - 1860;
                dt =
                  7.62 +
                  0.5737 * t -
                  0.251754 * t * t +
                  0.01680668 * t * t * t -
                  0.0004473624 * t * t * t * t +
                  (t * t * t * t * t) / 233174;
              } else {
                if (y < 1920) {
                  t = y - 1900;
                  dt =
                    -2.79 +
                    1.494119 * t -
                    0.0598939 * t * t +
                    0.0061966 * t * t * t -
                    0.000197 * t * t * t * t;
                } else {
                  if (y < 1941) {
                    t = y - 1920;
                    dt =
                      21.2 +
                      0.84493 * t -
                      0.0761 * t * t +
                      0.0020936 * t * t * t;
                  } else {
                    if (y < 1961) {
                      t = y - 1950;
                      dt =
                        29.07 + 0.407 * t - (t * t) / 233 + (t * t * t) / 2547;
                    } else {
                      if (y < 1986) {
                        t = y - 1975;
                        dt =
                          45.45 + 1.067 * t - (t * t) / 260 - (t * t * t) / 718;
                      } else {
                        if (y < 2005) {
                          t = y - 2000;
                          dt =
                            63.86 +
                            0.3345 * t -
                            0.060374 * t * t +
                            0.0017275 * t * t * t +
                            0.000651814 * t * t * t * t +
                            0.00002373599 * t * t * t * t * t;
                        } else {
                          if (y < 2050) {
                            t = y - 2000;
                            dt = 62.92 + 0.32217 * t + 0.005589 * t * t;
                          } else {
                            if (y < 2150) {
                              u = (y - 1820) / 100;
                              dt = -20 + 32 * u * u - 0.5628 * (2150 - y);
                            } else {
                              u = (y - 1820) / 100;
                              dt = -20 + 32 * u * u;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (y < 1955 || y >= 2005) {
    dt = dt - 0.000012932 * (y - 1955) * (y - 1955);
  }
  return dt / 60; //將秒轉換為分
};
/**
 * 获取指定年的春分开始的24节气,另外多取2个确保覆盖完一个公历年
 * 大致原理是:先用此方法得到理论值,再用摄动值(Perturbation)和固定参数DeltaT做调整
 * @param int yy
 * @return boolean
 */
var MeanJQJD = function (yy) {
  var jd = VE(yy);
  if (!jd) {
    //该年的春分點
    return [];
  }
  var ty = VE(yy + 1) - jd; //该年的回歸年長

  var num = 24 + 2; //另外多取2个确保覆盖完一个公历年

  var ath = (2 * Math.PI) / 24;
  var tx = (jd - 2451545) / 365250;
  var e =
    0.0167086342 -
    0.0004203654 * tx -
    0.0000126734 * tx * tx +
    0.0000001444 * tx * tx * tx -
    0.0000000002 * tx * tx * tx * tx +
    0.0000000003 * tx * tx * tx * tx * tx;
  var tt = yy / 1000;
  var vp =
    111.25586939 -
    17.0119934518333 * tt -
    0.044091890166673 * tt * tt -
    4.37356166661345e-4 * tt * tt * tt +
    8.16716666602386e-6 * tt * tt * tt * tt;
  var rvp = (vp * 2 * Math.PI) / 360;
  var peri = [];
  for (var i = 0; i < num; i++) {
    var flag = 0;
    var th = ath * i + rvp;
    if (th > Math.PI && th <= 3 * Math.PI) {
      th = 2 * Math.PI - th;
      flag = 1;
    }
    if (th > 3 * Math.PI) {
      th = 4 * Math.PI - th;
      flag = 2;
    }
    var f1 = 2 * Math.atan(Math.sqrt((1 - e) / (1 + e)) * Math.tan(th / 2));
    var f2 = (e * Math.sqrt(1 - e * e) * Math.sin(th)) / (1 + e * Math.cos(th));
    var f = ((f1 - f2) * ty) / 2 / Math.PI;
    if (flag == 1) {
      f = ty - f;
    }
    if (flag == 2) {
      f = 2 * ty - f;
    }
    peri[i] = f;
  }
  var jqjd = [];
  for (var i = 0; i < num; i++) {
    jqjd[i] = jd + peri[i] - peri[0];
  }

  return jqjd;
};
/**
 * 获取指定年的春分开始作Perturbaton調整後的24节气,可以多取2个
 * @param int yy
 * @param int start 0-25
 * @param int end 0-25
 * @return array
 */
var GetAdjustedJQ = function (yy, start, end) {
  if (start < 0 || start > 25) {
    return [];
  }
  if (end < 0 || end > 25) {
    return [];
  }

  var jq = [];

  var jqjd = MeanJQJD(yy); //获取该年春分开始的24节气时间点
  for (var k in jqjd) {
    if (k < start) {
      continue;
    }
    if (k > end) {
      continue;
    }
    var ptb = Perturbation(jqjd[k]); //取得受perturbation影響所需微調
    var dt = DeltaT(yy, Math.floor((k + 1) / 2) + 3); //修正dynamical time to Universal time
    jq[k] = jqjd[k] + ptb - dt / 60 / 24; //加上攝動調整值ptb,減去對應的Delta T值(分鐘轉換為日)
    jq[k] = jq[k] + 1 / 3; //因中國時間比格林威治時間先行8小時,即1/3日
  }
  return jq;
};
/**
 * 求出以某年立春點開始的節(注意:为了方便计算起运数,此处第0位为上一年的小寒)
 * @param int yy
 * @return array jq[(2*k+21)%24]
 */
var GetPureJQsinceSpring = function (yy) {
  var jdpjq = [];

  var dj = GetAdjustedJQ(yy - 1, 19, 23); //求出含指定年立春開始之3個節氣JD值,以前一年的年值代入
  for (var k in dj) {
    if (k < 19) {
      continue;
    }
    if (k > 23) {
      continue;
    }
    if (k % 2 == 0) {
      continue;
    }
    jdpjq.push(dj[k]); //19小寒;20大寒;21立春;22雨水;23惊蛰
  }

  dj = GetAdjustedJQ(yy, 0, 25); //求出指定年節氣之JD值,從春分開始,到大寒,多取两个确保覆盖一个公历年,也方便计算起运数
  for (var k in dj) {
    if (k % 2 == 0) {
      continue;
    }
    jdpjq.push(dj[k]);
  }

  return jdpjq;
};
/**
 * 求出自冬至點為起點的連續15個中氣
 * @param int yy
 * @return array jq[(2*k+18)%24]
 */
var GetZQsinceWinterSolstice = function (yy) {
  var jdzq = [];

  var dj = GetAdjustedJQ(yy - 1, 18, 23); //求出指定年冬至開始之節氣JD值,以前一年的值代入
  jdzq[0] = dj[18]; //冬至
  jdzq[1] = dj[20]; //大寒
  jdzq[2] = dj[22]; //雨水

  var dj = GetAdjustedJQ(yy, 0, 23); //求出指定年節氣之JD值
  for (var k in dj) {
    if (k % 2 != 0) {
      continue;
    }
    jdzq.push(dj[k]);
  }

  return jdzq;
};
/**
 * 求出實際新月點
 * 以2000年初的第一個均值新月點為0點求出的均值新月點和其朔望月之序數 k 代入此副程式來求算實際新月點
 * @param unknown k
 * @return number
 */
var TrueNewMoon = function (k) {
  var jdt = 2451550.09765 + k * synmonth;
  var t = (jdt - 2451545) / 36525; //2451545為2000年1月1日正午12時的JD
  var t2 = t * t; //square for frequent use
  var t3 = t2 * t; //cube for frequent use
  var t4 = t3 * t; //to the fourth
  //mean time of phase
  var pt = jdt + 0.0001337 * t2 - 0.00000015 * t3 + 0.00000000073 * t4;
  //Sun's mean anomaly(地球繞太阳运行均值近點角)(從太阳觀察)
  var m = 2.5534 + 29.10535669 * k - 0.0000218 * t2 - 0.00000011 * t3;
  //Moon's mean anomaly(月球繞地球运行均值近點角)(從地球觀察)
  var mprime =
    201.5643 +
    385.81693528 * k +
    0.0107438 * t2 +
    0.00001239 * t3 -
    0.000000058 * t4;
  //Moon's argument of latitude(月球的緯度參數)
  var f =
    160.7108 +
    390.67050274 * k -
    0.0016341 * t2 -
    0.00000227 * t3 +
    0.000000011 * t4;
  //Longitude of the ascending node of the lunar orbit(月球繞日运行軌道升交點之經度)
  var omega = 124.7746 - 1.5637558 * k + 0.0020691 * t2 + 0.00000215 * t3;
  //乘式因子
  var es = 1 - 0.002516 * t - 0.0000074 * t2;
  //因perturbation造成的偏移：
  var apt1 = -0.4072 * Math.sin((Math.PI / 180) * mprime);
  apt1 += 0.17241 * es * Math.sin((Math.PI / 180) * m);
  apt1 += 0.01608 * Math.sin((Math.PI / 180) * 2 * mprime);
  apt1 += 0.01039 * Math.sin((Math.PI / 180) * 2 * f);
  apt1 += 0.00739 * es * Math.sin((Math.PI / 180) * (mprime - m));
  apt1 -= 0.00514 * es * Math.sin((Math.PI / 180) * (mprime + m));
  apt1 += 0.00208 * es * es * Math.sin((Math.PI / 180) * (2 * m));
  apt1 -= 0.00111 * Math.sin((Math.PI / 180) * (mprime - 2 * f));
  apt1 -= 0.00057 * Math.sin((Math.PI / 180) * (mprime + 2 * f));
  apt1 += 0.00056 * es * Math.sin((Math.PI / 180) * (2 * mprime + m));
  apt1 -= 0.00042 * Math.sin((Math.PI / 180) * 3 * mprime);
  apt1 += 0.00042 * es * Math.sin((Math.PI / 180) * (m + 2 * f));
  apt1 += 0.00038 * es * Math.sin((Math.PI / 180) * (m - 2 * f));
  apt1 -= 0.00024 * es * Math.sin((Math.PI / 180) * (2 * mprime - m));
  apt1 -= 0.00017 * Math.sin((Math.PI / 180) * omega);
  apt1 -= 0.00007 * Math.sin((Math.PI / 180) * (mprime + 2 * m));
  apt1 += 0.00004 * Math.sin((Math.PI / 180) * (2 * mprime - 2 * f));
  apt1 += 0.00004 * Math.sin((Math.PI / 180) * (3 * m));
  apt1 += 0.00003 * Math.sin((Math.PI / 180) * (mprime + m - 2 * f));
  apt1 += 0.00003 * Math.sin((Math.PI / 180) * (2 * mprime + 2 * f));
  apt1 -= 0.00003 * Math.sin((Math.PI / 180) * (mprime + m + 2 * f));
  apt1 += 0.00003 * Math.sin((Math.PI / 180) * (mprime - m + 2 * f));
  apt1 -= 0.00002 * Math.sin((Math.PI / 180) * (mprime - m - 2 * f));
  apt1 -= 0.00002 * Math.sin((Math.PI / 180) * (3 * mprime + m));
  apt1 += 0.00002 * Math.sin((Math.PI / 180) * (4 * mprime));

  var apt2 =
    0.000325 *
    Math.sin((Math.PI / 180) * (299.77 + 0.107408 * k - 0.009173 * t2));
  apt2 += 0.000165 * Math.sin((Math.PI / 180) * (251.88 + 0.016321 * k));
  apt2 += 0.000164 * Math.sin((Math.PI / 180) * (251.83 + 26.651886 * k));
  apt2 += 0.000126 * Math.sin((Math.PI / 180) * (349.42 + 36.412478 * k));
  apt2 += 0.00011 * Math.sin((Math.PI / 180) * (84.66 + 18.206239 * k));
  apt2 += 0.000062 * Math.sin((Math.PI / 180) * (141.74 + 53.303771 * k));
  apt2 += 0.00006 * Math.sin((Math.PI / 180) * (207.14 + 2.453732 * k));
  apt2 += 0.000056 * Math.sin((Math.PI / 180) * (154.84 + 7.30686 * k));
  apt2 += 0.000047 * Math.sin((Math.PI / 180) * (34.52 + 27.261239 * k));
  apt2 += 0.000042 * Math.sin((Math.PI / 180) * (207.19 + 0.121824 * k));
  apt2 += 0.00004 * Math.sin((Math.PI / 180) * (291.34 + 1.844379 * k));
  apt2 += 0.000037 * Math.sin((Math.PI / 180) * (161.72 + 24.198154 * k));
  apt2 += 0.000035 * Math.sin((Math.PI / 180) * (239.56 + 25.513099 * k));
  apt2 += 0.000023 * Math.sin((Math.PI / 180) * (331.55 + 3.592518 * k));
  return pt + apt1 + apt2;
};
/**
 * 對於指定日期時刻所屬的朔望月,求出其均值新月點的月序數
 * @param float jd
 * @return int
 */
var MeanNewMoon = function (jd) {
  //kn為從2000年1月6日14時20分36秒起至指定年月日之阴曆月數,以synodic month為單位
  var kn = Math.floor((jd - 2451550.09765) / synmonth); //2451550.09765為2000年1月6日14時20分36秒之JD值.
  var jdt = 2451550.09765 + kn * synmonth;
  //Time in Julian centuries from 2000 January 0.5.
  var t = (jdt - 2451545) / 36525; //以100年為單位,以2000年1月1日12時為0點
  var thejd =
    jdt +
    0.0001337 * t * t -
    0.00000015 * t * t * t +
    0.00000000073 * t * t * t * t;
  //2451550.09765為2000年1月6日14時20分36秒,此為2000年後的第一個均值新月
  return [kn, thejd];
};
/**
 * 将儒略日历时间转换为公历(格里高利历)时间
 * @param float jd
 * @return array(年,月,日,时,分,秒)
 */
var Julian2Solar = function (jd) {
  jd = Number(jd);

  if (jd >= 2299160.5) {
    //1582年10月15日,此日起是儒略日历,之前是儒略历
    var y4h = 146097;
    var init = 1721119.5;
  } else {
    var y4h = 146100;
    var init = 1721117.5;
  }
  var jdr = Math.floor(jd - init);
  var yh = y4h / 4;
  var cen = Math.floor((jdr + 0.75) / yh);
  var d = Math.floor(jdr + 0.75 - cen * yh);
  var ywl = 1461 / 4;
  var jy = Math.floor((d + 0.75) / ywl);
  d = Math.floor(d + 0.75 - ywl * jy + 1);
  var ml = 153 / 5;
  var mp = Math.floor((d - 0.5) / ml);
  d = Math.floor(d - 0.5 - 30.6 * mp + 1);
  var y = 100 * cen + jy;
  var m = ((mp + 2) % 12) + 1;
  if (m < 3) {
    y = y + 1;
  }
  var sd = Math.floor(
    (jd + 0.5 - Math.floor(jd + 0.5)) * 24 * 60 * 60 + 0.00005,
  );
  var mt = Math.floor(sd / 60);
  var ss = sd % 60;
  var hh = Math.floor(mt / 60);
  mt = mt % 60;
  var yy = Math.floor(y);
  var mm = Math.floor(m);
  var dd = Math.floor(d);

  return [yy, mm, dd, hh, mt, ss];
};
/**
 * 以比較日期法求算冬月及其餘各月名稱代碼,包含閏月,冬月為0,臘月為1,正月為2,餘類推.閏月多加0.5
 * @param int yy
 */
var GetZQandSMandLunarMonthCode = function (yy) {
  var mc = [];

  var jdzq = GetZQsinceWinterSolstice(yy); //取得以前一年冬至為起點之連續15個中氣
  var jdnm = GetSMsinceWinterSolstice(yy, jdzq[0]); //求出以含冬至中氣為阴曆11月(冬月)開始的連續16個朔望月的新月點
  var yz = 0; //設定旗標,0表示未遇到閏月,1表示已遇到閏月
  if (Math.floor(jdzq[12] + 0.5) >= Math.floor(jdnm[13] + 0.5)) {
    //若第13個中氣jdzq(12)大於或等於第14個新月jdnm(13)
    for (var i = 1; i <= 14; i++) {
      //表示此兩個冬至之間的11個中氣要放到12個朔望月中,
      //至少有一個朔望月不含中氣,第一個不含中氣的月即為閏月
      //若阴曆臘月起始日大於冬至中氣日,且阴曆正月起始日小於或等於大寒中氣日,則此月為閏月,其餘同理
      if (
        Math.floor(
          jdnm[i] + 0.5 > Math.floor(jdzq[i - 1 - yz] + 0.5) &&
            Math.floor(jdnm[i + 1] + 0.5) <= Math.floor(jdzq[i - yz] + 0.5),
        )
      ) {
        mc[i] = i - 0.5;
        yz = 1; //標示遇到閏月
      } else {
        mc[i] = i - yz; //遇到閏月開始,每個月號要減1
      }
    }
  } else {
    //否則表示兩個連續冬至之間只有11個整月,故無閏月
    for (var i = 0; i <= 12; i++) {
      //直接賦予這12個月月代碼
      mc[i] = i;
    }
    for (var i = 13; i <= 14; i++) {
      //處理次一置月年的11月與12月,亦有可能含閏月
      //若次一阴曆臘月起始日大於附近的冬至中氣日,且阴曆正月起始日小於或等於大寒中氣日,則此月為閏月,次一正月同理.
      if (
        Math.floor(
          jdnm[i] + 0.5 > Math.floor(jdzq[i - 1 - yz] + 0.5) &&
            Math.floor(jdnm[i + 1] + 0.5) <= Math.floor(jdzq[i - yz] + 0.5),
        )
      ) {
        mc[i] = i - 0.5;
        yz = 1; //標示遇到閏月
      } else {
        mc[i] = i - yz; //遇到閏月開始,每個月號要減1
      }
    }
  }
  return [jdzq, jdnm, mc];
};
/**
 * 求算以含冬至中氣為阴曆11月開始的連續16個朔望月
 * @param int yy 年份
 * @param float jdws 冬至的儒略日历时间
 * @return array
 */
var GetSMsinceWinterSolstice = function (yy, jdws) {
  var tjd = [];

  var jd = Solar2Julian(yy - 1, 11, 1, 0, 0, 0); //求年初前兩個月附近的新月點(即前一年的11月初)
  var nm = MeanNewMoon(jd); //求得自2000年1月起第kn個平均朔望日及其JD值
  var kn = nm[0];
  var thejd = nm[1];
  for (var i = 0; i <= 19; i++) {
    //求出連續20個朔望月
    var k = kn + i;
    var mjd = thejd + synmonth * i;
    tjd[i] = TrueNewMoon(k) + 1 / 3; //以k值代入求瞬時朔望日,因中國比格林威治先行8小時,加1/3天
    //下式為修正dynamical time to Universal time
    tjd[i] = tjd[i] - DeltaT(yy, i - 1) / 1440; //1為1月,0為前一年12月,-1為前一年11月(當i=0時,i-1=-1,代表前一年11月)
  }
  for (var j = 0; j <= 18; j++) {
    if (Math.floor(tjd[j] + 0.5) > Math.floor(jdws + 0.5)) {
      break;
    } //已超過冬至中氣(比較日期法)
  }

  var jdnm = [];
  for (var k = 0; k <= 15; k++) {
    //取上一步的索引值
    jdnm[k] = tjd[j - 1 + k]; //重排索引,使含冬至朔望月的索引為0
  }
  return jdnm;
};
/**
 * 將公历时间转换为儒略日历时间
 * @param int yy
 * @param int mm
 * @param int dd
 * @param int hh [0-23]
 * @param int mt [0-59]
 * @param int ss [0-59]
 * @return boolean|number
 */
var Solar2Julian = function (yy, mm, dd, hh = 0, mt = 0, ss = 0) {
  if (!ValidDate(yy, mm, dd)) {
    return false;
  }
  if (hh < 0 || hh >= 24) {
    return false;
  }
  if (mt < 0 || mt >= 60) {
    return false;
  }
  if (ss < 0 || ss >= 60) {
    return false;
  }

  var yp = yy + Math.floor((mm - 3) / 10);
  if (
    yy > 1582 ||
    (yy == 1582 && mm > 10) ||
    (yy == 1582 && mm == 10 && dd >= 15)
  ) {
    //这一年有十天是不存在的
    var init = 1721119.5;
    var jdy =
      Math.floor(yp * 365.25) - Math.floor(yp / 100) + Math.floor(yp / 400);
  }
  if (
    yy < 1582 ||
    (yy == 1582 && mm < 10) ||
    (yy == 1582 && mm == 10 && dd <= 4)
  ) {
    var init = 1721117.5;
    var jdy = Math.floor(yp * 365.25);
  }
  if (!init) {
    return false;
  }
  var mp = Math.floor(mm + 9) % 12;
  var jdm = mp * 30 + Math.floor(((mp + 1) * 34) / 57);
  var jdd = dd - 1;
  var jdh = (hh + (mt + ss / 60) / 60) / 24;
  return jdy + jdm + jdd + jdh + init;
};
/**
 * 判断公历日期是否有效
 * @param int yy
 * @param int mm
 * @param int dd
 * @return boolean
 */
var ValidDate = (this.ValidDate = function (yy, mm, dd) {
  if (yy < -1000 || yy > 3000) {
    //适用于西元-1000年至西元3000年,超出此范围误差较大
    return false;
  }

  if (mm < 1 || mm > 12) {
    //月份超出範圍
    return false;
  }

  if (yy == 1582 && mm == 10 && dd >= 5 && dd < 15) {
    //这段日期不存在.所以1582年10月只有20天
    return false;
  }

  var ndf1 = -(yy % 4 == 0); //可被四整除
  var ndf2 = (yy % 400 == 0) - (yy % 100 == 0) && yy > 1582;
  var ndf = ndf1 + ndf2;
  var dom = 30 + ((Math.abs(mm - 7.5) + 0.5) % 2) - (mm == 2) * (2 + ndf);
  if (dd <= 0 || dd > dom) {
    if (ndf == 0 && mm == 2 && dd == 29) {
      //此年無閏月
    } else {
      //日期超出範圍
    }
    return false;
  }

  return true;
});

class Paipan {
  constructor() {}
  /**
   * 是否区分 早晚子 时,true则23:00-24:00算成上一天
   * @var bool
   */
  zwz = false;
  /**
   * 十天干
   * @var array
   */
  ctg = [...TG_10]; // char of TianGan
  yang = [TG.甲, TG.丙, TG.戊, TG.庚, TG.壬];
  yin = [TG.乙, TG.丁, TG.己, TG.辛, TG.癸];
  // tenGodMap = { 2: '食神', 6: '七杀', 8: '偏印' } // TODO 为什么只有这几个的位置是固定的
  ctg2 = [
    '甲木',
    '乙木',
    '丙火',
    '丁火',
    '戊土',
    '己土',
    '庚金',
    '辛金',
    '壬水',
    '癸水',
  ]; // 全称

  /**
   * 五行
   */
  cwx = [...WuXing5]; //char of WuXing
  /**
   * 天干对应五行
   * @var array
   */
  tgwx = [1, 1, 3, 3, 4, 4, 0, 0, 2, 2];
  /**
   * 十二地支
   * @var array
   */
  cdz = [...DZ_12]; //char of DiZhi
  /**
   * 地支对应五行
   * @var array
   */
  dzwx = [2, 4, 1, 1, 4, 3, 3, 4, 0, 0, 4, 2];
  /**
   * 地支藏干
   * @var array
   */
  dzcg = [
    [9],
    [5, 9, 7],
    [0, 2, 4],
    [1],
    [4, 1, 9],
    [2, 4, 6],
    [3, 5],
    [5, 3, 1],
    [6, 8, 4],
    [7],
    [4, 7, 3],
    [8, 0],
  ];
  /**
   * 十二生肖
   * @var array
   */
  csa = [
    '鼠',
    '牛',
    '虎',
    '兔',
    '龙',
    '蛇',
    '马',
    '羊',
    '猴',
    '鸡',
    '狗',
    '猪',
  ]; //char of symbolic animals
  /**
   * 十二星座
   * @var array
   */
  cxz = [
    '水瓶座',
    '双鱼座',
    '白羊座',
    '金牛座',
    '双子座',
    '巨蟹座',
    '狮子座',
    '处女座',
    '天秤座',
    '天蝎座',
    '射手座',
    '摩羯座',
  ]; //char of XingZuo
  /**
   * 星期
   * @var array
   */
  wkd = ['日', '一', '二', '三', '四', '五', '六']; //week day
  /**
   * 廿四节气(从春分开始)
   * @var array
   */
  jq = [
    '春分',
    '清明',
    '谷雨',
    '立夏',
    '小满',
    '芒种',
    '夏至',
    '小暑',
    '大暑',
    '立秋',
    '处暑',
    '白露',
    '秋分',
    '寒露',
    '霜降',
    '立冬',
    '小雪',
    '大雪',
    '冬至',
    '小寒',
    '大寒',
    '立春',
    '雨水',
    '惊蛰',
  ]; // 24节气

  /**
   * 获取公历某个月有多少天
   * @param int yy
   * @param int mm
   * @return number
   */
  GetSolarDays(yy: number, mm: number) {
    if (yy < -1000 || yy > 3000) {
      //适用于西元-1000年至西元3000年,超出此范围误差较大
      return 0;
    }

    if (mm < 1 || mm > 12) {
      //月份超出範圍
      return 0;
    }
    var ndf1 = -(yy % 4 == 0); //可被四整除
    var ndf2 = (yy % 400 == 0) - (yy % 100 == 0) && yy > 1582;
    var ndf = ndf1 + ndf2;
    return 30 + ((Math.abs(mm - 7.5) + 0.5) % 2) - (mm == 2) * (2 + ndf);
  }
  /**
   * 获取农历某个月有多少天
   * @param int yy
   * @param int mm
   * @param bool isLeap
   * @return number
   */
  GetLunarDays(yy: number, mm: number, isLeap: boolean) {
    if (yy < -1000 || yy > 3000) {
      //适用于西元-1000年至西元3000年,超出此范围误差较大
      return 0;
    }
    if (mm < 1 || mm > 12) {
      //輸入月份必須在1-12月之內
      return 0;
    }
    var lm = GetZQandSMandLunarMonthCode(yy);
    var jdzq = lm[0];
    var jdnm = lm[1];
    var mc = lm[2];

    var leap = 0; //若閏月旗標為0代表無閏月
    for (var j = 1; j <= 14; j++) {
      //確認指定年前一年11月開始各月是否閏月
      if (mc[j] - Math.floor(mc[j]) > 0) {
        //若是,則將此閏月代碼放入閏月旗標內
        leap = Math.floor(mc[j] + 0.5); //leap=0對應阴曆11月,1對應阴曆12月,2對應阴曆隔年1月,依此類推.
        break;
      }
    }

    mm = mm + 2; //11月對應到1,12月對應到2,1月對應到3,2月對應到4,依此類推

    var nofd = [];
    for (var i = 0; i <= 14; i++) {
      //求算阴曆各月之大小,大月30天,小月29天
      nofd[i] = Math.floor(jdnm[i + 1] + 0.5) - Math.floor(jdnm[i] + 0.5); //每月天數,加0.5是因JD以正午起算
    }

    var dy = 0; //当月天数
    var er = 0; //若輸入值有錯誤,er值將被設定為非0

    if (isLeap) {
      //若是閏月
      if (leap < 3) {
        //而旗標非閏月或非本年閏月,則表示此年不含閏月.leap=0代表無閏月,=1代表閏月為前一年的11月,=2代表閏月為前一年的12月
        er = 1; //此年非閏年
      } else {
        //若本年內有閏月
        if (leap != mm) {
          //但不為輸入的月份
          er = 2; //則此輸入的月份非閏月,此月非閏月
        } else {
          //若輸入的月份即為閏月
          dy = nofd[mm];
        }
      }
    } else {
      //若沒有勾選閏月則
      if (leap == 0) {
        //若旗標非閏月,則表示此年不含閏月(包括前一年的11月起之月份)
        dy = nofd[mm - 1];
      } else {
        //若旗標為本年有閏月(包括前一年的11月起之月份) 公式nofd(mx - (mx > leap) - 1)的用意為:若指定月大於閏月,則索引用mx,否則索引用mx-1
        dy = nofd[mm + (mm > leap) - 1];
      }
    }
    return dy;
  }
  /**
   * 获取农历某年的闰月,0为无闰月
   * @param int yy
   * @return number
   */
  GetLeap(yy: number) {
    var lm = GetZQandSMandLunarMonthCode(yy);
    var jdzq = lm[0];
    var jdnm = lm[1];
    var mc = lm[2];

    var leap = 0; //若閏月旗標為0代表無閏月
    for (var j = 1; j <= 14; j++) {
      //確認指定年前一年11月開始各月是否閏月
      if (mc[j] - Math.floor(mc[j]) > 0) {
        //若是,則將此閏月代碼放入閏月旗標內
        leap = Math.floor(mc[j] + 0.5); //leap=0對應阴曆11月,1對應阴曆12月,2對應阴曆隔年1月,依此類推.
        break;
      }
    }
    return Math.max(0, leap - 2);
  }
  /**
   * 根据公历月日计算星座下标
   * @param int mm
   * @param int dd
   * @return int|false
   */
  GetZodiac(mm: number, dd: number) {
    if (mm < 1 || mm > 12) {
      return -1;
    }
    if (dd < 1 || dd > 31) {
      return -1;
    }

    var dds = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 22, 22]; //星座的起始日期

    var kn = mm - 1; //下标从0开始

    if (dd < dds[kn]) {
      //如果早于该星座起始日期,则往前一个
      kn = (kn + 12 - 1) % 12; //确保是正数
    }
    return kn;
  }
  /**
   * 计算公历的某天是星期几(PHP中的date方法,此处演示儒略日历的转换作用)
   * @param int yy
   * @param int mm
   * @param int dd
   */
  GetWeek(yy: number, mm: number, dd: number) {
    var jd = Solar2Julian(yy, mm, dd, 12);
    if (!jd) {
      //当天12点计算(因为儒略日历是中午12点为起始点)
      return false;
    }

    return ((Math.floor(jd + 1) % 7) + 7) % 7; //模數(或餘數)為0代表星期日(因为西元前4713年1月1日12時为星期一).jd加1是因起始日為星期一
  }
  /**
   * 将农历时间转换成公历时间
   * @param int yy
   * @param int mm
   * @param int dd
   * @param int isLeap 是否闰月
   * @return false/array(年,月,日)
   */
  Lunar2Solar(yy: number, mm: number, dd: number, isLeap: boolean) {
    if (yy < -7000 || yy > 7000) {
      //超出計算能力
      return false;
    }
    if (yy < -1000 || yy > 3000) {
      //适用于西元-1000年至西元3000年,超出此范围误差较大
      return false;
    }
    if (mm < 1 || mm > 12) {
      //輸入月份必須在1-12月之內
      return false;
    }
    if (dd < 1 || dd > 30) {
      //輸入日期必須在1-30日之內
      return false;
    }

    var lm = GetZQandSMandLunarMonthCode(yy);
    var jdzq = lm[0];
    var jdnm = lm[1];
    var mc = lm[2];

    var leap = 0; //若閏月旗標為0代表無閏月
    for (var j = 1; j <= 14; j++) {
      //確認指定年前一年11月開始各月是否閏月
      if (mc[j] - Math.floor(mc[j]) > 0) {
        //若是,則將此閏月代碼放入閏月旗標內
        leap = Math.floor(mc[j] + 0.5); //leap=0對應阴曆11月,1對應阴曆12月,2對應阴曆隔年1月,依此類推.
        break;
      }
    }

    mm = mm + 2; //11月對應到1,12月對應到2,1月對應到3,2月對應到4,依此類推

    var nofd = [];
    for (var i = 0; i <= 14; i++) {
      //求算阴曆各月之大小,大月30天,小月29天
      nofd[i] = Math.floor(jdnm[i + 1] + 0.5) - Math.floor(jdnm[i] + 0.5); //每月天數,加0.5是因JD以正午起算
    }

    var jd = 0; //儒略日历时间
    var er = 0; //若輸入值有錯誤,er值將被設定為非0

    if (isLeap) {
      //若是閏月
      if (leap < 3) {
        //而旗標非閏月或非本年閏月,則表示此年不含閏月.leap=0代表無閏月,=1代表閏月為前一年的11月,=2代表閏月為前一年的12月
        er = 1; //此年非閏年
      } else {
        //若本年內有閏月
        if (leap != mm) {
          //但不為輸入的月份
          er = 2; //則此輸入的月份非閏月,此月非閏月
        } else {
          //若輸入的月份即為閏月
          if (dd <= nofd[mm]) {
            //若輸入的日期不大於當月的天數
            jd = jdnm[mm] + dd - 1; //則將當月之前的JD值加上日期之前的天數
          } else {
            //日期超出範圍
            er = 3;
          }
        }
      }
    } else {
      //若沒有勾選閏月則
      if (leap == 0) {
        //若旗標非閏月,則表示此年不含閏月(包括前一年的11月起之月份)
        if (dd <= nofd[mm - 1]) {
          //若輸入的日期不大於當月的天數
          jd = jdnm[mm - 1] + dd - 1; //則將當月之前的JD值加上日期之前的天數
        } else {
          //日期超出範圍
          er = 4;
        }
      } else {
        //若旗標為本年有閏月(包括前一年的11月起之月份) 公式nofd(mx - (mx > leap) - 1)的用意為:若指定月大於閏月,則索引用mx,否則索引用mx-1
        if (dd <= nofd[mm + (mm > leap) - 1]) {
          //若輸入的日期不大於當月的天數
          jd = jdnm[mm + (mm > leap) - 1] + dd - 1; //則將當月之前的JD值加上日期之前的天數
        } else {
          //日期超出範圍
          er = 4;
        }
      }
    }

    return er ? false : Julian2Solar(jd).slice(0, 3);
  }
  /**
   * 将公历时间转换成农历时间
   * @param int yy
   * @param int mm
   * @param int dd
   * @return array(年,月,日,是否闰月)
   */
  Solar2Lunar(yy: number, mm: number, dd: number) {
    if (!ValidDate(yy, mm, dd)) {
      //驗證輸入日期的正確性
      return [];
    }

    var mi = 0;
    var prev = 0; //是否跨年了,跨年了则减一
    var isLeap = 0; //是否闰月

    var lm = GetZQandSMandLunarMonthCode(yy);
    var jdzq = lm[0];
    var jdnm = lm[1];
    var mc = lm[2];

    var jd = Solar2Julian(yy, mm, dd, 12, 0, 0); //求出指定年月日之JD值
    if (Math.floor(jd) < Math.floor(jdnm[0] + 0.5)) {
      prev = 1;
      lm = GetZQandSMandLunarMonthCode(yy - 1);
      jdzq = lm[0];
      jdnm = lm[1];
      mc = lm[2];
    }
    for (var i = 0; i <= 14; i++) {
      //指令中加0.5是為了改為從0時算起而不從正午算起
      if (
        Math.floor(jd) >= Math.floor(jdnm[i] + 0.5) &&
        Math.floor(jd) < Math.floor(jdnm[i + 1] + 0.5)
      ) {
        mi = i;
        break;
      }
    }

    if (mc[mi] < 2 || prev == 1) {
      //年
      yy = yy - 1;
    }

    if ((mc[mi] - Math.floor(mc[mi])) * 2 + 1 != 1) {
      //因mc(mi)=0對應到前一年阴曆11月,mc(mi)=1對應到前一年阴曆12月,mc(mi)=2對應到本年1月,依此類推
      isLeap = 1;
    }
    mm = (Math.floor(mc[mi] + 10) % 12) + 1; //月

    dd = Math.floor(jd) - Math.floor(jdnm[mi] + 0.5) + 1; //日,此處加1是因為每月初一從1開始而非從0開始

    return [yy, mm, dd, isLeap];
  }
  /**
   * 求出含某公历年立春點開始的24节气的儒略日历时间
   * @param int yy
   * @return array jq[(k+21)%24]
   */
  Get24JieQi(yy: number) {
    var jq = [];

    var dj = GetAdjustedJQ(yy - 1, 21, 23); //求出含指定年立春開始之3個節氣JD值,以前一年的年值代入
    for (var k in dj) {
      if (k < 21) {
        continue;
      }
      if (k > 23) {
        continue;
      }
      jq.push(Julian2Solar(dj[k])); //21立春;22雨水;23惊蛰
    }

    dj = GetAdjustedJQ(yy, 0, 20); //求出指定年節氣之JD值,從春分開始
    for (var k in dj) {
      jq.push(Julian2Solar(dj[k]));
    }

    return jq;
  }
  /**
   * 四柱計算,分早子时晚子时,传公历
   * @param int yy
   * @param int mm
   * @param int dd
   * @param int hh 时间(0-23)
   * @param int mt 分钟数(0-59),在跨节的时辰上会需要,有的排盘忽略了跨节
   * @param int ss 秒数(0-59)
   * @return array(天干, 地支, 对应的儒略日历时间, 对应年的12节+前后N节, 对应时间所处节的索引)
   */
  GetGanZhi(yy: number, mm: number, dd: number, hh: number, mt = 0, ss = 0) {
    var jd = Solar2Julian(yy, mm, dd, hh, mt, Math.max(1, ss));
    if (!jd) {
      //多加一秒避免精度问题
      return {tg: [], dz: [], jq: [], jd: 0, ix: 0};
    }

    var ix = 0;
    var tg = [];
    var dz = [];

    var jq = GetPureJQsinceSpring(yy); //取得自立春開始的节,该数组长度固定为16
    if (jd < jq[1]) {
      //jq[1]為立春,約在2月5日前後,
      yy = yy - 1; //若小於jq[1],則屬於前一個節氣年
      jq = GetPureJQsinceSpring(yy); //取得自立春開始的节
    }

    var ygz = (((yy + 4712 + 24) % 60) + 60) % 60;
    tg[0] = ygz % 10; //年干
    dz[0] = ygz % 12; //年支

    for (var j = 0; j <= 15; j++) {
      //比較求算節氣月,求出月干支
      if (jq[j] >= jd) {
        //已超過指定時刻,故應取前一個節氣
        ix = j - 1;
        break;
      }
    }

    var tmm = ((yy + 4712) * 12 + (ix - 1) + 60) % 60; //数组0为前一年的小寒所以这里再减一
    var mgz = (tmm + 50) % 60;
    tg[1] = mgz % 10; //月干
    dz[1] = mgz % 12; //月支

    var jda = jd + 0.5; //計算日柱之干支,加0.5是將起始點從正午改為從0點開始.
    var thes = (jda - Math.floor(jda)) * 86400 + 3600; //將jd的小數部份化為秒,並加上起始點前移的一小時(3600秒),取其整數值
    var dayjd = Math.floor(jda) + thes / 86400; //將秒數化為日數,加回到jd的整數部份
    var dgz = ((Math.floor(dayjd + 49) % 60) + 60) % 60;
    tg[2] = dgz % 10; //日干
    dz[2] = dgz % 12; //日支
    if (this.zwz && hh >= 23) {
      //区分早晚子时,日柱前移一柱
      tg[2] = (tg[2] + 10 - 1) % 10;
      dz[2] = (dz[2] + 12 - 1) % 12;
    }

    var dh = dayjd * 12; //計算時柱之干支
    var hgz = ((Math.floor(dh + 48) % 60) + 60) % 60;
    tg[3] = hgz % 10; //時干
    dz[3] = hgz % 12; //時支

    return {tg, dz, jd, jq, ix};
  }

  /**
   * 根据公历年月日排盘
   * @param int gd 0男1女
   * @param int yy
   * @param int mm
   * @param int dd
   * @param int hh 时间(0-23)
   * @param int mt 分钟数(0-59),在跨节的时辰上会需要,有的排盘忽略了跨节
   * @param int ss 秒数(0-59)
   * @return array
   */
  public GetInfo(gender: 0 | 1, date: number) {
    const dateObj = new Date(date);

    const [yy, mm, dd, hh, mt, ss] = [
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      dateObj.getDate(),
      dateObj.getHours(),
      dateObj.getMinutes(),
      dateObj.getSeconds(),
    ];

    const res: PaipanInfo = {
      gender,
      yy,
      mm,
      dd,
      hh,
      mt,
      ss,
      tg: [], // 天干
      dz: [], // 地支
      dzcg: [], // 地支藏干
      dzcg_text: [], // 地支藏干文字
      big: {
        big_tg: [], // 大运的天干
        big_dz: [], // 大运的地支
        start_desc: '',
        start_time: [],
        // xiaoyun: [],
        data: [],
      },
      bazi: [],
      xz: '',
      sx: '',
      yinli: [],
      yangli: [],
      tenMap: [],
    };
    const big_tg = [];
    const big_dz = []; // 大运
    const gd = gender === 0 ? 0 : 1; // 非男即女

    const {tg, dz, jd, jq, ix} = this.GetGanZhi(yy, mm, dd, hh, mt, ss);

    const pn = tg[0] % 2; // 起大运.阴阳年干:0阳年 1阴年

    let span;
    if ((gd === 0 && pn === 0) || (gd === 1 && pn === 1)) {
      // 起大运时间,阳男阴女顺排
      span = jq[ix + 1] - jd; // 往后数一个节,计算时间跨度

      for (var i = 1; i <= 12; i++) {
        // 大运干支
        big_tg.push((tg[1] + i) % 10);
        big_dz.push((dz[1] + i) % 12);
      }
    } else {
      // 阴男阳女逆排,往前数一个节
      span = jd - jq[ix];

      for (var i = 1; i <= 12; i++) {
        // 确保是正数
        big_tg.push((tg[1] + 20 - i) % 10);
        big_dz.push((dz[1] + 24 - i) % 12);
      }
    }

    const days = parseInt(String(span * 4 * 30), 10); // 折合成天数:三天折合一年,一天折合四个月,一个时辰折合十天,一个小时折合五天,反推得到一年按360天算,一个月按30天算
    const y = parseInt(String(days / 360), 10); // 三天折合一年
    const m = parseInt(String((days % 360) / 30), 10); // 一天折合四个月
    const day = parseInt(String((days % 360) % 30), 10); // 一个小时折合五天

    res.tg = tg;
    res.dz = dz;
    const {dzcg, dzcg_text} = this.getDzcgText(dz);
    res.dzcg = dzcg;
    res.dzcg_text = dzcg_text;
    res.yinli = this.Solar2Lunar(yy, mm, dd).slice(0, 3); // 阴历
    res.yangli = [yy, mm, dd, hh]; // 阳历

    // 大运
    res.big.big_tg = big_tg;
    res.big.big_dz = big_dz;
    res.big.start_desc = y + '年' + m + '月' + day + '天起运';
    const start_jdtime = jd + span * 120; // 三天折合一年,一天折合四个月,一个时辰折合十天,一个小时折合五天,反推得到一年按360天算
    res.big.start_time = Julian2Solar(start_jdtime); // 转换成公历形式,注意这里变成了数组

    for (var i = 0; i < 12; i++) {
      res.big.data.push({
        name: (this.ctg[big_tg[i]] + this.cdz[big_dz[i]]) as JZ_60,
        start_time: Julian2Solar(start_jdtime + i * 10 * 360),
        years: [],
      });
    }

    const years = [];
    const xiaoyun: {name: JZ_60; year: number}[] = [];
    let arr = [];
    for (let i = 0; i <= 120; i++) {
      const t = (tg[0] + i) % 10;
      const d = (dz[0] + i) % 12;
      const tgdz_text = (this.ctg[t] + this.cdz[d]) as JZ_60;
      const item = {name: tgdz_text, year: res.yinli[0] + i};

      if (res.yinli[0] + i < res.big.start_time[0]) {
        // 还没到起运年, 起小运
        xiaoyun.push(item);
        continue;
      }

      arr.push(item);
      // if (j % 10 === 0) {
      if (arr.length === 10) {
        years.push([...arr]);
        arr = [];
      }
    }
    // res.big.xiaoyun = xiaoyun;
    // console.log('years', years)
    years.forEach((year, index) => {
      res.big.data[index].years = year;
    });
    // console.log('xiaoyun', xiaoyun);
    // 小运
    res.big.data.unshift({name: '小运', start_time: [], years: xiaoyun});

    res.xz = this.cxz[this.GetZodiac(mm, dd)]; // 星座
    res.sx = this.csa[dz[0]]; // 生肖

    // 四柱
    for (var i = 0; i <= 3; i++) {
      res.bazi.push((this.ctg[tg[i]] + this.cdz[dz[i]]) as JZ_60);
    }

    // 十神对应关系表
    res.tenMap = this.getTenGodMap(res.bazi[2][0]);

    return res;
  }

  // 根据公历年获取流月流日
  public getLiuYueByYear(yy: number, tgdz: JZ_60) {
    const res: {
      name: JZ_60;
      year: number;
      mouth: number;
      day: number;
      days: {name: JZ_60; mouth: number; day: number}[];
      // days: JZ_60[];
    }[] = [];
    const days: number[][] = [];
    const rest_days: number[][] = [];
    GetPureJQsinceSpring(yy).forEach(i => {
      const [y, m, ddd, hhh, mtt, sss] = Julian2Solar(i);
      const r = this.GetGanZhi(y, m, ddd, hhh, mtt, sss + 1);
      // console.log('r', r.ix, Julian2Solar(r.jq[r.ix]))
      if (this.ctg[r.tg[0]] + this.cdz[r.dz[0]] === tgdz) {
        // console.log(
        //   'GetPureJQsinceSpring',
        //   y,m,ddd,
        //   r.tg.map((_, j) => this.ctg[r.tg[j]] + this.cdz[r.dz[j]]),
        // );
        res.push({
          name: (this.ctg[r.tg[1]] + this.cdz[r.dz[1]]) as JZ_60,
          year: y,
          mouth: m,
          day: ddd,
          days: [],
        });
        days.push([r.tg[2], r.dz[2]]);
      } else {
        rest_days.push([r.tg[2], r.dz[2]]);
      }
    });
    // console.log('days', days);
    const days_JZ_60: {name: JZ_60; mouth: number; day: number}[][] = [];
    // const days_JZ_60: JZ_60[][] = [];
    for (let i = 0; i < days.length; i++) {
      const start = days[i];
      let end = days[i + 1];
      if (!end) {
        // 最后一个月特殊处理
        end = rest_days[0];
      }
      days_JZ_60.push(this._getJZ60SByStartEnd(start, end));
    }

    const max_map: Record<number, number> = {
      1: 31,
      2: this.GetLeap(yy) ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    res.forEach((i, index) => {
      let day = i.day;
      let mouth = i.mouth;
      i.days = days_JZ_60[index].map((j, k) => {
        // console.log(j.name, i.day, k);
        if (k !== 0) {
          day++;
        }

        if (day > max_map[mouth]) {
          mouth++;
          day = 1;
        }

        j.mouth = mouth;
        j.day = day;

        return j;
      });
    });

    // console.log(
    //   'days_JZ_60',
    //   // days_JZ_60.map(i => i.map(j => j.name)),
    //   days_JZ_60,
    // );
    // console.log('getLiuYueByYear', JSON.stringify(res, null, 2));
    return res;
  }

  // 79 710 711, 80 81 - 811, - , 611, 70, 71, 72, 73
  private _getJZ60SByStartEnd(start: number[], end: number[]) {
    const res: {name: JZ_60; mouth: number; day: number}[] = [];
    // const res: JZ_60[] = [];
    const [startX, startY] = start;
    const [endX, endY] = end;
    let nowX = startX,
      nowY = startY;
    for (let i = 1; i <= 60; i++) {
      if (nowX === endX && nowY === endY) {
        break;
      } else {
        // res.push((TG_10[nowX] + DZ_12[nowY]) as JZ_60);
        res.push({
          name: (TG_10[nowX] + DZ_12[nowY]) as JZ_60,
          mouth: 0,
          day: 0,
        });
        ++nowX;
        ++nowY;
        if (nowY > 11) {
          nowY = 0;
        }
        if (nowX > 9) {
          nowX = 0;
        }
      }
    }
    return res;
  }

  // 获取地支藏干和文字
  public getDzcgText(target: any[]) {
    const dzcg = this.getDzcgByIndex(target);
    const dzcg_text = dzcg.map(arr => arr.map(j => this.ctg2[j]));
    return {dzcg, dzcg_text};
  }

  // 根据地支索引找到地支藏干
  private getDzcgByIndex(target: any[]) {
    const res: number[][] = [];
    target.forEach(item => {
      if (this.cdz[item]) {
        res.push(this.dzcg[item]);
      } else {
        res.push([]);
      }
    });
    return res;
  }

  // // 根据汉字找到地支具体藏干
  // getCanggan(target: string) {
  //   const index = this.cdz.findIndex(i => i === target);
  //   if (index === -1) {
  //     return [];
  //   }
  //   return target[index];
  // }

  // 找到日元的十神表
  private getTenGodMap(self: number | string = '') {
    // 拿到(可能会循环)的数组隔位的坐标
    function _getLoopIndex(targetIndex: number) {
      const max = 5;
      if (targetIndex >= max) {
        targetIndex = targetIndex - max;
      }
      return targetIndex;
    }

    // 参数处理
    if (!Number.isNaN(Number(self))) {
      self = this.ctg[Number(self)];
    }

    // yang = ['甲', '丙', '戊', '庚', '壬'];
    // yin  = ['乙', '丁', '己', '辛', '癸'];
    // 1 根据日元 定阴阳表
    const isYang = this.yang.some(i => i === self);
    const map = new Array(5);
    // 2 根据阴阳表 找 日元，偏印，食神，偏财，七杀
    const self_index = (isYang ? this.yang : this.yin).findIndex(
      i => i === self,
    );
    map[self_index] = Ten.比肩;
    map[_getLoopIndex(self_index + 1)] = Ten.食神;
    map[_getLoopIndex(self_index + 2)] = Ten.偏财;
    map[_getLoopIndex(self_index + 3)] = Ten.七杀;
    map[_getLoopIndex(self_index + 4)] = Ten.偏印;
    // console.log('map', isYang, map)
    // 3 对照另一张表 根据相同位置对应 劫财，正印，伤官，正财，正官
    const otherMap = new Array(5);
    map.forEach((i, index) => {
      switch (i) {
        case Ten.比肩:
          otherMap[index] = Ten.劫财;
          break;
        case Ten.食神:
          otherMap[index] = Ten.伤官;
          break;
        case Ten.偏财:
          otherMap[index] = Ten.正财;
          break;
        case Ten.七杀:
          otherMap[index] = Ten.正官;
          break;
        case Ten.偏印:
          otherMap[index] = Ten.正印;
          break;
        default:
          break;
      }
    });
    // 4 两个表拼接生成完整列表
    const res: Ten[] = [];
    map.forEach((_, index) => {
      if (isYang) {
        res.push(map[index]);
        res.push(otherMap[index]);
      } else {
        res.push(otherMap[index]);
        res.push(map[index]);
      }
    });
    return res;
  }
}

const paipan = new Paipan();

export default paipan;

export type PaipanInfo = {
  gender: 0 | 1; // 性别 0 男 1 女
  yy: number;
  mm: number;
  dd: number;
  hh: number;
  mt: number;
  ss: number;
  tg: any; // 天干
  dz: any; // 地支
  dzcg: number[][]; // 藏干索引
  dzcg_text: string[][]; // 藏干文字
  big: {
    big_tg: any[]; // 大运的天干
    big_dz: any[]; // 大运的地支
    start_desc: string; // 第几天起大运的文字描述
    start_time: any[]; // 大运开始时间的公历形式
    // xiaoyun: {name: string; year: number}[]; // 小运
    data: {
      name: JZ_60 | '小运'; // 天干地支
      start_time: number[]; // 开始时间
      years: {name: JZ_60; year: number}[]; // 每步大运中所有流年
    }[];
  };
  bazi: [JZ_60, JZ_60, JZ_60, JZ_60]; // 八字文字形式
  xz: string; // 星座
  sx: string; // 属相
  yinli: number[]; // 阴历
  yangli: (string | number)[]; // 阳历
  tenMap: Ten[]; // 十神关系对应表
};
