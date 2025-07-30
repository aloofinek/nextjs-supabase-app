'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Page() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) console.error('خطأ في جلب البيانات:', error)
      else setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <main>
      <h1>المنشورات</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.content}
          </li>
        ))}
      </ul>
    </main>
  )
}
