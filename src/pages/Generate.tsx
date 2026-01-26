import React from 'react'
import { SoftBackdrop } from './Login/SoftBackdrop'
import { useParams } from 'react-router-dom';

export const Generate = () => {
    const {id}=useParams();
    const [loading, setLoading] = React.useState(false);
    const [thumbnails, setThumbnails] = React.useState(false);
    const [title, setTitle] = React.useState(" ");
    const [additionaldetails, setAdditionalDetails] = React.useState(" ");
  return (
    <>
    <SoftBackdrop/>
    </>
  )
}
