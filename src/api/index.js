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
  regByEmail (email, pwd) {
    wilddog.auth().createUserWithEmailAndPassword('979741120@qq.com', '122514').then(function (user) {
      console.log(user)
    }).catch(function (error) {
      console.log(error)
    })
  },
  loginByEmail (email, pwd, success, error) {
    wilddog.auth().signInWithEmailAndPassword(email, pwd).then(function (res) {
      console.log(res)
      wilddog.auth().currentUser.updateProfile({
        displayName: '刘勇',
        photoURL: 'https://example.com/path/photo.jpg'
      }).then(function () {
        console.log('资料修改成功')
      }).catch(function (err) {
        console.log(err)
      })
    }).catch(function (err) {
      console.log(err)
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
