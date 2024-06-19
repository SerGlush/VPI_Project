export type Message = {
  method?: 'GET' | 'POST' | 'PUT'
  route: string
  body?: unknown | FormData | Blob | File
  query?: Array<[string, string?]>
  headers?: Record<string, string>
}

export type RegistrationData = {
  email: string,
  username: string,
  password: string
}

export type LoginData = {
  email: string,
  password: string
} 

export type ErrorCodes = 'BAD_CREDENTIALS'
