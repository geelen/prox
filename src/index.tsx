import { Hono } from 'hono/quick'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import {Layout} from "./components/Layout";

type Env = {
	DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', async (c) => {
  return c.html(
    <Layout>
      <h1>Hi.</h1>
    </Layout>
  )
})

export default app
