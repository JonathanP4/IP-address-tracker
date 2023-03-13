import icon from '../images/triangle-exclamation-solid.svg'
import { CLOSE_MODAL_TIMEOUT } from './config'

class IpView {
   _parentNode = document.querySelector('.details-wrapper')
   _main = document.querySelector('main')
   _form = document.querySelector('form')
   _overlay = document.querySelector('.overlay')
   _textInput = document.querySelector('.input-ip')

   handleInputData(handler) {
      this._form.addEventListener('submit', function (e) {
         e.preventDefault()
         handler()
      })
   }
   _clear() {
      this._parentNode.innerHTML = ''
   }
   getInputValue() {
      return this._textInput.value
   }
   renderIpInfo(data) {
      this._clear()
      this._parentNode.insertAdjacentHTML('beforeend', this.generateMarkup(data))
   }
   generateMarkup(data) {
      const markup = `
         <div class="details collapsed bg-white grid gap-2 p-6 rounded-xl mt-5 w-90">
            <div>
               <span>IP Address</span>
               <h1>${data.ip_address}</h1>
            </div>
            <div>
               <span>Location</span>
               <h1>${data.region}, ${data.city} ${data.city_geoname_id}</h1>
            </div>
            <div>
               <span>Timezone</span>
               <h1>UTC -${String(Math.abs(data.timezone.gmt_offset)).padStart(2, 0)}:00</h1>
            </div>
            <div>
               <span>ISP</span>
               <h1>${data.connection.isp_name}</h1>
            </div>
         </div>`
      setTimeout(this.showDetails, 300)
      return markup
   }
   showDetails() {
      document.querySelector('.details').classList.remove('collapsed')
   }
   generateError(err) {
      document.querySelector('.error-modal')?.remove()
      return `
      <div class="error-modal fixed flex justify-center items-center bg-white p-4
         rounded-xl text-center z-20 ">
            <img src="${icon}" alt="warning">
            <h1 class="font-bold text-red-500 w-4/5">${err}</h1>
      </div>`
   }
   renderError(err) {
      this._main.insertAdjacentHTML('beforeend', this.generateError(err))
      setTimeout(() => {
         document.querySelector('.error-modal').classList.add('hide')
      }, CLOSE_MODAL_TIMEOUT * 1000)
   }
}
export default new IpView()