/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-29 10:12:06
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 11:10:30
 */
import { StartName, userAvatar } from '../config/user'
import { CreateUser,NumberAndString } from '../services/users'
import { passwordCrypto } from './crypto';
/**
 * 格式化用户信息 
 * @param mobileNumber 手机号
 * @param password 密码
 */
export  function userInfoFormat(mobileNumber: NumberAndString, password: NumberAndString): CreateUser {
  // 取一个默认名字 
  const MobileNumberBuffer = Buffer.from(mobileNumber + '')
  const MobileNumberBase62 = MobileNumberBuffer.toString('base64').slice(-8, -1)
  const defaultUserName = StartName +'_'+ MobileNumberBase62
  //处理密码
  password = passwordCrypto(password)
  return {
    userAvatar,
    defaultUserName,
    mobileNumber,
    password,
  }

  
}