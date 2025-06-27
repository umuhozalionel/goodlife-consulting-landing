"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 h-96 flex flex-col">
          <div className="bg-gradient-to-r from-terracotta-600 to-forest-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Goodlife Support</h3>
              <p className="text-xs opacity-90">We're here to help!</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                Hi! Need help choosing the right training program? I'm here to assist you.
              </p>
            </div>
            <div className="text-center text-xs text-gray-500">This chat is powered by Tawk.to</div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-terracotta-500"
              />
              <Button size="sm" className="bg-terracotta-600 hover:bg-terracotta-700 rounded-full px-4">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-terracotta-600 to-forest-600 hover:from-terracotta-700 hover:to-forest-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
