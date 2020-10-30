/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 16:16:00
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 10:45:51
 */
import { Users } from '../db/model/index'
import { Document } from 'mongoose'

export type NumberAndString = number | string
export interface QueryMedium {
  userName?: string;
  mobileNumber?: NumberAndString;
  email?: string;
  password?: NumberAndString;
}
/**
 * 获取用户信息
 * @param { string } userName 用户名
 * @param { number } mobileNumber 手机号
 * @param { number } email 邮箱
 * @param { number } password 密码
 * @description 两个参数任填一个即可
 */
export async function getUserInfo({ userName, mobileNumber, email, password}: QueryMedium ): Promise< Document | null | undefined> {
  // 查询数据
  let queryInstall
  const queryOpt:Record<string, any> = {}
  if(userName){
    queryOpt['userName'] = userName
  }
  if(mobileNumber){
    queryOpt['mobileNumber'] = mobileNumber
  }
  if(email){
    queryOpt['email'] = email
  }
  if(password){
    queryOpt['password'] = password
  }
  queryInstall = Users.findOne(queryOpt,{'_id':0, '__v': 0, 'password': 0})
  const queryResult = await queryInstall
  return queryResult
}

export const enum UserSex {
  Men,
  women
}

export interface CreateUser {
  userAvatar: string;
  defaultUserName: string;
  mobileNumber: NumberAndString;
  password: NumberAndString;
}
/**
 * 创建新用户
 * @param { number } mobileNumber 手机号
 * @param { number } password 密码
 */
export async function createUser(createOptions: CreateUser): Promise<Document> {
  const {userAvatar, defaultUserName, mobileNumber, password} = createOptions
  // 添加
  const UsersInstall = Users.create(
    { 
      'userAvatar': userAvatar,
      'userName': defaultUserName,
      'mobileNumber': mobileNumber,
      "password": password,
    })
  const insertResult = await UsersInstall
  return insertResult
}