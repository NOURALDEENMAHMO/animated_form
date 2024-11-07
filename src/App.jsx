import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";
// import "./index.css";

function App() {
  return (
    <body className="overflow-hidden">
      <div className="bg-BG h-screen  flex justify-center items-center overflow-hidden">
        <motion.section
          className="overflow-hidden w-[320px] h-[320px] absolute  -top-12 -left-20 rotate-45 rounded-[40px] bg-[#c1e3d6] opacity-50 "
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 2,
            rotate: -90,
            borderRadius: "100%",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        ></motion.section>
        <form
          action=""
          className="overflow-hidden bg-[#f6fbf9]  h-[455px] w-[455px] rounded-[32px] flex flex-col gap-10 justify-center items-center p-10 z-10"
        >
          <div className="overflow-hidden w-[250px] text-center ">
            <h1 className="font-bold lettar">Create An Account</h1>
            <p className="font-normal font-light  text-xs">
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-5 w-[375px] h-[55px] bg-white rounded-[10px] border"
          />
          <input
            type="Password"
            name="Password"
            placeholder=" Password"
            className="p-5 w-[375px] h-[55px] bg-white rounded-[10px] border"
          />
          <div className="text-center ">
            <button className="text-white font-bold p-2 w-[255px] h-[59px] bg-BG  rounded-[15px] lettar">
              Create Account
            </button>
            <p className="font-normal mt-4 font-light   text-xs ">
              Already Have An Account?{" "}
              <span className="font-medium text-green-900">Sign In</span>
            </p>
          </div>
        </form>
        <motion.section
          className="overflow-hidden w-[320px] h-[320px] absolute  -bottom-12 -right-20 rotate-45 rounded-[40px] bg-[#c1e3d6] opacity-50 "
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        ></motion.section>
      </div>
    </body>
  );
}

export default App;
