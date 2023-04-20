/*
 * @Date: 2023-04-13 19:05:36
 */
import Vue from 'vue'
import 'element-ui/dist/index.css'
import { 
  Button,
  Form,
  FormItem,
  Card,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  breadcrumbItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Radio,
  DatePicker,
  Progress,
  MessageBox,
  Tree
   } from 'element-ui';
Vue.use(Form);
Vue.use(Button);
Vue.use(FormItem);
Vue.use(Card);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(breadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(DatePicker);
Vue.use(Progress);
Vue.use(Tree);
// Vue.use(MessageBox); // 这种引入会有bug，页面一刷新就会弹出该框
Vue.component(Message.name,Message)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;