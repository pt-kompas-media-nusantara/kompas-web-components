import { Component, h, State } from '@stencil/core'
import commentIcon from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/comments.svg'
import phoneAltIcon from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/phone-alt.svg'
import copyIcon from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/copy.svg'
import envelopeIcon from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/envelope.svg'
import whatsappIcon from '../../../assets/fontawesome-free-5.15.3-web/svgs/brands/whatsapp.svg'
import clockIcon from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/clock.svg'

@Component({
  tag: 'kompas-header-account-help-center',
  styleUrl: '../kompas-header-account/kompas-header-account.css',
  shadow: true,
})
export class KompasHeaderAccountHelpCenter {

  @State() clipboardClicked: boolean = false;

  kompasKring: HTMLInputElement

  // Q & A 
  private qna = () => (
    <div class="header-account-help-center--item">
      <div class="ml-3 icon-md icon-blue-600" innerHTML={commentIcon}></div>
      <div class="header-account-help-center--content">
        <p>Tanya Jawab</p>
        <a href="http://kb.kompas.id/" class="font-bold">http://kb.kompas.id/</a>
      </div>
    </div>
  )

  // Telephone 
  private telephone = () => {
    // Clipboard Action
    const clipboardAction = () => {
      const phoneNumberCopy = this.kompasKring.innerHTML;
      navigator.clipboard.writeText(phoneNumberCopy)
      this.clipboardClicked = true
      setTimeout(()=>{
        this.clipboardClicked = false
      }, 2000)
    }

    return (
      <div class="header-account-help-center--item">
        <div class="ml-3 icon-md icon-blue-600" innerHTML={phoneAltIcon}></div>              
        <div class="relative header-account-help-center--content">
          { 
            this.clipboardClicked ? 
              <p class="absolute bg-grey-200 rounded-md h-full top-0 w-full flex items-center justify-center">Berhasil menyalin!</p>
                : 
              ''
          }
          <p>Kompas Kring</p>
          <p ref={el => this.kompasKring = el as HTMLInputElement} class="font-bold">+6221 2567 6000</p>
        </div>
        <div 
          class="bg-grey-200 px-4 py-2 rounded cursor-pointer" 
          onClick={()=>clipboardAction()}>
          <div class="icon-md icon-grey-400" innerHTML={copyIcon}></div>
        </div>
      </div>
    )
  }

  // Whatsapp
  private whatsapp = () => (
    <a href="https://api.whatsapp.com/send?phone=6281290050800" class="header-account-help-center--item">
      <div class="ml-3 icon-md icon-blue-600" innerHTML={whatsappIcon}></div>
      <div class="header-account-help-center--content">
        <p>Whatsapp</p>
        <p class="font-bold hover:underline">+62812 900 50 800</p>
      </div>
    </a>
  )

  // Email 
  private email = () => (
    <a href="mailto:hotline@kompas.id" class="header-account-help-center--item">
      <div class="ml-3 icon-md icon-blue-600" innerHTML={envelopeIcon}></div>
      <div class="header-account-help-center--content">
        <p>Email</p>
        <p class="font-bold hover:underline">hotline@kompas.id</p>
      </div>
    </a>
  )

  // Working Hour 
  private workingHour = () => (
    <div class="header-account-help-center--item">
      <div class="ml-3 icon-md icon-blue-600" innerHTML={clockIcon}></div>
      <div class="flex flex-col mx-4 leading-4 gap-y-2 text-base">
        <p>Jam Kerja</p>
        <p class="font-bold">06.00 - 16.00 WIB</p>
      </div>
    </div>
  )

  render() {
    return (
      <div class="mt-4 p-2 mb-20 leading-4">
        <p class="text-base mx-2 text-left">Pusat Bantuan</p>
        <div class="flex flex-shrink-0 flex-col text-left text-sm gap-y-4 my-4">
          {this.qna()}
          {this.telephone()}
          {this.whatsapp()}
          {this.email()}
          {this.workingHour()}
        </div>
      </div>
    );
  }

}
