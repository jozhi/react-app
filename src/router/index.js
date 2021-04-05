// import App from '../../router'
import List from '../pages/list'
import Form from '../pages/form'




//通过组件配置路由
const routes = [{
  path: '/list',
  main: List
}, {
  path: '/form',
  main: Form
}
];
export default routes