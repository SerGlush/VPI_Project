import { SERVER_URI } from '../config'
import { LoginData, Message, RegistrationData } from '../../../shared'

const commonOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  query: [],
}

export const authentificateMessage = (token: string, message: Message): Message => {
  return {
    ...message,
    headers: { ...message.headers, 'Authorization': `Bearer ${token}` }
  }
}

export const createGetUserMessage = (token: string): Message =>
  authentificateMessage(token, {
    method: 'GET',
    route: '/user',
  })

export const createRegistrationMessage = (data: RegistrationData): Message => {
  return {
    method: 'POST',
    route: '/register',
    body: data
  }
}

export const createLoginMessage = (data: LoginData): Message => {
  return {
    method: 'POST',
    route: '/login',
    body: data
  }
}


export const sendMessage = async (message: Message) => {
  const request = {
    ...commonOptions,
    ...message,
    body: (
      message.body instanceof Blob ||
      message.body instanceof FormData ||
      message.body instanceof File
    ) ? message.body : JSON.stringify(message.body)
  }

  const response = await fetch(
    SERVER_URI +
    request.route +
    request.query.map(
      ([key, val]: [string, string?], index: number): string =>
        (index ? '&' : '?') + encodeURIComponent(key) + (val ? ('=' + encodeURIComponent(val)) : '')
    ).join(''),
    request
  )

  if (!response.ok) throw response
  const data = await response.json()
  return data;
}