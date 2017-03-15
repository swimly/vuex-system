import axios from 'axios'
import * as wilddog from 'wilddog'
let config = {
  syncURL: 'https://lcdc.wilddogio.com/'
}
wilddog.initializeApp(config)
let ref = wilddog.sync().ref()
export default {
  addUser () {
    console.log(0)
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
