import type { FC } from 'react'
import { useState } from 'react'

import { IoSunny } from "react-icons/io5";
import { IoIosPartlySunny } from "react-icons/io";
import { IoCloudy } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

import { RiDrizzleFill } from "react-icons/ri";
import { BsCloudDrizzleFill } from "react-icons/bs";

import { RiSunFoggyFill } from "react-icons/ri";
import { BsFillCloudFog2Fill } from "react-icons/bs";

import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa6";
import { IoMdRainy } from "react-icons/io";

import { WiDaySnow } from "react-icons/wi";
import { BsCloudSnowFill } from "react-icons/bs";

import { IoThunderstormSharp } from "react-icons/io5";
import { MdThunderstorm } from "react-icons/md";

const selectIcon = (weatherCode: number) => {
  switch(weatherCode) {
    case 0: 
      return <IoSunny />
    case 1:
      return <IoMdSunny />
    case 2: 
      return <IoIosPartlySunny />
    case 3: 
      return <IoCloudy />
    case 45:
      return <RiSunFoggyFill />
    case 48:
      return <BsFillCloudFog2Fill />
    case 51: 
      return <RiDrizzleFill />
    case 53 && 55 && 56 && 57:
      return <BsCloudDrizzleFill />
    case 61 && 80:
      return <FaCloudSunRain />
    case 63 && 66 && 81:
      return <FaCloudRain />
    case 65 && 67 && 82:
      return <IoMdRainy />
    case 71 && 77 && 85:
      return <WiDaySnow />
    case 73 && 75 && 86: 
      return <BsCloudSnowFill />
    case 95 && 96:
      return <IoThunderstormSharp />
    case 99:
      return <MdThunderstorm />
  }
}

const Icons:FC<{ weatherCode: number }> = ({ weatherCode }) => {
  const [selectedIcon] = useState<React.ReactNode>(selectIcon(weatherCode))

  return (
    <div>{selectedIcon}</div>
  )
}

export default Icons