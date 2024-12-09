import Head from "next/head";
import Link from "next/link";

export default function Join() {
  return (
    <div id="signup" className="min-h-screen flex items-center justify-center bg-white py-20">
      <Head>
        <title>Join Nike</title>
      </Head>
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/vector.png"
            alt="Nike Logo"
            className="h-6"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-sm text-center text-gray-600 mt-2 mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />

          <select
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="India">India</option>
            {/* Add other countries as needed */}
          </select>

          <div className="flex justify-between items-center space-x-4">
        
            <input
            type="Male"
            placeholder="Male"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
        
    
            
        <input
            type="Female"
            placeholder="Female"
            className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-black focus:outline-none"
          />
            
          </div>

          <div className="flex items-center py-3">
            <input
              type="checkbox"
              id="subscribe"
              className="mr-2"
            />
            <label htmlFor="subscribe" className="text-sm text-gray-400">
              Sign up for emails to get updates from Nike on products, offers,
              and Member benefits.
            </label>
            
          </div>
          <label className="text-sm text-gray-400">By creating an account, you agree to Nike's <span className="underline"><Link href="/">Privacy<br className="text-center"></br> Policy</Link></span> and <span className="underline"><Link href='/'>Terms of Use.</Link></span></label>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition duration-200"
          >
            JOIN US
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already a Member?{" "}
          <a href="/login" className="text-black underline">
            Sign In
          </a>
        </p>
       
      </div>
    </div>
  );
}
