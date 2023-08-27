export const setAuthToken = (token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  };
  
  export const getAuthToken = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  };
  
  export const removeAuthToken = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  };
  
  export const isAuthenticated = (): boolean => {
    if (typeof window !== 'undefined') {
      const token = getAuthToken();
      return !!token;
    }
    return false;
  };