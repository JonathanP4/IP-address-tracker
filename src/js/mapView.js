import Marker from '../images/icon-location.svg'

class MapView {
   _map = L.map('map')

   setMapView(coords) {
      this._map.setView(coords, 13);
   }

   renderMap() {
      L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
         maxZoom: 19,
      }).addTo(this._map);

   }
   renderMarker(coords) {
      const markerIcon = document.querySelector('.leaflet-marker-icon')

      if (markerIcon) markerIcon.remove()

      const marker = L.icon({
         iconUrl: Marker,
      })
      L.marker(coords, { icon: marker }).addTo(this._map)
   }
}
export default new MapView()