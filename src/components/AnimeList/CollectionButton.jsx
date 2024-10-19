"use client"
import React, { useState } from "react";

const CollectionButton = ({ mal_id, user_email, image, title }) => {
  const [isCreated, setIsCreated] = useState(false)

  const handleColletion = async (event) => {
    event.preventDefault()
    const data = { mal_id, user_email, image, title}

    const response = await fetch("/api/V1/collection" , {
      method: "POST",
      body: JSON.stringify(data)
    })
    const collection = await response.json()
    if(collection.status == 200) {
      setIsCreated(true)
    }
    return 
  }

  return (
    <>
    {
      isCreated ? <p className="text-color-primary">Add Succes!!</p>
      :
      <button onClick={handleColletion} className="px-2 py-1 bg-color-accent">Add To Collection</button>
    }
    </>
  )
}

export default CollectionButton