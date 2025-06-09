import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
              if (req.method !== 'POST') {
                            return res.status(405).json({ message: 'Method not allowed' });
              }

              try {
                            await dbConnect();
                            const { fullName, email, password, confirmPassword } = req.body;

                            // Gerekli alanları kontrol et
                            if (!fullName || !email || !password || !confirmPassword) {
                                          return res.status(400).json({ message: 'All fields are required' });
                            }

                            // Şifre eşleşme kontrolü
                            if (password !== confirmPassword) {
                                          return res.status(400).json({ message: 'Passwords do not match' });
                            }

                            // Kullanıcı var mı kontrol et
                            const existingUser = await User.findOne({ email });
                            if (existingUser) {
                                          return res.status(400).json({ message: "User already exists" });
                            }

                            // Şifreyi hash'le
                            const salt = await bcrypt.genSalt(10);
                            const hashedPassword = await bcrypt.hash(password, salt);

                            // Yeni kullanıcı oluştur (confirmPassword'u dahil etme!)
                            const newUser = new User({
                                          fullName,
                                          email,
                                          password: hashedPassword
                                          // confirmPassword alanını dahil etmiyoruz!
                            });

                            // Kullanıcıyı kaydet
                            await newUser.save();

                            // Response
                            const userResponse = {
                                          _id: newUser._id,
                                          fullName: newUser.fullName,
                                          email: newUser.email,
                                          createdAt: newUser.createdAt
                            };

                            res.status(201).json({
                                          message: 'User created successfully',
                                          user: userResponse
                            });

              } catch (err) {
                            console.error('Registration error:', err);
                            res.status(500).json({
                                          message: 'Server error',
                                          error: err.message
                            });
              }
};

export default handler;