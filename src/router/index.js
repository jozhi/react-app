import Home from '../pages/home'
import List from '../pages/list'
import Form from '../pages/form'


//通过组件配置路由
const routes = [{
  path: '/home',
  main: Home
}, {
  path: '/list',
  main: List
}, {
  path: '/form',
  main: Form
}
];
export default routes