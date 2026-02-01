'use client';

export interface User {
  id: string;
  email: string;
  name: string;
}

const STORAGE_KEY = 'losode_user';
const USERS_DB_KEY = 'losode_users';

export function registerUser(email: string, password: string, name: string): { success: boolean; error?: string } {
  if (!email || !password || !name) {
    return { success: false, error: 'All fields are required' };
  }

  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters' };
  }

  const users = getAllUsers();
  if (users.some((u) => u.email === email)) {
    return { success: false, error: 'Email already exists' };
  }

  const newUser: User & { password: string } = {
    id: Math.random().toString(36).slice(2),
    email,
    password,
    name,
  };

  users.push(newUser);
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

  return { success: true };
}

export function loginUser(email: string, password: string): { success: boolean; error?: string; user?: User } {
  const users = getAllUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, error: 'Invalid email or password' };
  }

  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword));

  return { success: true, user: userWithoutPassword as User };
}

export function logoutUser(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem(STORAGE_KEY);
  return user ? JSON.parse(user) : null;
}

export function isUserLoggedIn(): boolean {
  return getCurrentUser() !== null;
}

function getAllUsers(): Array<User & { password: string }> {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem(USERS_DB_KEY);
  return users ? JSON.parse(users) : [];
}
