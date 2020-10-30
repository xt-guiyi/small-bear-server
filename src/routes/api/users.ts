/*
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-28 11:03:18
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-29 16:38:45
 */
import Router from '@koa/router'
import { register ,login} from "../../controller/users";
export const router = new Router({
  prefix: '/api/users',
  strict: true
})

// 用户注册接口
router.post('/register', async (ctx)=>{
  const { mobileNumber, password } = ctx.request.body;
  if(mobileNumber === undefined 
      || password === undefined 
      || /[A-Za-z]/.test(mobileNumber) 
    ){
      ctx.throw(401, '客户端语法错误');
    }
  ctx.body = await register(mobileNumber, password);
})


// 用户登录接口
router.post('/login', async (ctx)=>{
  const { mobileNumber, email, password} = ctx.request.body
  ctx.body = await login(mobileNumber, email, password);
})
