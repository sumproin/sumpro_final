import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Activity, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
const baseURL = import.meta.env.VITE_API_BASE_URL;; // Use environment variable for backend URL



const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Unable to connect to server. Please ensure backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="w-10 h-10 text-primary" />
            <span className="text-3xl font-bold tracking-tight text-white">
              Sum<span className="text-primary">Pro</span>
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">Admin Portal</h2>
          <p className="text-gray-400 mt-2">Secure access for authorized personnel only.</p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border-t-4 border-primary shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="admin@sumpro.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="••••••••"
                  required
                />
                <Lock className="absolute right-3 top-3 text-gray-500 w-5 h-5" />
              </div>
            </div>

            <Button fullWidth size="lg" type="submit" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> Signing In...
                </span>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SumPro Services. Internal System.
        </div>
      </div>
    </div>
  );
};

export default Login;