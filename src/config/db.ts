/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 13:57:54
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-29 16:06:20
 */
import { ConnectionOptions } from 'mongoose'

export const url = 'mongodb://127.0.0.1:27017'

export const  mongooseOptions: ConnectionOptions ={
  useNewUrlParser:true,
  useUnifiedTopology:true,
  keepAlive:true,
  keepAliveInitialDelay: 300000,
  dbName:'small_bear',
  user: 'admin',
  pass: '200145',
  useCreateIndex:true,
}