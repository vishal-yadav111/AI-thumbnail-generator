import type React from "react";
import type { ThumbnailStyle } from "../assets/assets"
import { ChevronDown, ChevronDownIcon, CpuIcon, ImageIcon, PenToolIcon, SparkleIcon,  SquareIcon } from "lucide-react";


const StyleSelector = ({value,onChange,isOpen,setIsopen}:{value:ThumbnailStyle; onChange:(style:ThumbnailStyle)=>void;
    isOpen:boolean; setIsOpen:(open:boolean)=>void
}) => {
const styleDescription:Record<ThumbnailStyle,string>={
    "Bold & Graphic":"High Contrast,bold typography,striking visuals",
    "Minimalist":"Clean,simple,lots of white space",
    "Photorelistic":"Photo-based,natural looking",
    "Illusrated":"Hand-drawn,artistic, creative",
    "Tech/Futuristic":"Modern,sleek, tech-inspired",
}
const styleIcon:Record<ThumbnailStyle,React.ReactNode>={
    "Bold & Graphic":<SparkleIcon className="h-4 w-4"/>,
    "Minimalist":<SquareIcon className="h-4 w-4"/>,
    "Photorelistic":<ImageIcon className="h-4 w-4"/>,
    "Illusrated":<PenToolIcon className="h-4 w-4"/>,
    "Tech/Futuristic":<CpuIcon className="h-4 w-4"/>,
}
  return (
    <div className="relative py-2 space-y-3">
        <label className='block text-zink-200 text-sm font-medium'>Thumbnail Style</label>
        <button
        type="button"
       onClick={()=>setIsopen(!isOpen)}
       className="flex -full item-center justify-between rounded-md border px-4
       py-3 text-left trannsition bg-white/8 border-white/10 text-zink-200
       hover:bg-white/12" >
            <div className="space-y-1">
                <div className="flex item-center gap-2 font-medium">
                    {styleIcon[value]}
                    <span>{value}</span>
                </div>
                <p>{styleDescription[value]}</p>

            </div>
            <ChevronDownIcon className={['h-5 w-5 text-zink-400 transition-transform',isOpen&&''].join(' ')}/>
        </button>

    </div>
  )
}

export default StyleSelector