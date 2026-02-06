
import { RectangleHorizontalIcon, RectangleVerticalIcon, SquareIcon } from  'lucide-react'
import {aspectRatios,type AspectRatio } from '../assets/assets'

 const  Aspectratioselector = ({value,onChange}:{value:AspectRatio; onChange:(ratio:AspectRatio)=>void}) => {
    const iconmap={
        "16:9":<RectangleHorizontalIcon className='size-6'/>,
        "1:1":<SquareIcon className='size-6'/>,
        "4:3":<RectangleVerticalIcon className='size-6'/>,

    }
  return (
    <div className='space-y-3' > 
    <label className='block text-sm font-medium text-zinc-700'>Aspect Ratio</label>
    <div className='flex flex-wrap gap-2'>
        {aspectRatios.map((ratio)=>{
            const isSelected=value === ratio;
            return (
                <button key={ratio} type='button' onClick={()=>onChange(ratio)} className={`flex  flex-items-center justify-center align-center gap-1 rounded-md border px-3 py-2 text-sm ${isSelected ? 'border-pink-500 bg-pink-500/10 text-pink-500' : 'border-zinc-200 bg-white/10 text-zinc-300 hover:bg-white/20'}`}>
                    {iconmap[ratio]}
                    <span className='text-xs'>{ratio}</span>
                </button>
            )
        })}
        
    </div>
    </div>
  )
}
export default Aspectratioselector