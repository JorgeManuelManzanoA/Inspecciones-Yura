import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="nav navbar-container fixed top-0 left-0 right-0 z-0">
      <div className="max-w-[100%] bg px-10 xl:px-10 m-auto w-full py-7 flex justify-between items-center font-geogrotesque">
      <a href="/"> 
        <img src="/yura_2.png" width="200px" alt="Yura Logo"/>
      </a>
      
      {matches && (
        <nav className="flex flex-row gap-9">
          <a href="/" className="bonder text-white text-[20px]">
            Inicio
          </a>
          <a href="/inspeccion" className="bonder text-white text-[20px]">
            Realizar inspección
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1DtuCpZq-qTZ5RTtH5FXckQjI9YmpW5GiH2OR4K93gWM/edit#gid=0" target="_blank" className="bonder text-white text-[20px]">
            Registro
          </a>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 12 : 0, width: toggled ? 35 : 32,}}
            className="block h-1.5 w-10 bg-white"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-1.5 w-8 bg-white"
          ></motion.span>
          <motion.span
            animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 35 : 16,}}
            className="block h-1.5 w-6 bg-white"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}

          className="fixed back bottom-0 left-0 w-[70%] md:w-[90%] h-screen flex flex-col items-center justify-center gap-6 text-black">
          <a href="/" className="bonder text-white text-[22px]">
            Inicio
          </a>
          <a href="/inspeccion" className="bonder text-white text-[22px]">
            Realizar inspección
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1DtuCpZq-qTZ5RTtH5FXckQjI9YmpW5GiH2OR4K93gWM/edit#gid=0" target="_blank" className="bonder text-white text-[22px]">
            Registro
          </a>
        </motion.nav>
      )}
    </div>
    </div>
  );
};

export default Navbar;

