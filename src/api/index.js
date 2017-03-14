import axios from 'axios'
export default {
  testLink () {
    axios.get('https://api.github.com/').then(function (res) {
      console.log(res)
    })
  }
}
