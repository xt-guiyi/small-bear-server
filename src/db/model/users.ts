/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 14:39:25
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-29 14:55:26
 */
import mongoose from 'mongoose';

const { Schema, model} = mongoose;
// 用户表
const usersSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  userAvatar: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: -1,
    min: -1,
    max: 120
  },
  sex: {
    type: Number,
    default: 0
  },
  mobileNumber: {
    type: Number
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  createTime: {
    type: Date,
    default: Date.now
  },
})

export const Users =  model('users', usersSchema)

