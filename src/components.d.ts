/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PaywallProduct, Registration } from "./components/kompas-paywall/types";
export namespace Components {
    interface KidMeteredPaywall {
        /**
          * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca. prop paywall_location = The location where user encounter the paywall prop paywall_subscription_package = The name of the subscription package viewed by user prop paywall_subscription_id = The ID of the subscription package viewed by user prop paywall_subscription_price = The price of the subscriprtion package viewed by user prop paywall_position = The position of ther subscription package viewed by user prop tracker_page_type = Type of the page prop tracker_content_id = ID of article (slug) prop tracker_content_type = Whether it's free article or paid article prop tracker_content_title = The title of article prop tracker_content_categories = The category of the content prop tracker_user_type = Type of user based on their subscription prop tracker_subscription_status = Status of their subscription prop tracker_page_domain = Page Domain prop tracker_metered_wall_type = The type of Metered Wall prop tracker_epaper_edition = The edition of epaper viewed by user prop tracker_metered_wall_balance = The balance of their metered wall
         */
        "countdownArticle": number;
        "paywall_location": string;
        "paywall_position": number;
        "paywall_subscription_id": string;
        "paywall_subscription_package": string;
        "paywall_subscription_price": number;
        "tracker_content_categories": string;
        "tracker_content_id": string;
        "tracker_content_title": string;
        "tracker_content_type": string;
        "tracker_metered_wall_balance": number;
        "tracker_metered_wall_type": string;
        "tracker_page_domain": string;
        "tracker_page_type": string;
        "tracker_subscription_status": string;
        "tracker_user_type": string;
    }
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
    interface KompasGracePeriod {
        "isColoumn": boolean;
        "isShowButton": boolean;
        /**
          * prop totalGracePeriod untuk menghitung berapa hari grace period user.
         */
        "totalGracePeriod": number;
    }
    interface KompasHeaderAccount {
        /**
          * Cart Url
         */
        "cartUrl": string;
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
          * Notification Url
         */
        "notificationUrl": string;
        /**
          * Orders Url
         */
        "ordersUrl": string;
        /**
          * Read Later Url
         */
        "readLaterUrl": string;
        /**
          * Value to Add spacing on top of sidebar (will convert to pixel)
         */
        "sidebarTopSpacing": number;
        /**
          * Subscription Url
         */
        "subscriptionUrl": string;
        "totalGracePeriod": number;
        /**
          * Value consist of User Data
         */
        "userData": any;
    }
    interface KompasHeaderAccountHelpCenter {
    }
    interface KompasHeaderAccountMenu {
        /**
          * Cart Url
         */
        "cartUrl": string;
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
          * Notification Url
         */
        "notificationUrl": string;
        /**
          * Orders Url
         */
        "ordersUrl": string;
        /**
          * Read Later Url
         */
        "readLaterUrl": string;
    }
    interface KompasHeaderAccountProfile {
        /**
          * Subscription Url
         */
        "subscriptionUrl": string;
        /**
          * Grace Period
         */
        "totalGracePeriod": number;
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
        "countdownArticle": number;
        "isLogin": boolean;
        "isWithHeader": boolean;
        "paywall_location": string;
        "paywall_position": number;
        "paywall_subscription_id": number;
        "paywall_subscription_package": string;
        "paywall_subscription_price": number;
        "subscriptionStatus": string;
        "swgEnable": boolean;
        "textHeader": string;
        "tracker_content_categories": string;
        "tracker_content_id": string;
        "tracker_content_title": string;
        "tracker_content_type": string;
        "tracker_epaper_edition": string;
        "tracker_metered_wall_balance": number;
        "tracker_metered_wall_type": string;
        "tracker_page_domain": string;
        "tracker_page_type": string;
        "tracker_subscription_status": string;
        "tracker_user_type": string;
        "type": 'epaper' | 'reguler';
        "userGuid": string;
    }
    interface KompasPaywallBannerRegistration {
        "bannerData": Registration | undefined;
    }
    interface KompasPaywallBody {
        "countdownArticle": number;
        "isLogin": boolean;
        "paywallData": PaywallProduct | undefined;
        "paywall_location": string;
        "paywall_position": number;
        "paywall_subscription_id": number;
        "paywall_subscription_package": string;
        "paywall_subscription_price": number;
        "slug": string;
        "subscriptionStatus": string;
        "swgEnable": boolean;
        "tracker_content_categories": string;
        "tracker_content_id": string;
        "tracker_content_title": string;
        "tracker_content_type": string;
        "tracker_epaper_edition": string;
        "tracker_metered_wall_balance": number;
        "tracker_metered_wall_type": string;
        "tracker_page_domain": string;
        "tracker_page_type": string;
        "tracker_subscription_status": string;
        "tracker_user_type": string;
        "type": 'epaper' | 'reguler';
        "userGuid": string;
    }
    interface KompasPaywallInformationHeader {
        "text": string;
    }
    interface KompasPaywallVideo {
        /**
          * prop isLogin untuk menghandle apakah user sudah login atau belum prop paywall_location = The location where user encounter the paywall prop paywall_subscription_package = The name of the subscription package viewed by user prop paywall_subscription_id = The ID of the subscription package viewed by user prop paywall_subscription_price = The price of the subscriprtion package viewed by user prop paywall_position = The position of the subscription package viewed by user prop page_type = Type of the page prop content_id = ID of article (slug) prop content_type = Whether it's free article or paid article prop content_title = The title of article prop tracker_content_categories = The category of the content prop user_type = Type of user based on their subscription prop subscription_status = Status of their subscription prop page_domain = Page Domain prop metered_wall_type = The type of Metered Wall prop metered_wall_balance = The balance of their metered wall
         */
        "isLogin": boolean;
        "paywall_location": string;
        "paywall_position": number;
        "paywall_subscription_id": string;
        "paywall_subscription_package": string;
        "paywall_subscription_price": number;
        "tracker_content_categories": string;
        "tracker_content_id": string;
        "tracker_content_title": string;
        "tracker_content_type": string;
        "tracker_metered_wall_balance": number;
        "tracker_metered_wall_type": string;
        "tracker_page_domain": string;
        "tracker_page_type": string;
        "tracker_subscription_status": string;
        "tracker_user_type": string;
    }
    interface KompasSurveyPopup {
        "isShowPopUp": boolean;
        "surveyUrl": string;
    }
}
declare global {
    interface HTMLKidMeteredPaywallElement extends Components.KidMeteredPaywall, HTMLStencilElement {
    }
    var HTMLKidMeteredPaywallElement: {
        prototype: HTMLKidMeteredPaywallElement;
        new (): HTMLKidMeteredPaywallElement;
    };
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
    interface HTMLKompasGracePeriodElement extends Components.KompasGracePeriod, HTMLStencilElement {
    }
    var HTMLKompasGracePeriodElement: {
        prototype: HTMLKompasGracePeriodElement;
        new (): HTMLKompasGracePeriodElement;
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
    interface HTMLKompasPaywallVideoElement extends Components.KompasPaywallVideo, HTMLStencilElement {
    }
    var HTMLKompasPaywallVideoElement: {
        prototype: HTMLKompasPaywallVideoElement;
        new (): HTMLKompasPaywallVideoElement;
    };
    interface HTMLKompasSurveyPopupElement extends Components.KompasSurveyPopup, HTMLStencilElement {
    }
    var HTMLKompasSurveyPopupElement: {
        prototype: HTMLKompasSurveyPopupElement;
        new (): HTMLKompasSurveyPopupElement;
    };
    interface HTMLElementTagNameMap {
        "kid-metered-paywall": HTMLKidMeteredPaywallElement;
        "kid-paywall": HTMLKidPaywallElement;
        "kid-recommender": HTMLKidRecommenderElement;
        "kompas-footer": HTMLKompasFooterElement;
        "kompas-footer-default": HTMLKompasFooterDefaultElement;
        "kompas-footer-products": HTMLKompasFooterProductsElement;
        "kompas-footer-supports": HTMLKompasFooterSupportsElement;
        "kompas-grace-period": HTMLKompasGracePeriodElement;
        "kompas-header-account": HTMLKompasHeaderAccountElement;
        "kompas-header-account-help-center": HTMLKompasHeaderAccountHelpCenterElement;
        "kompas-header-account-menu": HTMLKompasHeaderAccountMenuElement;
        "kompas-header-account-profile": HTMLKompasHeaderAccountProfileElement;
        "kompas-paywall": HTMLKompasPaywallElement;
        "kompas-paywall-banner-registration": HTMLKompasPaywallBannerRegistrationElement;
        "kompas-paywall-body": HTMLKompasPaywallBodyElement;
        "kompas-paywall-information-header": HTMLKompasPaywallInformationHeaderElement;
        "kompas-paywall-video": HTMLKompasPaywallVideoElement;
        "kompas-survey-popup": HTMLKompasSurveyPopupElement;
    }
}
declare namespace LocalJSX {
    interface KidMeteredPaywall {
        /**
          * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca. prop paywall_location = The location where user encounter the paywall prop paywall_subscription_package = The name of the subscription package viewed by user prop paywall_subscription_id = The ID of the subscription package viewed by user prop paywall_subscription_price = The price of the subscriprtion package viewed by user prop paywall_position = The position of ther subscription package viewed by user prop tracker_page_type = Type of the page prop tracker_content_id = ID of article (slug) prop tracker_content_type = Whether it's free article or paid article prop tracker_content_title = The title of article prop tracker_content_categories = The category of the content prop tracker_user_type = Type of user based on their subscription prop tracker_subscription_status = Status of their subscription prop tracker_page_domain = Page Domain prop tracker_metered_wall_type = The type of Metered Wall prop tracker_epaper_edition = The edition of epaper viewed by user prop tracker_metered_wall_balance = The balance of their metered wall
         */
        "countdownArticle"?: number;
        "paywall_location"?: string;
        "paywall_position"?: number;
        "paywall_subscription_id"?: string;
        "paywall_subscription_package"?: string;
        "paywall_subscription_price"?: number;
        "tracker_content_categories"?: string;
        "tracker_content_id"?: string;
        "tracker_content_title"?: string;
        "tracker_content_type"?: string;
        "tracker_metered_wall_balance"?: number;
        "tracker_metered_wall_type"?: string;
        "tracker_page_domain"?: string;
        "tracker_page_type"?: string;
        "tracker_subscription_status"?: string;
        "tracker_user_type"?: string;
    }
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
    interface KompasGracePeriod {
        "isColoumn"?: boolean;
        "isShowButton"?: boolean;
        /**
          * prop totalGracePeriod untuk menghitung berapa hari grace period user.
         */
        "totalGracePeriod"?: number;
    }
    interface KompasHeaderAccount {
        /**
          * Cart Url
         */
        "cartUrl"?: string;
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
          * Notification Url
         */
        "notificationUrl"?: string;
        /**
          * Orders Url
         */
        "ordersUrl"?: string;
        /**
          * Read Later Url
         */
        "readLaterUrl"?: string;
        /**
          * Value to Add spacing on top of sidebar (will convert to pixel)
         */
        "sidebarTopSpacing"?: number;
        /**
          * Subscription Url
         */
        "subscriptionUrl"?: string;
        "totalGracePeriod"?: number;
        /**
          * Value consist of User Data
         */
        "userData": any;
    }
    interface KompasHeaderAccountHelpCenter {
    }
    interface KompasHeaderAccountMenu {
        /**
          * Cart Url
         */
        "cartUrl"?: string;
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
          * Notification Url
         */
        "notificationUrl"?: string;
        /**
          * Orders Url
         */
        "ordersUrl"?: string;
        /**
          * Read Later Url
         */
        "readLaterUrl"?: string;
    }
    interface KompasHeaderAccountProfile {
        /**
          * Subscription Url
         */
        "subscriptionUrl"?: string;
        /**
          * Grace Period
         */
        "totalGracePeriod"?: number;
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
        "countdownArticle"?: number;
        "isLogin"?: boolean;
        "isWithHeader"?: boolean;
        "paywall_location"?: string;
        "paywall_position"?: number;
        "paywall_subscription_id"?: number;
        "paywall_subscription_package"?: string;
        "paywall_subscription_price"?: number;
        "subscriptionStatus"?: string;
        "swgEnable"?: boolean;
        "textHeader"?: string;
        "tracker_content_categories"?: string;
        "tracker_content_id"?: string;
        "tracker_content_title"?: string;
        "tracker_content_type"?: string;
        "tracker_epaper_edition"?: string;
        "tracker_metered_wall_balance"?: number;
        "tracker_metered_wall_type"?: string;
        "tracker_page_domain"?: string;
        "tracker_page_type"?: string;
        "tracker_subscription_status"?: string;
        "tracker_user_type"?: string;
        "type"?: 'epaper' | 'reguler';
        "userGuid"?: string;
    }
    interface KompasPaywallBannerRegistration {
        "bannerData"?: Registration | undefined;
    }
    interface KompasPaywallBody {
        "countdownArticle"?: number;
        "isLogin"?: boolean;
        "paywallData"?: PaywallProduct | undefined;
        "paywall_location"?: string;
        "paywall_position"?: number;
        "paywall_subscription_id"?: number;
        "paywall_subscription_package"?: string;
        "paywall_subscription_price"?: number;
        "slug"?: string;
        "subscriptionStatus"?: string;
        "swgEnable"?: boolean;
        "tracker_content_categories"?: string;
        "tracker_content_id"?: string;
        "tracker_content_title"?: string;
        "tracker_content_type"?: string;
        "tracker_epaper_edition"?: string;
        "tracker_metered_wall_balance"?: number;
        "tracker_metered_wall_type"?: string;
        "tracker_page_domain"?: string;
        "tracker_page_type"?: string;
        "tracker_subscription_status"?: string;
        "tracker_user_type"?: string;
        "type"?: 'epaper' | 'reguler';
        "userGuid"?: string;
    }
    interface KompasPaywallInformationHeader {
        "text"?: string;
    }
    interface KompasPaywallVideo {
        /**
          * prop isLogin untuk menghandle apakah user sudah login atau belum prop paywall_location = The location where user encounter the paywall prop paywall_subscription_package = The name of the subscription package viewed by user prop paywall_subscription_id = The ID of the subscription package viewed by user prop paywall_subscription_price = The price of the subscriprtion package viewed by user prop paywall_position = The position of the subscription package viewed by user prop page_type = Type of the page prop content_id = ID of article (slug) prop content_type = Whether it's free article or paid article prop content_title = The title of article prop tracker_content_categories = The category of the content prop user_type = Type of user based on their subscription prop subscription_status = Status of their subscription prop page_domain = Page Domain prop metered_wall_type = The type of Metered Wall prop metered_wall_balance = The balance of their metered wall
         */
        "isLogin"?: boolean;
        "paywall_location"?: string;
        "paywall_position"?: number;
        "paywall_subscription_id"?: string;
        "paywall_subscription_package"?: string;
        "paywall_subscription_price"?: number;
        "tracker_content_categories"?: string;
        "tracker_content_id"?: string;
        "tracker_content_title"?: string;
        "tracker_content_type"?: string;
        "tracker_metered_wall_balance"?: number;
        "tracker_metered_wall_type"?: string;
        "tracker_page_domain"?: string;
        "tracker_page_type"?: string;
        "tracker_subscription_status"?: string;
        "tracker_user_type"?: string;
    }
    interface KompasSurveyPopup {
        "isShowPopUp"?: boolean;
        "surveyUrl"?: string;
    }
    interface IntrinsicElements {
        "kid-metered-paywall": KidMeteredPaywall;
        "kid-paywall": KidPaywall;
        "kid-recommender": KidRecommender;
        "kompas-footer": KompasFooter;
        "kompas-footer-default": KompasFooterDefault;
        "kompas-footer-products": KompasFooterProducts;
        "kompas-footer-supports": KompasFooterSupports;
        "kompas-grace-period": KompasGracePeriod;
        "kompas-header-account": KompasHeaderAccount;
        "kompas-header-account-help-center": KompasHeaderAccountHelpCenter;
        "kompas-header-account-menu": KompasHeaderAccountMenu;
        "kompas-header-account-profile": KompasHeaderAccountProfile;
        "kompas-paywall": KompasPaywall;
        "kompas-paywall-banner-registration": KompasPaywallBannerRegistration;
        "kompas-paywall-body": KompasPaywallBody;
        "kompas-paywall-information-header": KompasPaywallInformationHeader;
        "kompas-paywall-video": KompasPaywallVideo;
        "kompas-survey-popup": KompasSurveyPopup;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kid-metered-paywall": LocalJSX.KidMeteredPaywall & JSXBase.HTMLAttributes<HTMLKidMeteredPaywallElement>;
            "kid-paywall": LocalJSX.KidPaywall & JSXBase.HTMLAttributes<HTMLKidPaywallElement>;
            "kid-recommender": LocalJSX.KidRecommender & JSXBase.HTMLAttributes<HTMLKidRecommenderElement>;
            "kompas-footer": LocalJSX.KompasFooter & JSXBase.HTMLAttributes<HTMLKompasFooterElement>;
            "kompas-footer-default": LocalJSX.KompasFooterDefault & JSXBase.HTMLAttributes<HTMLKompasFooterDefaultElement>;
            "kompas-footer-products": LocalJSX.KompasFooterProducts & JSXBase.HTMLAttributes<HTMLKompasFooterProductsElement>;
            "kompas-footer-supports": LocalJSX.KompasFooterSupports & JSXBase.HTMLAttributes<HTMLKompasFooterSupportsElement>;
            "kompas-grace-period": LocalJSX.KompasGracePeriod & JSXBase.HTMLAttributes<HTMLKompasGracePeriodElement>;
            "kompas-header-account": LocalJSX.KompasHeaderAccount & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountElement>;
            "kompas-header-account-help-center": LocalJSX.KompasHeaderAccountHelpCenter & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountHelpCenterElement>;
            "kompas-header-account-menu": LocalJSX.KompasHeaderAccountMenu & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountMenuElement>;
            "kompas-header-account-profile": LocalJSX.KompasHeaderAccountProfile & JSXBase.HTMLAttributes<HTMLKompasHeaderAccountProfileElement>;
            "kompas-paywall": LocalJSX.KompasPaywall & JSXBase.HTMLAttributes<HTMLKompasPaywallElement>;
            "kompas-paywall-banner-registration": LocalJSX.KompasPaywallBannerRegistration & JSXBase.HTMLAttributes<HTMLKompasPaywallBannerRegistrationElement>;
            "kompas-paywall-body": LocalJSX.KompasPaywallBody & JSXBase.HTMLAttributes<HTMLKompasPaywallBodyElement>;
            "kompas-paywall-information-header": LocalJSX.KompasPaywallInformationHeader & JSXBase.HTMLAttributes<HTMLKompasPaywallInformationHeaderElement>;
            "kompas-paywall-video": LocalJSX.KompasPaywallVideo & JSXBase.HTMLAttributes<HTMLKompasPaywallVideoElement>;
            "kompas-survey-popup": LocalJSX.KompasSurveyPopup & JSXBase.HTMLAttributes<HTMLKompasSurveyPopupElement>;
        }
    }
}
