import React from 'react';
import { motion } from "motion/react"

const bannerImg = {
  urlOne: "https://img.freepik.com/free-photo/hands-up-photo-young-team-classical-clothes-celebrating-success-while-holding-drinks-modern-good-lighted-office_146671-13658.jpg?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid&w=740",
  urlTwo: "https://img.freepik.com/free-photo/two-girls-work-computer_1157-17245.jpg?uid=R83316384&ga=GA1.1.130173900.1746345150&w=740"
};

const Banner = () => {

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img animate={{y: [100, 150, 100], transition: {duration: 4, repeat: Infinity}}} src={bannerImg.urlOne} className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-600 shadow-2xl"/>
                    <motion.img animate={{x: [100, 150, 100], transition: {duration: 8, delay: 3, repeat: Infinity}}} src={bannerImg.urlTwo} className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-600 shadow-2xl"/>
                </div>
                <motion.div animate={{x: [0, 50, 0], transition: {duration: 2}}} className='flex-1'>
                    <h1 className="text-5xl font-bold">Box <motion.span animate={{color: ['#0000FF', '#228B22'], transition: {duration: 2, repeat: Infinity}}}>Office</motion.span> News!</h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;