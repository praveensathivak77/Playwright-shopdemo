export const testData = {
searchProducts: ['shirt', 'headphones', 'speaker'],
invalidSearch: 'zzzzzz',
categories: ['electronics', 'clothing', 'home', 'books'],

checkout: {
    valid: {
    firstName: 'Praveen',
    lastName: 'A G',
    email: 'praveen@test.com',
    address: 'Bangalore Street',
    city: 'Bangalore',
    state: 'KA',
    zip: '56001',
    cardName: 'Praveen A G',
    cardNumber: '4242424242424242',
    expiry: '12/30',
    cvv: '123'
    },
    invalid: {
    email: 'abc',
    zip: '123'
    }
},

e2e: {
    user: {
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@mail.com',
    address: 'Test Street',
    city: 'Bangalore',
    state: 'KA',
    zip: '56001'
    },
    payment: {
    cardName: 'Test User',
    cardNumber: '4242424242424242',
    expiry: '12/30',
    cvv: '123'
    }
}
};