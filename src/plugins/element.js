import Vue from "vue";
import {
  Button,
  Carousel,
  CarouselItem,
  Pagination,
  InputNumber,
  Message,
  MessageBox,
} from "element-ui";

Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);
Vue.use(InputNumber);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
