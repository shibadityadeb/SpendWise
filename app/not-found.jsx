import React from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import {Button} from '@/components/ui/button'
const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4 text-yellow-500">
          <AlertTriangle size={64} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
       <Link href="/">
  <Button variant="default" size="lg">
    Return Home
  </Button>
</Link>
      </div>
    </div>
  )
}

export default NotFound
