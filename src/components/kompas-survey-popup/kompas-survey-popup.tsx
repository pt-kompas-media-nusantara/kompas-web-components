import { Component, h, JSX, Prop } from '@stencil/core'
import remove from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/remove.svg'

@Component({
  tag: 'kompas-survey-popup',
  styleUrl: '../kompas-survey-popup/kompas-survey-popup.css',
  shadow: true,
})
export class KompasSurveyPopUp {
  @Prop() isShowPopUp: boolean = true
  @Prop() token: string = 'token'
  @Prop() surveyUuid: string = 'surveyUuid'
  @Prop() surveyUrl: string = 'https://www.google.com/'

  private closePopUp = (): void => {
    const expires = new Date()
    expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000)
    const cookie = 'kompas._isSurveyClosed' + '=' + true + ';expires=' + expires.toUTCString() + 'path=/'
    document.cookie = cookie
    this.isShowPopUp = false
  }

  private openSurvey = (): void => {
    window.location.href = `${this.surveyUrl}?next=${window.location.href}`
  }

  private surveyPopUp = (): JSX.Element => {
    return (
      <div class="flex flex-row border border-grey-100 shadow-2xl rounded-lg w-106 p-5 space-x-6">
        <img class="object-scale-down w-28" src="https://kompasid-production-www.s3.ap-southeast-1.amazonaws.com/survey-asset/survey-image.png"></img>
        <div class=" flex flex-col items-start">
          <div class="text-left">
            <p class="font-bold text-base">Kami Menyayangkan Anda Tidak Lagi Berlangganan</p>
            <p class="text-sm pt-2 pb-4">Kami ingin mendengar pendapat Anda untuk membuat Kompas.id lebih baik lagi. Bantu kami dengan menjawab pertanyaan singkat berikut ini.</p>
          </div>
          <div>
            <button class="text-sm rounded bg-green-500 text-grey-100 px-5 py-1.5" onClick={this.openSurvey}>
              Isi Survei
            </button>
          </div>
        </div>
        <button class="self-start" innerHTML={remove} onClick={this.closePopUp}></button>
      </div>
    )
  }

  private surveyPopUpMobile = (): void => {
    return (
      <div class="flex flex-col border border-grey-100 shadow-2xl rounded-lg p-5 space-x-6 text-left">
        <div class="flex flex-col items-start">
          <div class="flex flex-row">
            <p class="font-bold text-base">Kami Menyayangkan Anda Tidak Lagi Berlangganan</p>
            <button class="self-start" innerHTML={remove} onClick={this.closePopUp}></button>
          </div>
          <div>
            <p class="text-sm pt-2 pb-4">Kami ingin mendengar pendapat Anda untuk membuat Kompas.id lebih baik lagi. Bantu kami dengan menjawab pertanyaan singkat berikut ini.</p>
            <button class="text-base rounded bg-green-500 text-grey-100 w-full py-2" onClick={this.openSurvey}>
              Isi Survei
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
    <div>
      <div class="fixed bottom-12 left-12 bg-grey-100 z-50 rounded-lg hidden md:block">{this.isShowPopUp ? this.surveyPopUp() : ''}</div>
      <div class="fixed bottom-0 bg-grey-100 z-50 rounded-lg md:hidden">{this.isShowPopUp ? this.surveyPopUpMobile() : ''}</div>
    </div>
    )
  }
}
