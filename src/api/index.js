import * as wilddog from 'wilddog'
let config = {
  syncURL: 'https://lcdc.wilddogio.com/',
  authDomain: 'lcdc.wilddog.com'
}
let service = 'http://localhost/vuex-system/app/'
wilddog.initializeApp(config)
let ref = wilddog.sync().ref()
export default {
  // 邮箱注册
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
  // 邮箱登录
  loginByEmail (email, pwd, This) {
    This.$refs.topProgress.start()
    wilddog.auth().signInWithEmailAndPassword(email, pwd).then(function (res) {
      This.$store.dispatch('setAuth', JSON.parse(This.$localStorage.get('wilddog:session::lcdc:DEFAULT')).currentUser)
      This.$refs.topProgress.done()
      setTimeout(function () {
        This.$router.push('/home')
      }, 500)
    }).catch(function (err) {
      switch (err.code) {
        case 22220 :
          This.$refs.topProgress.fail()
          This.$toasted.error('不存在该用户！', {
            position: 'top-center'
          })
          break
        case 22009 :
          This.$refs.topProgress.fail()
          This.$toasted.error('邮箱有误！', {
            position: 'top-center'
          })
          break
        case 22010 :
          This.$refs.topProgress.fail()
          This.$toasted.error('密码有误！', {
            position: 'top-center'
          })
          break
      }
    })
  },
  // 退出登录
  logout (This) {
    wilddog.auth().signOut().then(function () {
      console.log('成功退出登录')
      This.$toasted.show('成功退出登录！', {
        position: 'top-center'
      })
      This.$localStorage.set('login', null)
      This.$router.push('/login')
    }).catch(function (err) {
      console.log(err)
    })
  },
  // 设置头像
  setFace (This, path) {
    This.$refs.topProgress.start()
    wilddog.auth().onAuthStateChanged(function (user) {
      if (user != null) {
        user.updateProfile({
          photoURL: service + path
        }).then(function () {
          console.log('头像更改成功')
          This.$toasted.show('头像修改成功！', {
            position: 'top-right'
          })
          This.$refs.topProgress.done()
        }).catch(function () {
          This.$refs.topProgress.fail()
          This.$toasted.error('修改失败！', {
            position: 'top-right'
          })
        })
      } else {
      }
    })
  },
  testLink () {
    let admin = ref.child('admin')
    admin.push({
      'username': 'admin',
      'password': 'admin'
    })
  }
}
