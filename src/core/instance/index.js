import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// qifa 这里定义的Vue的方法，必须new调用
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
/** qifa 给prototype上扩展方法 */

// qifa 主要定义Vue.prototype._init，再initMixin 里 给vm分配了uid，定义了实例属性 $root $refs等 最后$mount挂载到页面上
initMixin(Vue)

// qifa 主要定义 vm.$data $props实例属性，定义了 $watch $set $delete 实例方法/数据
stateMixin(Vue)

// qifa 主要定义了vm.$on, vm.$once $off $emit 等实例方法/事件
eventsMixin(Vue)

// qifa 定义了vm._update实例私有方法， 定义了vm.$forceUpdate $nextTick 实例方法/生命周期
lifecycleMixin(Vue)

// qifa 定义了vm._render实例私有方法， 定义了 $nextTick 实例方法
renderMixin(Vue)

export default Vue
