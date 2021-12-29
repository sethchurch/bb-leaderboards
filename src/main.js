import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const httpLink = new HttpLink({
// You should use an absolute URL here
    uri: 'https://cors-anywhere.herokuapp.com/https://bbservers.dev/v2/query',
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

// Create a provider
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

const app = createApp(App)

app.use(apolloProvider)
app.use(router)
app.mount('#app')
