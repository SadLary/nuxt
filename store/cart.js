/* eslint-disable */
export const state = () => ({
    products:[
        {   
            id: 0,
            name: 'ALL CANNABIS SEEDS',
            tgc: '20%',
            productivity: "200-300 mg2",
            price: '56',
            picture: '/_nuxt/static/image/cann1.png',
            amount: 1
        },
        {
            id: 1,
            name: 'ALL CANNABIS SEEDS',
            tgc: '20%',
            productivity: "200-300 mg2",
            price: '56',
            picture: '/_nuxt/static/image/cann2.png',
            amount: 1
        },
        {
            id: 2,
            name: 'ALL CANNABIS SEEDS',
            tgc: '20%',
            productivity: "200-300 mg2",
            price: '56',
            picture: '/_nuxt/static/image/cann3.png',
            amount: 1
        },
        {
            id: 3,
            name: 'ALL CANNABIS SEEDS',
            tgc: '20%',
            productivity: "200-300 mg2",
            price: '56',
            picture: '/_nuxt/static/image/cann1.png',
            amount: 1
        },
        {
            id: 4,
            name: 'ALL CANNABIS SEEDS',
            tgc: '20%',
            productivity: "200-300 mg2",
            price: '56',
            picture: '/_nuxt/static/image/cann2.png',
            amount: 1
        },
        {
            id: 5,
            name: 'ALL CANNABIS SEEDS',
            tgc: '20%',
            productivity: "200-300 mg2",
            price: '56',
            picture: '/_nuxt/static/image/cann3.png',
            amount: 1
        },
    ],
    cart:[
    ],
    step: 0,
    cartOpen: false,
})

export const mutations = {
    changeAmount (state, id, value) {
        state.cart[id].amount = value
    },
    openCart (state) {
        state.cartOpen = !state.cartOpen
        console.log(state.step)
    },
    stepIncrement (state) {
        if(state.step === 4) {
            state.step = 0
        } else if(state.step === 3) {
            state.cart = []
            state.step++
        } else {
            state.step++
        }
    },
    stepDecrement (state) {
        if(state.step < 0) {
            state.step = 0
        } else {
            state.step--
        }
    },
    setStep(state, step) {
        state.step = step
    },
    clearCart(state) {
        state.cart = []
    },
    addToCart(state, id) {
        state.cart.push(state.products[id])
    }
}