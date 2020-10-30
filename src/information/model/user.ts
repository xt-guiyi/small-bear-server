/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 18:15:44
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-29 13:40:56
 */
import { ErrorInfoInterface } from './types'

export const userNameExistInfo:ErrorInfoInterface = {
  errno: 10001,
  message: '用户名已存在'
}

export const userNoRegister:ErrorInfoInterface = {
  errno: 10002,
  message: '用户未注册'
}

export const userAccountOrPasswordError:ErrorInfoInterface = {
  errno: 10003,
  message: '账号或密码错误'
}