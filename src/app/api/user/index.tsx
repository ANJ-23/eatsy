// where login, logout(?), and sign-up is handled
import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword } from '../../utils/passwordUtils';
import { generateToken } from '../../utils/authUtils';

const prisma = new PrismaClient();

// POST - SIGNS USER UP; registers username + hashed password
async function registerUser(username: string, password: string) {
    const hashedPassword = await hashPassword(password);
    return prisma.user.create({
        data: {
            username,
            password: hashedPassword,
        },
    });
}

// GET - SIGNS IN
async function signInUser(username: string, password: string) {
    const user = await prisma.user.findUnique({ where: { username } });

    // if user not found, throw error
    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await comparePassword(password, user.password);

    // if password doesn't match with user, throw error
    if (!passwordMatch) {
        throw new Error('Incorrect password');
    }

    // Generate and return a JWT
    const token = generateToken(user.id);

    return { token, user };
}