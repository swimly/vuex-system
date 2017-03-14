export default {
  add (state, data) {
    const date = new Date()
    state.list.push(data.text + date)
  }
}
