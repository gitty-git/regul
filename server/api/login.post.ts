import jwt from 'jsonwebtoken'
import type { LoginCredentials } from '~/types/auth'

const SECRET_KEY = 'secret-key'

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginCredentials>(event)

  if (body.login === 'admin' && body.password === 'secret') {
    const token = jwt.sign({ login: body.login }, SECRET_KEY)
    setCookie(event, 'token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    })

    return { success: true, token: token }
  }

  throw createError({
    statusCode: 401,
    message: 'Invalid credentials'
  })
})