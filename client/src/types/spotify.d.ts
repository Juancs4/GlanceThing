export interface FilteredSpotifyCurrentPlayingResponse {
  session: true
  playing: boolean
  name: string
  trackURL: string
  artists: {
    name: string
    url: string
  }[]
  album: {
    name: string
    url: string
  }
  covers: {
    url: string
    width: number
    height: number
  }[]
  duration: {
    current: number
    total: number
  }
  device: {
    volume_percent: number
    supports_volume: boolean
  }
}
