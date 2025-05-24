import dbConnect from "@/util/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ 
      success: true, 
      message: 'MongoDB bağlantısı başarılı!',
      database: 'food-ordering'
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Bağlantı hatası: ' + error.message 
    });
  }
}