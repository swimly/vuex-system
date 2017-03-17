import axios from 'axios'
import * as wilddog from 'wilddog'
let config = {
  syncURL: 'https://lcdc.wilddogio.com/',
  authDomain: 'lcdc.wilddog.com'
}
wilddog.initializeApp(config)
let ref = wilddog.sync().ref()
export default {
  addUser () {
    console.log(0)
  },
  regByEmail (email, pwd, This) {
    wilddog.auth().createUserWithEmailAndPassword(email, pwd).then(function (user) {
      console.log(user)
    }).catch(function (err) {
      switch (err.code) {
        case 22203 :
          console.log('邮箱已被注册！')
          break
      }
    })
  },
  loginByEmail (email, pwd, This) {
    This.$refs.topProgress.start()
    wilddog.auth().signInWithEmailAndPassword(email, pwd).then(function (res) {
      This.$refs.topProgress.done()
      setTimeout(function () {
        This.$router.push('/home')
      }, 500)
    }).catch(function (err) {
      console.log(err.code, err)
      switch (err.code) {
        case 22220 :
          This.$refs.topProgress.fail()
          This.$toasted.error('不存在该用户！')
          console.log('不存在该用户！')
          break
        case 22009 :
          This.$refs.topProgress.fail()
          This.$toasted.error('邮箱有误！')
          console.log('邮箱有误！')
          break
        case 22010 :
          This.$refs.topProgress.fail()
          This.$toasted.error('密码有误！')
          console.log('密码有误！')
          break
      }
    })
  },
  testLink () {
    axios.get('https://api.github.com/').then(function (res) {
      console.log(res)
    })
    let admin = ref.child('admin')
    admin.push({
      'username': 'admin',
      'password': 'admin'
    })
  }
}
