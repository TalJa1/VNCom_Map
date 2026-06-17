import raw from './vn-raw.json'

export interface MapProvincePath {
  key: string
  name: string
  d: string
}

export interface VietnamMapData {
  width: number
  height: number
  provinces: MapProvincePath[]
}

export const vietnamMap = raw as VietnamMapData
