/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-29 14:07:07
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 10:40:55
 */
import crypto from 'crypto';
import { userPasswordKey } from '../config/crypto'
import { NumberAndString } from '../services/users'


function ToCrypto(cryptoContent: string, cryptoType: string, key: string) {
  const hmac = crypto.createHmac(cryptoType, key)
  hmac.update(cryptoContent);
  return hmac.digest('hex')
}
/**
 * md5加密
 * @param password 密码
 */
export function passwordCrypto (password: NumberAndString): string{
  return ToCrypto(password+'', 'md5', userPasswordKey)
}