import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
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

  },
  actions:{

  }
})
