import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'default-secret-key';
const tokenExpiration = '7d'; // Token expiration time, e.g., 7 days

export function generateToken(userId: string): string {
  const payload = { userId };

  return jwt.sign(payload, secretKey, { expiresIn: tokenExpiration });
}