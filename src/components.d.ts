/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Registration } from "./components/kompas-paywall-banner-registration/types";
import { PaywallProduct } from "./components/kompas-paywall-body/types";
export namespace Components {
    interface KidPaywall {
        /**
          * prop gtmBrandingMedium mengakomodasi penambahan atribut param `track_medium` di permalink button branding `mengapa kompas.id?`.
         */
        "gtmBrandingMedium": string;
        /**
          * prop gtmLoginMedium mengakomodasi penambahan atribut param `track_medium` di permalink button login.
         */
        "gtmLoginMedium": string;
        /**
          * prop gtmPaywallMedium mengakomodasi penambahan atribut param `track_medium` di permalink button berlangganan pada setiap item paket berlangganan`.
         */
        "gtmPaywallMedium": string;
        /**
          * prop gtmTrackContent mengakomodasi penambahan atribut param `track_content` di semua permalink. hint: url dari window.location.href
         */
        "gtmTrackContent": string;
        /**
          * prop gtmTrackSource mengakomodasi penambahan atribut param `track_source` di semua permalink.
         */
        "gtmTrackSource": string;
        /**
          * prop isLogin mengakomodasi untuk menampilkan banner registration secara dinamis.
         */
        "isLogin": boolean;
        /**
          * prop show-membership untuk menampilkan section membership
         */
        "showMembership": boolean;
        /**
          * prop show-registration untuk menampilkan section resgistration & branding
         */
        "showRegistration": boolean;
    }
    interface KidRecommender {
        /**
          * Kunci otentikasi
         */
        "authKey": string;
        /**
          * Setelan untuk mengakomodasi mode terang/gelap
         */
        "darkMode": boolean;
        /**
          * Lokasi penempatan komponen
         */
        "position": string;
        /**
          * Label/tagar jamak artikel yang dipisahkan dengan koma. Kalau tidak diisi, komponen akan mengambil nilai `<meta name="keyword" />`.
         */
        "postTags": string;
        /**
          * Judul artikel. Kalau tidak diisi, komponen akan otomatis mengambil nilai `<meta name="og:title" />` atau `<title />`.
         */
        "postTitle": string;
        /**
          * URL artikel tempat komponen ini disisipkan. Kalau tidak diisi, komponen akan otomatis mengambil nilai `<meta property="og:url" />` atau `window.location`.
         */
        "postUrl": string;
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "section": string;
    }
    interface KompasFooter {
        /**
          * wording untuk chat whatsapp & email
         */
        "wordingMessage": string;
    }
    interface KompasFooterDefault {
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "menus": any;
    }
    interface KompasFooterProducts {
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "branding": any;
    }
    interface KompasFooterSupports {
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "branding": any;
        /**
          * wording untuk chat whatsapp & email
         */
        "wordingMessage": string;
    }
    interface KompasHeaderAccount {
        /**
          * Logout Url
         */
        "logoutUrl": string;
        /**
          * Manage Account Url
         */
        "manageAccountUrl": string;
        /**
          * Total Notification Count
         */
        "notificationTotal": number;
        /**
          * Value to Add spacing on top of sidebar (will convert to pixel)
         */
        "sidebarTopSpacing": number;
        /**
          * Value consist of User Data
         */
        "userData": any;
    }
    interface KompasHeaderAccountHelpCenter {
    }
    interface KompasHeaderAccountMenu {
        /**
          * Logout Url
         */
        "logoutUrl": string;
        /**
          * Manage Account Url
         */
        "manageAccountUrl": string;
        /**
          * Total Notification Count
         */
        "notificationTotal": number;
    }
    interface KompasHeaderAccountProfile {
        /**
          * User Data
         */
        "userData": any;
        /**
          * User Initial Name
         */
        "userInitialName": string;
    }
    interface KompasPaywall {
        "isLogin": boolean;
        "isSubscribe": boolean;
        "quota": number;
        "type": 'epaper' | 'reguler';
    }
    interface KompasPaywallBannerRegistration {
        "bannerData": Registration | undefined;
    }
    interface KompasPaywallBody {
        "isLogin": boolean;
        "paywallData": PaywallProduct | undefined;
        "slug": string;
        "type": 'epaper' | 'reguler';
    }
    interface KompasPaywallInformationHeader {
        "content": string;
    }
    interface KompasPaywallMeter {
        /**
          * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
         */
        "countdownArticle": number;
        "isLogin": boolean;
        "type": 'epaper' | 'reguler';
    }
}
declare global {
    interface HTMLKidPaywallElement extends Components.KidPaywall, HTMLStencilElement {
    }
    var HTMLKidPaywallElement: {
        prototype: HTMLKidPaywallElement;
        new (): HTMLKidPaywallElement;
    };
    interface HTMLKidRecommenderElement extends Components.KidRecommender, HTMLStencilElement {
    }
    var HTMLKidRecommenderElement: {
        prototype: HTMLKidRecommenderElement;
        new (): HTMLKidRecommenderElement;
    };
    interface HTMLKompasFooterElement extends Components.KompasFooter, HTMLStencilElement {
    }
    var HTMLKompasFooterElement: {
        prototype: HTMLKompasFooterElement;
        new (): HTMLKompasFooterElement;
    };
    interface HTMLKompasFooterDefaultElement extends Components.KompasFooterDefault, HTMLStencilElement {
    }
    var HTMLKompasFooterDefaultElement: {
        prototype: HTMLKompasFooterDefaultElement;
        new (): HTMLKompasFooterDefaultElement;
    };
    interface HTMLKompasFooterProductsElement extends Components.KompasFooterProducts, HTMLStencilElement {
    }
    var HTMLKompasFooterProductsElement: {
        prototype: HTMLKompasFooterProductsElement;
        new (): HTMLKompasFooterProductsElement;
    };
    interface HTMLKompasFooterSupportsElement extends Components.KompasFooterSupports, HTMLStencilElement {
    }
    var HTMLKompasFooterSupportsElement: {
        prototype: HTMLKompasFooterSupportsElement;
        new (): HTMLKompasFooterSupportsElement;
    };
    interface HTMLKompasHeaderAccountElement extends Components.KompasHeaderAccount, HTMLStencilElement {
    }
    var HTMLKompasHeaderAccountElement: {
        prototype: HTMLKompasHeaderAccountElement;
        new (): HTMLKompasHeaderAccountElement;
    };
    interface HTMLKompasHeaderAccountHelpCenterElement extends Components.KompasHeaderAccountHelpCenter, HTMLStencilElement {
    }
    var HTMLKompasHeaderAccountHelpCenterElement: {
        prototype: HTMLKompasHeaderAccountHelpCenterElement;
        new (): HTMLKompasHeaderAccountHelpCenterElement;
    };
    interface HTMLKompasHeaderAccountMenuElement extends Components.KompasHeaderAccountMenu, HTMLStencilElement {
    }
    var HTMLKompasHeaderAccountMenuElement: {
        prototype: HTMLKompasHeaderAccountMenuElement;
        new (): HTMLKompasHeaderAccountMenuElement;
    };
    interface HTMLKompasHeaderAccountProfileElement extends Components.KompasHeaderAccountProfile, HTMLStencilElement {
    }
    var HTMLKompasHeaderAccountProfileElement: {
        prototype: HTMLKompasHeaderAccountProfileElement;
        new (): HTMLKompasHeaderAccountProfileElement;
    };
    interface HTMLKompasPaywallElement extends Components.KompasPaywall, HTMLStencilElement {
    }
    var HTMLKompasPaywallElement: {
        prototype: HTMLKompasPaywallElement;
        new (): HTMLKompasPaywallElement;
    };
    interface HTMLKompasPaywallBannerRegistrationElement extends Components.KompasPaywallBannerRegistration, HTMLStencilElement {
    }
    var HTMLKompasPaywallBannerRegistrationElement: {
        prototype: HTMLKompasPaywallBannerRegistrationElement;
        new (): HTMLKompasPaywallBannerRegistrationElement;
    };
    interface HTMLKompasPaywallBodyElement extends Components.KompasPaywallBody, HTMLStencilElement {
    }
    var HTMLKompasPaywallBodyElement: {
        prototype: HTMLKompasPaywallBodyElement;
        new (): HTMLKompasPaywallBodyElement;
    };
    interface HTMLKompasPaywallInformationHeaderElement extends Components.KompasPaywallInformationHeader, HTMLStencilElement {
    }
    var HTMLKompasPaywallInformationHeaderElement: {
        prototype: HTMLKompasPaywallInformationHeaderElement;
        new (): HTMLKompasPaywallInformationHeaderElement;
    };
    interface HTMLKompasPaywallMeterElement extends Components.KompasPaywallMeter, HTMLStencilElement {
    }
    var HTMLKompasPaywallMeterElement: {
        prototype: HTMLKompasPaywallMeterElement;
        new (): HTMLKompasPaywallMeterElement;
    };
    interface HTMLElementTagNameMap {
        "kid-paywall": HTMLKidPaywallElement;
        "kid-recommender": HTMLKidRecommenderElement;
        "kompas-footer": HTMLKompasFooterElement;
        "kompas-footer-default": HTMLKompasFooterDefaultElement;
        "kompas-footer-products": HTMLKompasFooterProductsElement;
        "kompas-footer-supports": HTMLKompasFooterSupportsElement;
        "kompas-header-account": HTMLKompasHeaderAccountElement;
        "kompas-header-account-help-center": HTMLKompasHeaderAccountHelpCenterElement;
        "kompas-header-account-menu": HTMLKompasHeaderAccountMenuElement;
        "kompas-header-account-profile": HTMLKompasHeaderAccountProfileElement;
        "kompas-paywall": HTMLKompasPaywallElement;
        "kompas-paywall-banner-registration": HTMLKompasPaywallBannerRegistrationElement;
        "kompas-paywall-body": HTMLKompasPaywallBodyElement;
        "kompas-paywall-information-header": HTMLKompasPaywallInformationHeaderElement;
        "kompas-paywall-meter": HTMLKompasPaywallMeterElement;
    }
}
declare namespace LocalJSX {
    interface KidPaywall {
        /**
          * prop gtmBrandingMedium mengakomodasi penambahan atribut param `track_medium` di permalink button branding `mengapa kompas.id?`.
         */
        "gtmBrandingMedium"?: string;
        /**
          * prop gtmLoginMedium mengakomodasi penambahan atribut param `track_medium` di permalink button login.
         */
        "gtmLoginMedium"?: string;
        /**
          * prop gtmPaywallMedium mengakomodasi penambahan atribut param `track_medium` di permalink button berlangganan pada setiap item paket berlangganan`.
         */
        "gtmPaywallMedium"?: string;
        /**
          * prop gtmTrackContent mengakomodasi penambahan atribut param `track_content` di semua permalink. hint: url dari window.location.href
         */
        "gtmTrackContent"?: string;
        /**
          * prop gtmTrackSource mengakomodasi penambahan atribut param `track_source` di semua permalink.
         */
        "gtmTrackSource"?: string;
        /**
          * prop isLogin mengakomodasi untuk menampilkan banner registration secara dinamis.
         */
        "isLogin"?: boolean;
        /**
          * prop show-membership untuk menampilkan section membership
         */
        "showMembership"?: boolean;
        /**
          * prop show-registration untuk menampilkan section resgistration & branding
         */
        "showRegistration"?: boolean;
    }
    interface KidRecommender {
        /**
          * Kunci otentikasi
         */
        "authKey": string;
        /**
          * Setelan untuk mengakomodasi mode terang/gelap
         */
        "darkMode"?: boolean;
        /**
          * Lokasi penempatan komponen
         */
        "position"?: string;
        /**
          * Label/tagar jamak artikel yang dipisahkan dengan koma. Kalau tidak diisi, komponen akan mengambil nilai `<meta name="keyword" />`.
         */
        "postTags"?: string;
        /**
          * Judul artikel. Kalau tidak diisi, komponen akan otomatis mengambil nilai `<meta name="og:title" />` atau `<title />`.
         */
        "postTitle"?: string;
        /**
          * URL artikel tempat komponen ini disisipkan. Kalau tidak diisi, komponen akan otomatis mengambil nilai `<meta property="og:url" />` atau `window.location`.
         */
        "postUrl"?: string;
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "section"?: string;
    }
    interface KompasFooter {
        /**
          * wording untuk chat whatsapp & email
         */
        "wordingMessage"?: string;
    }
    interface KompasFooterDefault {
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "menus": any;
    }
    interface KompasFooterProducts {
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "branding": any;
    }
    interface KompasFooterSupports {
        /**
          * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
         */
        "branding": any;
        /**
          * wording untuk chat whatsapp & email
         */
        "wordingMessage"?: string;
    }
    interface KompasHeaderAccount {
        /**
          * Logout Url
         */
        "logoutUrl"?: string;
        /**
          * Manage Account Url
         */
        "manageAccountUrl"?: string;
        /**
          * Total Notification Count
         */
        "notificationTotal"?: number;
        /**
          * Value to Add spacing on top of sidebar (will convert to pixel)
         */
        "sidebarTopSpacing"?: number;
        /**
          * Value consist of User Data
         */
        "userData": any;
    }
    interface KompasHeaderAccountHelpCenter {
    }
    interface KompasHeaderAccountMenu {
        /**
          * Logout Url
         */
        "logoutUrl"?: string;
        /**
          * Manage Account Url
         */
        "manageAccountUrl"?: string;
        /**
          * Total Notification Count
         */
        "notificationTotal"?: number;
    }
    interface KompasHeaderAccountProfile {
        /**
          * User Data
         */
        "userData": any;
        /**
          * User Initial Name
         */
        "userInitialName"?: string;
    }
    interface KompasPaywall {
        "isLogin"?: boolean;
        "isSubscribe"?: boolean;
        "quota"?: number;
        "type"?: 'epaper' | 'reguler';
    }
    interface KompasPaywallBannerRegistration {
        "bannerData"?: Registration | undefined;
    }
    interface KompasPaywallBody {
        "isLogin"?: boolean;
        "paywallData"?: PaywallProduct | undefined;
        "slug"?: string;
        "type"?: 'epaper' | 'reguler';
    }
    interface KompasPaywallInformationHeader {
        "content"?: string;
    }
    interface KompasPaywallMeter {
        /**
          * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
         */
        "countdownArticle"?: number;
        "isLogin"?: boolean;
        "type"?: 'epaper' | 'reguler';
    }
    interface IntrinsicElements {
        "kid-paywall": KidPaywall;
        "kid-recommender": KidRecommender;
        "kompas-footer": KompasFooter;
        "kompas-footer-default": KompasFooterDefault;
        "kompas-footer-products": KompasFooterProducts;
        "kompas-footer-supports": KompasFooterSupports;
        "kompas-header-account": KompasHeaderAccount;
        "kompas-header-account-help-center": KompasHeaderAccountHelpCenter;
        "kompas-header-account-menu": KompasHeaderAccountMenu;
        "kompas-header-account-profile": KompasHeaderAccountProfile;
        "kompas-paywall": KompasPaywall;
        "kompas-paywall-banner-registration": KompasPaywallBannerRegistration;
        "kompas-paywall-body": KompasPaywallBody;
        "kompas-paywall-information-header": KompasPaywallInformationHeader;
        "kompas-paywall-meter": KompasPaywallMeter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kid-paywall": LocalJSX.KidPaywall & JSXBase.HTMLAttributes<HTMLKidPaywallElement>;
            "kid-recommender": LocalJSX.KidRecommender & JSXBase.HTMLAttributes<HTMLKidRecommenderElement>;
            "kompas-footer": LocalJSX.KompasFooter & JSXBase.HTMLAttributes<HTMLKompasFooterElement>;
            "kompas-footer-default": LocalJSX.KompasFooterDefault & JSXBase.HTMLAttributes<HTMLKompasFooterDefaultElement>;
            "kompas-footer-products": LocalJSX.KompasFooterProducts & JSXBase.HTMLAttributes<HTMLKompasFooterProductsElement>;
            "kompas-footer-supports": LocalJSX.KompasFooterSupports & JSXBase.HTMLAttributes<HTMLKompasFooterSupportsElement>;
            "kompas-header-account": LocalJSX.KompasHeaderAccount & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountElement>;
            "kompas-header-account-help-center": LocalJSX.KompasHeaderAccountHelpCenter & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountHelpCenterElement>;
            "kompas-header-account-menu": LocalJSX.KompasHeaderAccountMenu & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountMenuElement>;
            "kompas-header-account-profile": LocalJSX.KompasHeaderAccountProfile & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountProfileElement>;
            "kompas-paywall": LocalJSX.KompasPaywall & JSXBase.HTMLAttributes<HTMLKompasPaywallElement>;
            "kompas-paywall-banner-registration": LocalJSX.KompasPaywallBannerRegistration & JSXBase.HTMLAttributes<HTMLKompasPaywallBannerRegistrationElement>;
            "kompas-paywall-body": LocalJSX.KompasPaywallBody & JSXBase.HTMLAttributes<HTMLKompasPaywallBodyElement>;
            "kompas-paywall-information-header": LocalJSX.KompasPaywallInformationHeader & JSXBase.HTMLAttributes<HTMLKompasPaywallInformationHeaderElement>;
            "kompas-paywall-meter": LocalJSX.KompasPaywallMeter & JSXBase.HTMLAttributes<HTMLKompasPaywallMeterElement>;
        }
    }
}
