import { ArrowRight, CheckCircle2, Lock, Mail, Sparkles } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
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
                Trusted by 10,000+ job seekers
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-100/80">Welcome back</p>
                <h1 className="mt-4 max-w-md text-4xl font-semibold leading-tight text-white">
                  Build a resume that gets you noticed.
                </h1>
              </div>

              <div className="max-w-md rounded-2xl border border-white/15 bg-slate-900/10 p-5 text-indigo-50 shadow-lg shadow-indigo-950/20 backdrop-blur-sm">
                <p className="text-lg font-medium">“I tailored my resume in minutes and landed interviews faster.”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">AF</div>
                  <div>
                    <p className="font-medium text-white">Alicia Flores</p>
                    <p className="text-sm text-indigo-100/70">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-indigo-100/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Secure AI resume workspace active
            </div>
          </div>

          <div className="bg-slate-950/80 p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-md">
              <div className="mb-8 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Access</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Sign in</h2>
                </div>
                <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                  Secure
                </div>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-200">Email</label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-sm shadow-slate-950/30 transition focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/30">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border-0 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm text-slate-200">Password</label>
                    <a href="#" className="text-xs text-indigo-300 transition hover:text-indigo-200">Forgot password?</a>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-sm shadow-slate-950/30 transition focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/30">
                    <Lock className="h-4 w-4 text-slate-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full border-0 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <label className="flex items-center gap-2 text-sm text-slate-300">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-500 focus:ring-indigo-500" />
                    Remember me
                  </label>
                  <button type="button" className="text-sm text-violet-300 transition hover:text-violet-200">
                    Use demo account
                  </button>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                <span className="h-px flex-1 bg-slate-700" />
                or continue with
                <span className="h-px flex-1 bg-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-400/40 hover:bg-slate-800">
                  Google
                </button>
                <button className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-indigo-400/40 hover:bg-slate-800">
                  GitHub
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