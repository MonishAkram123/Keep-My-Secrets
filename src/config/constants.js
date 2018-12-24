export const temp_constants = {
  TEMP_CONSTANT: 'temporary constant'
}

export const route_constants = {
  DASHBOARD_ROUTE: '/',
  SIGNIN_ROUTE: '/signin',
  SIGNOUT_ROUTE: '/signout',
  SIGNUP_ROUTE: '/signup',
  PROFILE_ROUTE: '/profile',
  CREATE_SECRET_ROUTE: '/create'
}

export const form_constants = {
  LABEL_EMAIL: 'Email',
  EMAIL_FIELD_ID: 'email',

  LABEL_PASSWORD: 'Password',
  PASSWORD_FIELD_ID: 'password',
  LABEL_CONFIRM_PASSWORD: 'Confirm Password',
  CONFIRM_PASSWORD_FIELD_ID: 'confirm_password',

  LABEL_FIRSTNAME: 'First Name',
  FIRSTNAME_FIELD_ID: 'first_name',

  LABEL_LASTNAME: 'Last Name',
  LASTNAME_FIELD_ID: 'last_name',

  LABEL_PHONE: 'Phone Number',
  PHONE_FIELD_ID: 'phone_no',

  LABEL_SECRET_TITLE: 'Title',
  SECRET_TITLE_FIELD_ID: 'title',
  SECRET_FIELDS_ARRAY: 'fields',
  ADD_FIELD_BUTTON: 'ADD FIELD',
  FIELD_NAME: 'name',
  FIELD_VALUE: 'value',
  FIELD_ID: 'id',

  LABEL_SIGNIN_BUTTON: 'LOGIN',
  LABEL_SIGNUP_BUTTON: 'REGISTER',

  HEAD_SIGNUP_FORM: 'New User',
  HEAD_SIGNIN_FORM: 'Login In',
  HEAD_CREATE_SECRET: 'New Secret',
  HEAD_PROFILE_UPDATE: 'Profile',

  CREATE_SECRET_BUTTON: 'ADD NEW SECRET'

}

export const action_constants = {

  CREATE_SECRET: 'CREATE_SECRET',
  CREATE_SECRET_ERROR: 'CREATE_SECRET_ERROR',

  DELETE_SECRET: 'DELETE_SECRET',
  DELETE_SECRET_ERROR: 'DELETE_SECRET_ERROR',

  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',
  SIGNOUT_ERROR: 'SIGNOUT_ERROR',

  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR'

}

export const firebase_constants = {

  ROOT_SECRET_COLLECTION: 'Secrets',
  INDIVIDUAL_SECRET_COLLECTION: 'SecretList',
  USER_PROFILE_COLLECTION: 'Users'
}
