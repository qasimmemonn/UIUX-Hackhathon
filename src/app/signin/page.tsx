import Link from "next/link";


export default function SignIn() {
    return (
      <div id="signin" className="min-h-screen bg-white flex flex-col items-center justify-center py-6">
        {/* Logo and Heading Section */}
        <div className="w-full max-w-md text-center mb-">
          <img
            src="/images/vector.png"
            alt="Logo"
            className="mx-auto h-6  mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">YOUR ACCOUNT<br/>FOR EVERYTHING<br/> NIKE</h1>
         
        </div>
  
        {/* Sign-in Form */}
        <div className="w-full max-w-md p-8 bg-white rounded-lg ">
          <form className="space-y-6">
            <div>
            
             
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
  
            <div>
             
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
  
            <div className="flex items-center justify-between pb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                Keep me signed in
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
            <label className="text-sm text-gray-400">By creating an account, you agree to Nike's <span className="underline"><Link href="/">Privacy<br className="text-cente "></br>Policy</Link></span> and <span className="underline"><Link href='/'>Terms of Use.</Link></span></label>
  
            <button
              type="submit"
              className="w-full py-4 px-4 bg-black text-white font-normal  shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>
  
          <p className="mt-4 text-center text-sm text-gray-400">
            Not a Member?{' '}
            <a href="#" className="text-gray-600 hover:text-indigo-500 underline">
              Join us
            </a>
          </p>
        </div>
      </div>
    );
  }
  