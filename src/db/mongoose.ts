/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 12:24:08
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-29 16:06:36
 */
import mongoose from 'mongoose'
import  {url, mongooseOptions}  from '../config/db'

mongoose.connect(url, mongooseOptions)
const db = mongoose.connection

db.on('error',()=>{
  console.log('数据库连接失败')
})
db.on('open',()=>{
  console.log('数据库打开')
})
