import Button from './packages/button'
import Table from './packages/table'
import Notice from './packages/notice'
import Switch from './packages/switch'
import Input from './packages/input'
import CheckBoxGroup from './packages/checkbox-group'
import CheckBox from './packages/checkbox'
import Radio from './packages/radio'
import RadioGroup from './packages/radio-group'
import InputNumber from './packages/input-number'
import Icon from './packages/icon'
import Message from './packages/message'
import Form from './packages/form'
import FormItem from './packages/form-item'
const components = [
  Icon,
  Button,
  Table,
  Switch,
  Input,
  CheckBox,
  CheckBoxGroup,
  Radio,
  RadioGroup,
  InputNumber,
  Message,
  Form,
  FormItem
]

const install = function(Vue) {
  if (install.installed) return
  // install.installed = true
  // components.map(component => Vue.component(component.name, component))
  components.map((component) => Vue.use(component))

  Vue.prototype.$notice = Notice
  // Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...components
}
