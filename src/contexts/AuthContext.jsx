import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser } from '@/services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_data');
    const token = localStorage.getItem('auth_token');
    
    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem('user_data');
        localStorage.removeItem('auth_token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await loginUser({ username, password });
      
      if (response.token) {
        const userData = {
          username: response.username || username,
          ...response.user
        };
        
        setUser(userData);
        localStorage.setItem('user_data', JSON.stringify(userData));
        localStorage.setItem('auth_token', response.token);
        
        return { success: true };
      } else {
        return { success: false, message: "Login failed!" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error.message || "Login failed!" };
    }
  };

  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      
      if (response.success || response.user) {
        return { success: true, message: "Registration successful!" };
      } else {
        return { success: false, message: response.message || "Registration failed!" };
      }
    } catch (error) {
      console.error("Register error:", error);
      return { success: false, message: error.message || "Registration failed!" };
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      localStorage.removeItem('user_data');
      localStorage.removeItem('auth_token');
    }
  };

  const value = {
    user,
    isAuthenticated: !!user, 
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};