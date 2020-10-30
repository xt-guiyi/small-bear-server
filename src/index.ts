/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-27 19:12:32
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 10:13:54
 */
import Koa from 'koa';
import Logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import cors from "@koa/cors";
import  { usersApiRouter }  from './routes/api/index' 
import './db/mongoose'
const app = new Koa()
app.use(Logger())
app.use(bodyParser())
app.use(cors())


//注册路由
app.use(usersApiRouter.routes()).use(usersApiRouter.allowedMethods())
app.listen(3000,()=>{
  console.log('服务启动成功: http://localhost:3000')
});
