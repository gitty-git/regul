import jwt from 'jsonwebtoken'
import type { Product } from '~/types'

const secret = 'secret-key'

export default defineEventHandler((event) => {
  const token = getCookie(event, 'token')

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Authentication required'
    })
  }

  try {
    jwt.verify(token, secret)

    const products: Product[] = [
      {
        id: 1,
        name: 'Сlavia Nord Grand сценическое цифровое пианино',
        price: 4500,
        promoted: true,
        imageUrl: '/images/product1.png',
        date: '2023-03-10',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 2,
        name: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
        price: 3285000,
        promoted: false,
        imageUrl: '/images/product2.png',
        date: '2023-03-12',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 3,
        name: '2-к. квартира, 46 м², 1/5 эт.',
        price: 400000,
        promoted: false,
        imageUrl: '/images/product3.png',
        date: '2023-03-11',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 4,
        name: 'Старые барабаны',
        price: 7500,
        promoted: false,
        imageUrl: '/images/product4.png',
        date: '2023-03-09',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 5,
        name: 'DMX сплиттер RJ45 to 4x XLR Stairville',
        price: 255,
        promoted: false,
        imageUrl: '/images/product5.png',
        date: '2023-03-13',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 6,
        name: 'Мотоцикл honda',
        price: 2170,
        promoted: false,
        imageUrl: '/images/product6.png',
        date: '2023-03-10',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 7,
        name: 'Иж юпитер 5',
        price: 1900,
        promoted: false,
        imageUrl: '/images/product7.png',
        date: '2023-03-12',
        viewCount: 255,
        hidden: false,
      },
      {
        id: 8,
        name: 'Пылесос кёрхер с водяным мешком для сбора пыли',
        price: 7500,
        promoted: false,
        imageUrl: '/images/product8.png',
        date: '2023-03-11',
        viewCount: 255,
        hidden: true,
      }
    ]
    return products
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }
})