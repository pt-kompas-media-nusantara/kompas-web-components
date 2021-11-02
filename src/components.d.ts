/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
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
    interface HTMLElementTagNameMap {
        "kid-paywall": HTMLKidPaywallElement;
        "kid-recommender": HTMLKidRecommenderElement;
        "kompas-footer": HTMLKompasFooterElement;
        "kompas-footer-default": HTMLKompasFooterDefaultElement;
        "kompas-footer-products": HTMLKompasFooterProductsElement;
        "kompas-footer-supports": HTMLKompasFooterSupportsElement;
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
    }
    interface IntrinsicElements {
        "kid-paywall": KidPaywall;
        "kid-recommender": KidRecommender;
        "kompas-footer": KompasFooter;
        "kompas-footer-default": KompasFooterDefault;
        "kompas-footer-products": KompasFooterProducts;
        "kompas-footer-supports": KompasFooterSupports;
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
        }
    }
}
