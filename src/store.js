import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,//使用该模式时，不能
  state:{
    //  公共数据池
    // 可以通过this.$store.state.name属性访问到该值
    // 也可以通过引入mapState来放入到computed中
    name: 'shanshan',
    height: 100,
    login: false,
    studentList: []
  },
  getters:{
    //对store的数据进行加工，相当于computed，
    // 如果多个组件需要使用到，提取到这里会简便很多
    //可以通过this.$store.getters.newStudent访问到该属性
    //可以传第二个参数，getters,可以使用getters上的方法
    newStudent (state){
      return state.studentList.map( (item, index) =>{
        if(index == 0){
          return '**' + item;
        }else if(index < 3){
          return item + '**';
        }else{
          return '++' + item + '++';
        }
      })
    }
  },
  mutations:{
    //严格模式下，需要改变store的值的话，需要在mutations下进行改变，第一个参数为state
    //第二个参数可以传值，多个的话写成对象的形式。
    changeStudent(state,{name,number}){
      state.studentList.push(name + number);
    }

  },
  actions:{
    //在异步的时候进行改变数据写这里
    //ctx代表store
    changeStudent(ctx,{name,number}){
      setTimeout(() => {
        ctx.commit('changeStudent',{name,number})
      }, 1000);
    }
  }
})
