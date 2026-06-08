import { Hono } from 'hono'

const app = new Hono();

const router = app
.get('/', (c) => {
  return c.text('Hello Hono!')
})
.get('/api/people', (c) => {
  const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]
  return c.json(people)
});

export type AppType = typeof router;
export default app
