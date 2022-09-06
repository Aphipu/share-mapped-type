
const EnabledRegons = {
	"GB": {
		"en": true,
	},
	"IT": {
		"en": true,
		"it": true,
	},
	"PL": {
		"pl": true,
		"en": false,
	},
	"LU": {
		"fr": true,
		"de": true,
		"en": true,
	}
} as const







type MyRegion = 'GB' | 'IT' | 'PL' | 'LU'
type MyLang = 'en' | 'it' | 'pl' | 'fr' | 'de'

type MyLocale = `${MyLang}-${MyRegion}`














type Region = keyof typeof EnabledRegons
type ValueOf<T> = T[keyof T];
type Locale = ValueOf<{[K in Region]: `${keyof typeof EnabledRegons[K] & string}-${K}`}>


type ExcludeFalseValues<T> = {[K in keyof T as T[K] extends true ? K : never]: T[K] }

// const a: {
//     [K in Region]: `${keyof ExcludeFalseValues<typeof EnabledRegons[K]> & string}-${K}`
// } = {
//     GB: "en-GB",
//     IT: "it-IT",
//     LU: "de-LU",
//     PL: "pl-PL",
// }

type Locale2 = ValueOf<{
    [K in Region]: `${keyof ExcludeFalseValues<typeof EnabledRegons[K]> & string}-${K}`
}>

const countryCodeToName1 = (countryCode: string): string => {
	switch (countryCode) {
		case "GB": return "Great Britain";
		case "IT": return "Italy";
		case "PL": return "Poland";
		case "LU": return "Luxembourg";
	}
}


const countryCodeToName2 = (countryCode: keyof typeof EnabledRegons): string => {
	switch (countryCode) {
		case "GB": return "Great Britain";
		case "IT": return "Italy";
		case "PL": return "Poland";
		case "LU": return "Luxembourg";
	}
}
const operationOnLocale = (locale: Locale2): string => {
    switch(locale){
        case "de-LU": return "de.website.lu"
        case "en-GB": return "en.website.gb"
        case "en-IT": return "en.website.it"
        case "en-LU": return "en.website.lu"
        case "fr-LU": return "en.website.lu"
        case "it-IT": return "it.website.it"
        case "pl-PL": return "pu.website.pl"
    }
}
