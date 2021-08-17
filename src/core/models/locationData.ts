export interface LocationData {
  ip: string
  country_name: string
  region_name: string
  city: string
  zip: string
  latitude: number
  longitude: number
  location: Location
}

export interface Location {
  country_flag_emoji: string
}
