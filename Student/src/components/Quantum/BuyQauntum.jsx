
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {createOrder} from '../utills/rozarpay'

const quantumData = {
  id: 16,
  code: 'KCS-304',
  price: 20,
  title: 'Technical Communication',
  about: "This comprehensive guide is an invaluable resource for mastering technical communication. Covering a wide range of topics from report writing to presentation skills, it's designed to help you excel in your academic and professional endeavors. With practical examples and exercises, this book is your key to achieving top marks in your semester exams.",
  features: [
    'In-depth coverage of technical writing principles',
    'Strategies for effective oral presentations',
    'Guidelines for creating impactful visual aids',
    'Tips for successful group discussions and interviews',
    'Practice exercises with solutions'
  ],
  image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75'
}

const BuyQuantum = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={quantumData.image} alt={quantumData.title} />
          </div>
          <div className="p-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 mb-2"
            >
              Thanks For Choosing {quantumData.title}
            </motion.h2>
            <p className="text-sm text-gray-600 mb-4">Code: {quantumData.code}</p>
            <p className="text-gray-700 mb-6">{quantumData.about}</p>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 mb-6">
              {quantumData.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className="text-gray-600 mb-1"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-800">₹{quantumData.price}</p>
              <motion.button
              onClick={()=>createOrder(20)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Pay ₹{quantumData.price}
                
              </motion.button>
            </div>


          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default BuyQuantum

