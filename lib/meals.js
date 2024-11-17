import sql from 'better-sqlite3'

const db = sql('meals.db')

const useTimeout = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export async function getMeals() {
  // all is used for fetching
  // get for single row
  // run for inserting/updating
  await useTimeout(500)
  return db.prepare(`SELECT * FROM meals`).all()
}
