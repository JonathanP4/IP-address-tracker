import * as model from './model'
import ipView from './ipView'
import mapView from './mapView'

const ipControl = async function (ip = '') {
   try {
      // fetch data based on provided ip (defaults to user ip)
      const data = await model.fetchIpData(ip)

      const coords = [data.location.lat, data.location.lng]

      mapView.setMapView(coords)
      mapView.renderMarker(coords)

      // display received data to the user
      ipView.renderIpInfo(data)
   } catch (err) {
      console.error(err);
      ipView.renderError(`${err.message}`)
   }
}
ipControl()

const ipSearchResults = function () {
   // get ip provided by user (text input value)
   const data = ipView.getInputValue()

   ipControl(data)
}

const eventHandlers = function () {
   ipView.handleInputData(ipSearchResults)
}
eventHandlers()

const init = function () {
   mapView.renderMap()
}
init()