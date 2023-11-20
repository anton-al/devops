

enum AuthError {
  WRONG_CREDENTIALS,
  SERVER_FAIL,
  EXPIRED_SESSION,
  UNEXPECTED_ERROR
}

console.log(AuthError[AuthError.WRONG_CREDENTIALS])
console.log(AuthError.WRONG_CREDENTIALS)

enum AuthError2 {
  WRONG_CREDENTIALS = 'wrong creds',
  SERVER_FAIL = 'server fail',
  EXPIRED_SESSION = 'expired session'
}

function handleError(error: AuthError){
  switch (error){
    case AuthError.EXPIRED_SESSION:
      console.log('Get a new session!')
      break;
    case AuthError.SERVER_FAIL:
      console.log('Server is down!')
      break;
    case AuthError.WRONG_CREDENTIALS:
      console.log('Wrong credentials!')
      break;
    case AuthError.UNEXPECTED_ERROR:
    default:
      console.log('Unknown error!')
      break;
  }
}

handleError(AuthError.SERVER_FAIL)