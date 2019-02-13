#描述#/n

这是一个时间日期格式转换插件/n

#如何使用#/n

import dateformat from 'kungeek-dateformat';

dateformat((new Date()).getTime(),'^',':'); // 2019^02^13 15:43:30
dateformat((new Date()).getTime(),'-',':'); // 2019-02-13 15:43:30
dateformat((new Date()).getTime(),'-'); // 2019-02-13
dateformat((new Date()).getTime(),null,':'); // 15:44:11
