interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

// Mock users database (in real app, this would be in backend)
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In real app, this would be hashed
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate mock JWT token
const generateMockToken = (userId: string): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ 
    userId, 
    exp: Date.now() + 3600000 // 1 hour from now
  }));
  const signature = btoa('mock-signature');
  return `${header}.${payload}.${signature}`;
};

class MockAuthService {
  // Login
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await delay(1000); // Simulate network delay

    // Find user
    const user = MOCK_USERS.find(u => u.email === credentials.email);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== credentials.password) {
      throw new Error('Invalid password');
    }

    // Generate token
    const token = generateMockToken(user.id);

    // Store in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  // Register
  async register(data: RegisterData): Promise<AuthResponse> {
    await delay(1000); // Simulate network delay

    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === data.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create new user
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      name: data.name,
      email: data.email,
      password: data.password,
    };

    MOCK_USERS.push(newUser);

    // Generate token
    const token = generateMockToken(newUser.id);

    // Store in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    }));

    return {
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    };
  }

  // Logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Get current user
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    // Validate token (check expiration)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now();
    } catch {
      return false;
    }
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verify token (mock)
  verifyToken(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now();
    } catch {
      return false;
    }
  }
}

export default new MockAuthService();
