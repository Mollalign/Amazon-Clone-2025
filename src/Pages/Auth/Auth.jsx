import React, { useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { auth } from '../../Utility/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import DataContext from '../../Components/DataProvider/DataContext'
import { Type } from '../../Utility/action.type'
import { ClipLoader } from 'react-spinners'

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  })

  const [{ user }, dispatch] = useContext(DataContext)
  const navigate = useNavigate();
  const navStateData = useLocation();


  const authHandler = async (e) => {
    e.preventDefault()
    const action = e.nativeEvent.submitter?.name

    if (!email || !password) {
      setError("Please fill in both email and password.")
      return
    }

    try {
      if (action === "signIn") {
        setLoading(prev => ({ ...prev, signIn: true }))
        const userInfo = await signInWithEmailAndPassword(auth, email, password)
        dispatch({ type: Type.SET_USER, user: userInfo.user })
        setLoading(prev => ({ ...prev, signIn: false }))
        navigate(navStateData?.state?.redirect || "/");
      } else {
        setLoading(prev => ({ ...prev, signUp: true }))
        const userInfo = await createUserWithEmailAndPassword(auth, email, password)
        dispatch({ type: Type.SET_USER, user: userInfo.user })
        setLoading(prev => ({ ...prev, signUp: false }))
        navigate(navStateData?.state.redirect || "/");
      }
      setError("")
    } catch (err) {
      setError(err.message)
      setLoading({ signIn: false, signUp: false })
    }
  }

  return (
    <section className='h-auto flex flex-col items-center bg-gray-100 min-h-screen'>
      {/* Amazon Logo */}
      <Link to="/" className='mt-6'>
        <img
          className='w-28 object-contain'
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>

      {/* Auth Form */}
      <div className='w-[330px] bg-white mt-4 p-6 border border-gray-300 rounded-md shadow-sm mb-10'>
        <h1 className='text-2xl font-semibold mb-5'>Sign-In</h1>
        {navStateData?.state?.msg && (
          <div className="bg-red-100 border border-red-300 text-red-700 text-sm p-1.5 rounded-lg text-center font-semibold mb-2">
            {navStateData?.state?.msg}
          </div>
        )}
        <form className='flex flex-col gap-4' onSubmit={authHandler}>
          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input
              type="email"
              id='email'
              placeholder='Enter your email'
              className='px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='text-sm font-medium text-gray-700 mb-1'>Password</label>
            <input
              type="password"
              id='password'
              placeholder='Enter your password'
              className='px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Button */}
          <button
            type='submit'
            name='signIn'
            className='flex justify-center items-center gap-2 h-10 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-2 rounded-md shadow-md transition duration-200 ease-in-out cursor-pointer'
          >
            {loading.signIn ? <ClipLoader color="#ffffff" size={20} speedMultiplier={0.75} /> : "Sign In"}
          </button>
        </form>

        {/* Agreement */}
        <p className='text-xs text-gray-700 mt-6 leading-5'>
          By continuing, you agree to Amazon's <span className='text-blue-600 cursor-pointer hover:underline'>Conditions of Use</span> and <span className='text-blue-600 cursor-pointer hover:underline'>Privacy Notice</span>.
        </p>

        {/* Divider */}
        <div className='flex items-center my-6'>
          <div className='flex-grow border-t border-gray-300'></div>
          <span className='mx-4 text-gray-500 text-sm'>New to Amazon?</span>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        {/* Sign Up Button */}
        <form onSubmit={authHandler}>
          <button
            type='submit'
            name='signUp'
            className='flex justify-center items-center gap-2 h-10 w-full bg-gray-200 hover:bg-gray-300 text-sm font-medium rounded-sm transition duration-200 ease-in-out cursor-pointer'
          >
            {loading.signUp ? <ClipLoader color="#000000" size={20} speedMultiplier={0.75} /> : "Create your Amazon Account"}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="flex items-start gap-2 bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded-md mt-4 shadow-sm animate-fade-in">
            <svg className="w-5 h-5 mt-0.5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.93 19.07a10 10 0 1112.14 0A10 10 0 015.93 19.07z" />
            </svg>
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Auth
