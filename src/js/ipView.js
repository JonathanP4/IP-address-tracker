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
         <div class="details collapsed absolute bg-white grid gap-2 py-6 rounded-xl mt-5">
            <div>
               <span>IP Address</span>
               <h1>${data.ip}</h1>
            </div>
            <div>
               <span>Location</span>
               <h1>${data.location.region}, ${data.location.city} ${data.location.geonameId}</h1>
            </div>
            <div>
               <span>Timezone</span>
               <h1>UTC -05:00</h1>
            </div>
            <div>
               <span>ISP</span>
               <h1>${data.isp}</h1>
            </div>
         </div>`;
      setTimeout(this.showDetails, 300)
      return markup
   }
   showDetails() {
      document.querySelector('.details').classList.remove('collapsed')
   }
   generateError(err) {
      const errorMarkup = `
      <div class="error-modal fixed flex justify-center items-center bg-white p-4
         rounded-xl text-center z-20">
            <img src="${icon}" alt="warning">
            <h1 class="font-bold text-red-500 w-4/5">${err}</h1>
      </div>`
      return errorMarkup
   }
   renderError(err) {
      this._main.insertAdjacentHTML('beforeend', this.generateError(err))
   }
}
export default new IpView()