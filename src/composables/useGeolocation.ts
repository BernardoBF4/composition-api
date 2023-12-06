import { ref, onMounted } from 'vue'

type Location = {
  latitude: number
  longitude: number
}

export default function useGeolocation() {
  const currentLocation = ref<Location | null>(null)

  const getCurrentLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          currentLocation.value = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
          resolve(currentLocation.value)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  return { getCurrentLocation }
}
