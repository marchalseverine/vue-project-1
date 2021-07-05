
const Home = {
    template: '#home',
    name: 'Home'
}

const UserSettings = {
    template: '<h1> User Settings </h1>',
    name: 'UserSettings'
}

const WhishList = {
    template: '<h1> Whish List </h1>',
    name: 'WhishList'
}

const ShoppingCart = {
    template: '<h1> Shopping Cart </h1>',
    name: 'ShoppingCart'
}

//router

const router = new VueRouter ({
    routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/user-settings', component: UserSettings, name : 'UserSettings' },
    { path: '/whish-list', component: WhishList, name: 'WhishList'},
    { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart'},
    ]
})

const vue = new Vue ({
    router
}).$mount('#app');

