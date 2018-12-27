import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,//使用严格模式
  state:{
    //  公共数据池
    // 可以通过this.$store.state.name属性访问到该值
    // 也可以通过引入mapState来放入到computed中
    name: 'shanshan',
    height: 100,
    login: false,
    studentList: [],
    width: 100,
    courseList: [
      {
          name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
          price: 9.9,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
      },
      {
          name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
          price: 68,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
      },
      {
          name: '淘宝商城项目实战开发【渡一教育】',
          price: 398,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
      },
      {
          name: '零基础WEB前端入门',
          price: 9.9,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
      },
      {
          name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
          price: 399,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
      },
      {
          name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
          price: 19,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
      },
      {
          name: '原生JS扫雷游戏实战开发【渡一教育】',
          price: 38,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
      },
      {
          name: '你不知道的Javascript【渡一教育】',
          price: 55,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
      }
    ],
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
    },
    changeCourse(state,{index,name,price}){
      state.courseList[index].name = name;
      state.courseList[index].price = price;
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
