import Api from './api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}


//AuthenticationService.register({
//  email: 'mic@gmail.com'
//  password: '123456'
//})
