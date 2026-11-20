
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  Sparkles,
  User
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const endpoint = isSignup ? 'signup' : 'login';

      const response = await fetch(
        `http://localhost:5001/api/auth/${endpoint}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            isSignup
              ? { name, email, password }
              : { email, password }
          ),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/app');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Section */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-sky-600 p-10 lg:flex lg:flex-col lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-wide text-white">ResumePro</p>
                <p className="text-xs text-indigo-100/80">AI-powered career growth</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-indigo-50 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                Your personal resume workspace
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-100/80">
                  {isSignup ? 'Get started' : 'Welcome back'}
                </p>
                <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight text-white">
                  Build a resume that gets you noticed.
                </h1>
              </div>

              <div className="max-w-md rounded-2xl border border-white/15 bg-slate-900/10 p-5 text-indigo-50 shadow-lg shadow-indigo-950/20 backdrop-blur-sm">
                <p className="text-lg font-medium">
                  Create, customize and manage all your resumes in one place.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-indigo-100/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Secure resume workspace
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-slate-950/80 p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-md">

              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
                  Account
                </p>

                <h2 className="mt-2 text-3xl font-semibold text-white">
                  {isSignup ? 'Create account' : 'Sign in'}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {isSignup
                    ? 'Create an account to get started.'
                    : 'Sign in to access your resumes.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {isSignup && (
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-slate-200">
                      Full Name
                    </label>

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 focus-within:border-indigo-400">
                      <User className="h-4 w-4 text-slate-400" />
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-200">
                    Email
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 focus-within:border-indigo-400">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm text-slate-200">
                    Password
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 focus-within:border-indigo-400">
                    <Lock className="h-4 w-4 text-slate-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? 'Please wait...'
                    : isSignup
                      ? 'Create account'
                      : 'Sign in'}

                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>

              </form>

              <div className="mt-8 text-center text-sm text-slate-400">
                {isSignup
                  ? 'Already have an account?'
                  : "Don't have an account?"}

                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setError('');
                  }}
                  className="ml-2 font-semibold text-violet-300 transition hover:text-violet-200"
                >
                  {isSignup ? 'Sign in' : 'Sign up'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
