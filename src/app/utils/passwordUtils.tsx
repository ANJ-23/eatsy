import bcrypt from 'bcrypt';

const numOfHashes = 10;

// (POST) Function to hash a password
export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, numOfHashes);
  return hashedPassword;
}

// (GET) Function to compare a password with its hash
export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
}