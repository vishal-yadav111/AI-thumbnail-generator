import React from 'react'
import { SoftBackdrop } from './Login/SoftBackdrop'
import { useParams } from 'react-router-dom';
import Aspectratioselector from '../components/AspectRatioSelector';
import StyleSelector from '../components/StyleSelector';



export const Generate = () => {
    const {id}=useParams();
    const [loading, setLoading] = React.useState(false);
    const [thumbnails, setThumbnails] = React.useState(false);
    const [title, setTitle] = React.useState(" ");
    const [additionaldetails, setAdditionalDetails] = React.useState(" ");
  return (
    <>
    <SoftBackdrop/>
    <div className=" pt-25 min-h-screen flex justify-center items-center">
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 pb-25 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr]  gap-8">
          {/* LEFT PANNEL */}
          <div className={`space-y-6 ${id && 'pointer-events-none'}`}>
            <div className="p-6 border border-white/12 rounded-lg shadow-xl space-y-6 bg-white/8">
            <h2 className='text-xl font-bold m-0 mb-3'>Create Your Thumbnail</h2>
            <p className=''>Describe Your Vision And Let AI Generate It For You</p>
             
             <div className='space-y-5'>
              {/* Intput */}
              <div className='space-y-2'>
              <label >Title</label>
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full p-3 rounded bg-white/5 border border-white/10 focus:border-pink-500 outline-none space-y-4 mt-2' placeholder='e.g, 10 Tips For Better Sleep' maxLength={100}/>
              <div className='flex justify-end'>
                <span className='text-sm text-white/50'>{title.length}/100</span>
              </div>
              {/* Aspect Ratio */}
            <div>
              <Aspectratioselector/>
            </div>
              
              {/* Style Selector */}
              <StyleSelector/>
              {/* Color Scheme Selector */}

              </div>
              {/* Additional Details */}
              <div className='space-y-2'>
              <label  className='block text-sm font-medium'>Additional Details <span className='text-zink-400 text-xs'> (Optional)</span></label>
              <textarea value={additionaldetails} onChange={(e)=>setAdditionalDetails(e.target.value)} rows={4} className='w-full p-3 rounded bg-white/5 border border-white/10 focus:border-pink-500 outline-none mt-2' placeholder='Add details like colors, fonts, or specific elements you want in your thumbnail' maxLength={500}></textarea>
              </div>

             </div>
                      {/* BUTTON */}
          {!id && (<button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
            {loading ? "Generating Thumbnail..." : "Generate Thumbnail"}
          </button>)}
          </div>
            
           
           

          </div>
          {/* RIGHT PANNEL */}
        </div>
      </main>
    </div>
    </>
  )
}
