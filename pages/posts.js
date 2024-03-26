import React, { useState, useEffect } from "react"

export default function Posts() {
  const [pages, setPages] = useState(null)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setPages(data) // 將獲取到的數據設置到狀態中
        console.log(data)
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error)
      }
    }

    fetchPages()
  }, [])

  // 如果正在加載數據，則顯示加載中的消息
  if (!pages) {
    return <div>Loading...</div>
  }

  // 數據加載完成後，呈現數據
  return (
    <div>
      {pages.map((page) => (
        <div key={page.id}>
          <div>Title: {page.data.Title.rich_text[0].text.content}</div>
          <div>Description: {page.data.Description.rich_text[0].text.content}</div>
        </div>
      ))}
    </div>
  )
}


