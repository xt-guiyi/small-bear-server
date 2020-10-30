/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 15:33:32
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 10:43:59
 */
import { getUserInfo, createUser, NumberAndString} from '../services/users';
import { ErrorModel, SuccessModel, } from '../information/constructor';
import { userNameExistInfo, userNoRegister, userAccountOrPasswordError } from "../information/model/user";
import { userInfoFormat } from '../utils/format'
import { passwordCrypto } from "../utils/crypto";
/**
 * 注册业务逻辑
 * @param { number } mobileNumber 手机号
 * @param { number } password 密码
 */
export async function register(mobileNumber: NumberAndString, password: NumberAndString):Promise<any> {
  // 检查用户是否已经存在
  const userInfo = await getUserInfo({ mobileNumber });
  if(userInfo) {
    return new ErrorModel(userNameExistInfo)
  }
  // 格式化
  const defaultUser =  userInfoFormat(mobileNumber, password)
  // 创建新用户
  try {
    const createInfo = await createUser(defaultUser) 
    if(createInfo) {
      return new SuccessModel()
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * 登录业务逻辑
 * @param mobileNumber 手机号
 * @param email 邮箱
 * @param password 密码
 */
export async function login(mobileNumber: NumberAndString, email: string, password: NumberAndString):Promise<any> {
  password =  passwordCrypto(password)
  const userInfo = await getUserInfo({ mobileNumber, email, password });
  if(userInfo) {
    console.log(userInfo)
    return new SuccessModel(undefined, 200, userInfo as Record<string, any>)
  }else {
    const userInfo = await getUserInfo({ mobileNumber });
    if(userInfo) {
      return new ErrorModel(userAccountOrPasswordError)
    }
    return new ErrorModel(userNoRegister)
  }
  console.log(userInfo)
}