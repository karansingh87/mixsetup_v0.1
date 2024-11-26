'use client'

import { SpotifyAuth } from "@/components/SpotifyAuth"
import { PlaylistSelector } from "@/components/PlaylistSelector"
import { useSpotifyAuth } from "@/hooks/useSpotifyAuth"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
  const { isAuthenticated, isLoading } = useSpotifyAuth()

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto space-y-8 pt-8 sm:pt-12">
        <div className="text-center space-y-1">
          <div className="mb-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="inline-block text-[#1DB954]">mix</span>
              <span 
                className="inline-block animate-title-wave bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-[length:400%_100%] bg-clip-text text-transparent"
              >
                setup
              </span>
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground/80 font-medium">Set up your perfect mix</p>
        </div>

        {isAuthenticated ? (
          <PlaylistSelector />
        ) : (
          <SpotifyAuth />
        )}
      </div>
    </div>
  )
}