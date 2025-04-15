require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Test veritabanı şeması
const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    createdAt: { type: Date, default: Date.now }
});

// Model oluşturma
const Food = mongoose.model('Food', foodSchema);

// Test verisi ekleme
async function createTestFood() {
    try {
        const testFood = new Food({
            name: 'Pizza',
            price: 10.99,
            category: 'Fast Food'
        });

        const result = await testFood.save();
        console.log('Test yemeği eklendi:', result);
    } catch (error) {
        console.error('Test yemeği ekleme hatası:', error);
    }
}

// Test fonksiyonunu çalıştır
// Uncomment this line to create a test food item
// createTestFood();