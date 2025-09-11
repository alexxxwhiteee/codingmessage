import { createMemoryHistory, createRouter } from 'vue-router'

import DefaultLayout from './components/DefaultLayout.vue'
import StartScreen from './components/StartScreen.vue'
import CodingMessage from './components/CodingMessage.vue'
import CodingText from './components/CodingText.vue'
import CodedMessage from './components/CodedMessage.vue'
import UncodingMessage from './components/UncodingMessage.vue'
import UncodingText from './components/UncodingText.vue'
import UncodedMessage from './components/UncodedMessage.vue'

const routes = [
  {
  path: '/',
    component: DefaultLayout,
    children: [
  { path: '', component: StartScreen },
  { path: '/codingmessage', component: CodingMessage },
  { path: '/codingtext', component: CodingText },
  { path: '/codedmessage', component: CodedMessage },
  { path: '/uncodingmessage', component: UncodingMessage },
  { path: '/uncodingtext', component: UncodingText },
  { path: '/uncodedmessage', component: UncodedMessage }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router