$(function () {
    var countries = [
    {
      "name": "Afghanistan - AFN - Afghani",
      "code": "AFN",
      "country_code": "AF"
    },
    {
      "name": "Åland Islands - EUR - Euro",
      "code": "EUR",
      "country_code": "AX"
    },
    {
      "name": "Albania - ALL - Lek",
      "code": "ALL",
      "country_code": "AL"
    },
    {
      "name": "Algeria - DZD - Algerian Dinar",
      "code": "DZD",
      "country_code": "DZ"
    },
    {
      "name": "American Samoa - USD - US Dollar",
      "code": "USD",
      "country_code": "AS"
    },
    {
      "name": "Andorra - EUR - Euro",
      "code": "EUR",
      "country_code": "AD"
    },
    {
      "name": "Angola - AOA - Kwanza",
      "code": "AOA",
      "country_code": "AO"
    },
    {
      "name": "Anguilla - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "AI"
    },
    {
      "name": "Antarctica - No universal currency",
      "code": "",
      "country_code": "AQ"
    },
    {
      "name": "Antigua and Barbuda - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "AG"
    },
    {
      "name": "Argentina - ARS - Argentine Peso",
      "code": "ARS",
      "country_code": "AR"
    },
    {
      "name": "Armenia - AMD - Armenian Dram",
      "code": "AMD",
      "country_code": "AM"
    },
    {
      "name": "Aruba - AWG - Aruban Florin",
      "code": "AWG",
      "country_code": "AW"
    },
    {
      "name": "Australia - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "AU"
    },
    {
      "name": "Austria - EUR - Euro",
      "code": "EUR",
      "country_code": "AT"
    },
    {
      "name": "Azerbaijan - AZN - Azerbaijanian Manat",
      "code": "AZN",
      "country_code": "AZ"
    },
    {
      "name": "Bahamas - BSD - Bahamian Dollar",
      "code": "BSD",
      "country_code": "BS"
    },
    {
      "name": "Bahrain - BHD - Bahraini Dinar",
      "code": "BHD",
      "country_code": "BH"
    },
    {
      "name": "Bangladesh - BDT - Taka",
      "code": "BDT",
      "country_code": "BD"
    },
    {
      "name": "Barbados - BBD - Barbados Dollar",
      "code": "BBD",
      "country_code": "BB"
    },
    {
      "name": "Belarus - BYR - Belarussian Ruble",
      "code": "BYR",
      "country_code": "BY"
    },
    {
      "name": "Belgium - EUR - Euro",
      "code": "EUR",
      "country_code": "BE"
    },
    {
      "name": "Belize - BZD - Belize Dollar",
      "code": "BZD",
      "country_code": "BZ"
    },
    {
      "name": "Benin - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "BJ"
    },
    {
      "name": "Bermuda - BMD - Bermudian Dollar",
      "code": "BMD",
      "country_code": "BM"
    },
    {
      "name": "Bhutan - INR - Indian Rupee",
      "code": "INR",
      "country_code": "BT"
    },
    {
      "name": "Bolivia, Plurinational State of - BOB - Boliviano",
      "code": "BOB",
      "country_code": "BO"
    },
    {
      "name": "Bosnia and Herzegovina - BAM - Convertible Mark",
      "code": "BAM",
      "country_code": "BA"
    },
    {
      "name": "Botswana - BWP - Pula",
      "code": "BWP",
      "country_code": "BW"
    },
    {
      "name": "Bouvet Island - NOK - Norwegian Krone",
      "code": "NOK",
      "country_code": "BV"
    },
    {
      "name": "Brazil - BRL - Brazilian Real",
      "code": "BRL",
      "country_code": "BR"
    },
    {
      "name": "British Indian Ocean Territory - USD - US Dollar",
      "code": "USD",
      "country_code": "IO"
    },
    {
      "name": "Brunei Darussalam - BND - Brunei Dollar",
      "code": "BND",
      "country_code": "BN"
    },
    {
      "name": "Bulgaria - BGN - Bulgarian Lev",
      "code": "BGN",
      "country_code": "BG"
    },
    {
      "name": "Burkina Faso - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "BF"
    },
    {
      "name": "Burundi - BIF - Burundi Franc",
      "code": "BIF",
      "country_code": "BI"
    },
    {
      "name": "Cambodia - KHR - Riel",
      "code": "KHR",
      "country_code": "KH"
    },
    {
      "name": "Cameroon - XAF - CFA Franc BEAC",
      "code": "XAF",
      "country_code": "CM"
    },
    {
      "name": "Canada - CAD - Canadian Dollar",
      "code": "CAD",
      "country_code": "CA"
    },
    {
      "name": "Cape Verde - CVE - Cabo Verde Escudo",
      "code": "CVE",
      "country_code": "CV"
    },
    {
      "name": "Cayman Islands - KYD - Cayman Islands Dollar",
      "code": "KYD",
      "country_code": "KY"
    },
    {
      "name": "Central African Republic - XAF - CFA Franc BEAC",
      "code": "XAF",
      "country_code": "CF"
    },
    {
      "name": "Chad - XAF - CFA Franc BEAC",
      "code": "XAF",
      "country_code": "TD"
    },
    {
      "name": "Chile - CLP - Chilean Peso",
      "code": "CLP",
      "country_code": "CL"
    },
    {
      "name": "China - CNY - Yuan Renminbi",
      "code": "CNY",
      "country_code": "CN"
    },
    {
      "name": "Christmas Island - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "CX"
    },
    {
      "name": "Cocos (Keeling) Islands - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "CC"
    },
    {
      "name": "Colombia - COP - Colombian Peso",
      "code": "COP",
      "country_code": "CO"
    },
    {
      "name": "Comoros - KMF - Comoro Franc",
      "code": "KMF",
      "country_code": "KM"
    },
    {
      "name": "Congo - XAF - CFA Franc BEAC",
      "code": "XAF",
      "country_code": "CG"
    },
    {
      "name": "Congo, the Democratic Republic of the - CDF - Congolese Franc",
      "code": "",
      "country_code": "CD"
    },
    {
      "name": "Cook Islands - NZD - New Zealand Dollar",
      "code": "NZD",
      "country_code": "CK"
    },
    {
      "name": "Costa Rica - CRC - Costa Rican Colon",
      "code": "CRC",
      "country_code": "CR"
    },
    {
      "name": "Côte d'Ivoire - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "CI"
    },
    {
      "name": "Croatia - HRK - Croatian Kuna",
      "code": "HRK",
      "country_code": "HR"
    },
    {
      "name": "Cuba - CUP - Cuban Peso",
      "code": "CUP",
      "country_code": "CU"
    },
    {
      "name": "Cyprus - EUR - Euro",
      "code": "EUR",
      "country_code": "CY"
    },
    {
      "name": "Czech Republic - CZK - Czech Koruna",
      "code": "CZK",
      "country_code": "CZ"
    },
    {
      "name": "Denmark - DKK - Danish Krone",
      "code": "DKK",
      "country_code": "DK"
    },
    {
      "name": "Djibouti - DJF - Djibouti Franc",
      "code": "DJF",
      "country_code": "DJ"
    },
    {
      "name": "Dominica - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "DM"
    },
    {
      "name": "Dominican Republic - DOP - Dominican Peso",
      "code": "DOP",
      "country_code": "DO"
    },
    {
      "name": "Ecuador - USD - US Dollar",
      "code": "USD",
      "country_code": "EC"
    },
    {
      "name": "Egypt - EGP - Egyptian Pound",
      "code": "EGP",
      "country_code": "EG"
    },
    {
      "name": "El Salvador - USD - US Dollar",
      "code": "USD",
      "country_code": "SV"
    },
    {
      "name": "Equatorial Guinea - XAF - CFA Franc BEAC",
      "code": "XAF",
      "country_code": "GQ"
    },
    {
      "name": "Eritrea - ERN - Nakfa",
      "code": "ERN",
      "country_code": "ER"
    },
    {
      "name": "Estonia - EUR - Euro",
      "code": "EUR",
      "country_code": "EE"
    },
    {
      "name": "Ethiopia - ETB - Ethiopian Birr",
      "code": "ETB",
      "country_code": "ET"
    },
    {
      "name": "Falkland Islands (Malvinas) - FKP - Falkland Islands Pound",
      "code": "FKP",
      "country_code": "FK"
    },
    {
      "name": "Faroe Islands - DKK - Danish Krone",
      "code": "DKK",
      "country_code": "FO"
    },
    {
      "name": "Fiji - FJD - Fiji Dollar",
      "code": "FJD",
      "country_code": "FJ"
    },
    {
      "name": "Finland - EUR - Euro",
      "code": "EUR",
      "country_code": "FI"
    },
    {
      "name": "France - EUR - Euro",
      "code": "EUR",
      "country_code": "FR"
    },
    {
      "name": "French Guiana - EUR - Euro",
      "code": "EUR",
      "country_code": "GF"
    },
    {
      "name": "French Polynesia - XPF - CFP Franc",
      "code": "XPF",
      "country_code": "PF"
    },
    {
      "name": "French Southern Territories - EUR - Euro",
      "code": "EUR",
      "country_code": "TF"
    },
    {
      "name": "Gabon - XAF - CFA Franc BEAC",
      "code": "XAF",
      "country_code": "GA"
    },
    {
      "name": "Gambia - GMD - Dalasi",
      "code": "GMD",
      "country_code": "GM"
    },
    {
      "name": "Georgia - GEL - Lari",
      "code": "GEL",
      "country_code": "GE"
    },
    {
      "name": "Germany - EUR - Euro",
      "code": "EUR",
      "country_code": "DE"
    },
    {
      "name": "Ghana - GHS - Ghana Cedi",
      "code": "GHS",
      "country_code": "GH"
    },
    {
      "name": "Gibraltar - GIP - Gibraltar Pound",
      "code": "GIP",
      "country_code": "GI"
    },
    {
      "name": "Greece - EUR - Euro",
      "code": "EUR",
      "country_code": "GR"
    },
    {
      "name": "Greenland - DKK - Danish Krone",
      "code": "DKK",
      "country_code": "GL"
    },
    {
      "name": "Grenada - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "GD"
    },
    {
      "name": "Guadeloupe - EUR - Euro",
      "code": "EUR",
      "country_code": "GP"
    },
    {
      "name": "Guam - USD - US Dollar",
      "code": "USD",
      "country_code": "GU"
    },
    {
      "name": "Guatemala - GTQ - Quetzal",
      "code": "GTQ",
      "country_code": "GT"
    },
    {
      "name": "Guernsey - GBP - Pound Sterling",
      "code": "GBP",
      "country_code": "GG"
    },
    {
      "name": "Guinea - GNF - Guinea Franc",
      "code": "GNF",
      "country_code": "GN"
    },
    {
      "name": "Guinea-Bissau - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "GW"
    },
    {
      "name": "Guyana - GYD - Guyana Dollar",
      "code": "GYD",
      "country_code": "GY"
    },
    {
      "name": "Haiti - USD - US Dollar",
      "code": "USD",
      "country_code": "HT"
    },
    {
      "name": "Heard Island and McDonald Islands - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "HM"
    },
    {
      "name": "Holy See (Vatican City State) - EUR - Euro",
      "code": "EUR",
      "country_code": "VA"
    },
    {
      "name": "Honduras - HNL - Lempira",
      "code": "HNL",
      "country_code": "HN"
    },
    {
      "name": "Hong Kong - HKD - Hong Kong Dollar",
      "code": "HKD",
      "country_code": "HK"
    },
    {
      "name": "Hungary - HUF - Forint",
      "code": "HUF",
      "country_code": "HU"
    },
    {
      "name": "Iceland - ISK - Iceland Krona",
      "code": "ISK",
      "country_code": "IS"
    },
    {
      "name": "India - INR - Indian Rupee",
      "code": "INR",
      "country_code": "IN"
    },
    {
      "name": "Indonesia - IDR - Rupiah",
      "code": "IDR",
      "country_code": "ID"
    },
    {
      "name": "Iran, Islamic Republic of - IRR - Iranian Rial",
      "code": "IRR",
      "country_code": "IR"
    },
    {
      "name": "Iraq - IQD - Iraqi Dinar",
      "code": "IQD",
      "country_code": "IQ"
    },
    {
      "name": "Ireland - EUR - Euro",
      "code": "EUR",
      "country_code": "IE"
    },
    {
      "name": "Isle of Man - GBP - Pound Sterling",
      "code": "GBP",
      "country_code": "IM"
    },
    {
      "name": "Israel - ILS - New Israeli Sheqel",
      "code": "ILS",
      "country_code": "IL"
    },
    {
      "name": "Italy - EUR - Euro",
      "code": "EUR",
      "country_code": "IT"
    },
    {
      "name": "Jamaica - JMD - Jamaican Dollar",
      "code": "JMD",
      "country_code": "JM"
    },
    {
      "name": "Japan - JPY - Yen",
      "code": "JPY",
      "country_code": "JP"
    },
    {
      "name": "Jersey - GBP - Pound Sterling",
      "code": "GBP",
      "country_code": "JE"
    },
    {
      "name": "Jordan - JOD - Jordanian Dinar",
      "code": "JOD",
      "country_code": "JO"
    },
    {
      "name": "Kazakhstan - KZT - Tenge",
      "code": "KZT",
      "country_code": "KZ"
    },
    {
      "name": "Kenya - KES - Kenyan Shilling",
      "code": "KES",
      "country_code": "KE"
    },
    {
      "name": "Kiribati - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "KI"
    },
    {
      "name": "Korea, Democratic People's Republic of - KPW - North Korean Won",
      "code": "KPW",
      "country_code": "KP"
    },
    {
      "name": "Korea, Republic of - KRW - Won",
      "code": "KRW",
      "country_code": "KR"
    },
    {
      "name": "Kuwait - KWD - Kuwaiti Dinar",
      "code": "KWD",
      "country_code": "KW"
    },
    {
      "name": "Kyrgyzstan - KGS - Som",
      "code": "KGS",
      "country_code": "KG"
    },
    {
      "name": "Lao People's Democratic Republic - LAK - Kip",
      "code": "LAK",
      "country_code": "LA"
    },
    {
      "name": "Latvia - EUR - Euro",
      "code": "EUR",
      "country_code": "LV"
    },
    {
      "name": "Lebanon - LBP - Lebanese Pound",
      "code": "LBP",
      "country_code": "LB"
    },
    {
      "name": "Lesotho - ZAR - Rand",
      "code": "ZAR",
      "country_code": "LS"
    },
    {
      "name": "Liberia - LRD - Liberian Dollar",
      "code": "LRD",
      "country_code": "LR"
    },
    {
      "name": "Libya - LYD - Libyan Dinar",
      "code": "LYD",
      "country_code": "LY"
    },
    {
      "name": "Liechtenstein - CHF - Swiss Franc",
      "code": "CHF",
      "country_code": "LI"
    },
    {
      "name": "Lithuania - EUR - Euro",
      "code": "EUR",
      "country_code": "LT"
    },
    {
      "name": "Luxembourg - EUR - Euro",
      "code": "EUR",
      "country_code": "LU"
    },
    {
      "name": "Macao - MOP - Pataca",
      "code": "MOP",
      "country_code": "MO"
    },
    {
      "name": "Macedonia, the Former Yugoslav Republic of - MKD - Denar",
      "code": "MKD",
      "country_code": "MK"
    },
    {
      "name": "Madagascar - MGA - Malagasy Ariary",
      "code": "MGA",
      "country_code": "MG"
    },
    {
      "name": "Malawi - MWK - Kwacha",
      "code": "MWK",
      "country_code": "MW"
    },
    {
      "name": "Malaysia - MYR - Malaysian Ringgit",
      "code": "MYR",
      "country_code": "MY"
    },
    {
      "name": "Maldives - MVR - Rufiyaa",
      "code": "MVR",
      "country_code": "MV"
    },
    {
      "name": "Mali - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "ML"
    },
    {
      "name": "Malta - EUR - Euro",
      "code": "EUR",
      "country_code": "MT"
    },
    {
      "name": "Marshall Islands - USD - US Dollar",
      "code": "USD",
      "country_code": "MH"
    },
    {
      "name": "Martinique - EUR - Euro",
      "code": "EUR",
      "country_code": "MQ"
    },
    {
      "name": "Mauritania - MRO - Ouguiya",
      "code": "MRO",
      "country_code": "MR"
    },
    {
      "name": "Mauritius - MUR - Mauritius Rupee",
      "code": "MUR",
      "country_code": "MU"
    },
    {
      "name": "Mayotte - EUR - Euro",
      "code": "EUR",
      "country_code": "YT"
    },
    {
      "name": "Mexico - MXN - Mexican Peso",
      "code": "MXN",
      "country_code": "MX"
    },
    {
      "name": "Micronesia, Federated States of - USD - US Dollar",
      "code": "USD",
      "country_code": "FM"
    },
    {
      "name": "Moldova, Republic of - MDL - Moldovan Leu",
      "code": "MDL",
      "country_code": "MD"
    },
    {
      "name": "Monaco - EUR - Euro",
      "code": "EUR",
      "country_code": "MC"
    },
    {
      "name": "Mongolia - MNT - Tugrik",
      "code": "MNT",
      "country_code": "MN"
    },
    {
      "name": "Montserrat - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "MS"
    },
    {
      "name": "Morocco - MAD - Moroccan Dirham",
      "code": "MAD",
      "country_code": "MA"
    },
    {
      "name": "Mozambique - MZN - Mozambique Metical",
      "code": "MZN",
      "country_code": "MZ"
    },
    {
      "name": "Myanmar - MMK - Kyat",
      "code": "MMK",
      "country_code": "MM"
    },
    {
      "name": "Namibia - ZAR - Rand",
      "code": "ZAR",
      "country_code": "NA"
    },
    {
      "name": "Nauru - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "NR"
    },
    {
      "name": "Nepal - NPR - Nepalese Rupee",
      "code": "NPR",
      "country_code": "NP"
    },
    {
      "name": "Netherlands - EUR - Euro",
      "code": "EUR",
      "country_code": "NL"
    },
    {
        "name": "Netherlands Antilles - EUR - Euro",
        "code": "EUR",
        "country_code": "AN"
    },
    {
      "name": "New Caledonia - XPF - CFP Franc",
      "code": "XPF",
      "country_code": "NC"
    },
    {
      "name": "New Zealand - NZD - New Zealand Dollar",
      "code": "NZD",
      "country_code": "NZ"
    },
    {
      "name": "Nicaragua - NIO - Cordoba Oro",
      "code": "NIO",
      "country_code": "NI"
    },
    {
      "name": "Niger - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "NE"
    },
    {
      "name": "Nigeria - NGN - Naira",
      "code": "NGN",
      "country_code": "NG"
    },
    {
      "name": "Niue - NZD - New Zealand Dollar",
      "code": "NZD",
      "country_code": "NU"
    },
    {
      "name": "Norfolk Island - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "NF"
    },
    {
      "name": "Northern Mariana Islands - USD - US Dollar",
      "code": "USD",
      "country_code": "MP"
    },
    {
      "name": "Norway - NOK - Norwegian Krone",
      "code": "NOK",
      "country_code": "NO"
    },
    {
      "name": "Oman - OMR - Rial Omani",
      "code": "OMR",
      "country_code": "OM"
    },
    {
      "name": "Pakistan - PKR - Pakistan Rupee",
      "code": "PKR",
      "country_code": "PK"
    },
    {
      "name": "Palau - USD - US Dollar",
      "code": "USD",
      "country_code": "PW"
    },
    {
      "name": "Palestine, State of - No universal currency",
      "code": "",
      "country_code": "PS"
    },
    {
      "name": "Panama - USD - US Dollar",
      "code": "USD",
      "country_code": "PA"
    },
    {
      "name": "Papua New Guinea - PGK - Kina",
      "code": "PGK",
      "country_code": "PG"
    },
    {
      "name": "Paraguay - PYG - Guarani",
      "code": "PYG",
      "country_code": "PY"
    },
    {
      "name": "Peru - PEN - Nuevo Sol",
      "code": "PEN",
      "country_code": "PE"
    },
    {
      "name": "Philippines - PHP - Philippine Peso",
      "code": "PHP",
      "country_code": "PH"
    },
    {
      "name": "Pitcairn - NZD - New Zealand Dollar",
      "code": "NZD",
      "country_code": "PN"
    },
    {
      "name": "Poland - PLN - Zloty",
      "code": "PLN",
      "country_code": "PL"
    },
    {
      "name": "Portugal - EUR - Euro",
      "code": "EUR",
      "country_code": "PT"
    },
    {
      "name": "Puerto Rico - USD - US Dollar",
      "code": "USD",
      "country_code": "PR"
    },
    {
      "name": "Qatar - QAR - Qatari Rial",
      "code": "QAR",
      "country_code": "QA"
    },
    {
      "name": "Réunion - EUR - Euro",
      "code": "EUR",
      "country_code": "RE"
    },
    {
      "name": "Romania - RON - New Romanian Leu",
      "code": "RON",
      "country_code": "RO"
    },
    {
      "name": "Russian Federation - RUB - Russian Ruble",
      "code": "RUB",
      "country_code": "RU"
    },
    {
      "name": "Rwanda - RWF - Rwanda Franc",
      "code": "RWF",
      "country_code": "RW"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha - SHP - Saint Helena Pound",
      "code": "SHP",
      "country_code": "SH"
    },
    {
      "name": "Saint Kitts and Nevis - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "KN"
    },
    {
      "name": "Saint Lucia - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "LC"
    },
    {
      "name": "Saint Pierre and Miquelon - EUR - Euro",
      "code": "EUR",
      "country_code": "PM"
    },
    {
      "name": "Saint Vincent and the Grenadines - XCD - East Caribbean Dollar",
      "code": "XCD",
      "country_code": "VC"
    },
    {
      "name": "Samoa - WST - Tala",
      "code": "WST",
      "country_code": "WS"
    },
    {
      "name": "San Marino - EUR - Euro",
      "code": "EUR",
      "country_code": "SM"
    },
    {
      "name": "Sao Tome and Principe - STD - Dobra",
      "code": "STD",
      "country_code": "ST"
    },
    {
      "name": "Saudi Arabia - SAR - Saudi Riyal",
      "code": "SAR",
      "country_code": "SA"
    },
    {
      "name": "Senegal - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "SN"
    },
    {
      "name": "Serbia - RSD - Serbian Dinar",
      "code": "RSD",
      "country_code": "RS"
    },
    {
      "name": "Montenegro - EUR - Euro",
      "code": "EUR",
      "country_code": "ME"
    },
    {
      "name": "Seychelles - SCR - Seychelles Rupee",
      "code": "SCR",
      "country_code": "SC"
    },
    {
      "name": "Sierra Leone - SLL - Leone",
      "code": "SLL",
      "country_code": "SL"
    },
    {
      "name": "Singapore - SGD - Singapore Dollar",
      "code": "SGD",
      "country_code": "SG"
    },
    {
      "name": "Slovakia - EUR - Euro",
      "code": "EUR",
      "country_code": "SK"
    },
    {
      "name": "Slovenia - EUR - Euro",
      "code": "EUR",
      "country_code": "SI"
    },
    {
      "name": "Solomon Islands - SBD - Solomon Islands Dollar",
      "code": "SBD",
      "country_code": "SB"
    },
    {
      "name": "Somalia - SOS - Somali Shilling",
      "code": "SOS",
      "country_code": "SO"
    },
    {
      "name": "South Africa - ZAR - Rand",
      "code": "ZAR",
      "country_code": "ZA"
    },
    {
      "name": "South Georgia and the South Sandwich Islands - No universal currency",
      "code": "",
      "country_code": "GS"
    },
    {
      "name": "Spain - EUR - Euro",
      "code": "EUR",
      "country_code": "ES"
    },
    {
      "name": "Sri Lanka - LKR - Sri Lanka Rupee",
      "code": "LKR",
      "country_code": "LK"
    },
    {
      "name": "Sudan - SDG - Sudanese Pound",
      "code": "SDG",
      "country_code": "SD"
    },
    {
      "name": "Suriname - SRD - Surinam Dollar",
      "code": "SRD",
      "country_code": "SR"
    },
    {
      "name": "Svalbard and Jan Mayen - NOK - Norwegian Krone",
      "code": "NOK",
      "country_code": "SJ"
    },
    {
      "name": "Swaziland - SZL - Lilangeni",
      "code": "SZL",
      "country_code": "SZ"
    },
    {
      "name": "Sweden - SEK - Swedish Krona",
      "code": "SEK",
      "country_code": "SE"
    },
    {
      "name": "Switzerland - CHF - Swiss Franc",
      "code": "CHF",
      "country_code": "CH"
    },
    {
      "name": "Syrian Arab Republic - SYP - Syrian Pound",
      "code": "SYP",
      "country_code": "SY"
    },
    {
      "name": "Taiwan, Province of China - TWD - New Taiwan Dollar",
      "code": "TWD",
      "country_code": "TW"
    },
    {
      "name": "Tajikistan - TJS - Somoni",
      "code": "TJS",
      "country_code": "TJ"
    },
    {
      "name": "Tanzania, United Republic of - TZS - Tanzanian Shilling",
      "code": "TZS",
      "country_code": "TZ"
    },
    {
      "name": "Thailand - THB - Baht",
      "code": "THB",
      "country_code": "TH"
    },
    {
      "name": "Timor-Leste - USD - US Dollar",
      "code": "USD",
      "country_code": "TL"
    },
    {
      "name": "Togo - XOF - CFA Franc BCEAO",
      "code": "XOF",
      "country_code": "TG"
    },
    {
      "name": "Tokelau - NZD - New Zealand Dollar",
      "code": "NZD",
      "country_code": "TK"
    },
    {
      "name": "Tonga - TOP - Pa’anga",
      "code": "TOP",
      "country_code": "TO"
    },
    {
      "name": "Trinidad and Tobago - TTD - Trinidad and Tobago Dollar",
      "code": "TTD",
      "country_code": "TT"
    },
    {
      "name": "Tunisia - TND - Tunisian Dinar",
      "code": "TND",
      "country_code": "TN"
    },
    {
      "name": "Turkey - TRY - Turkish Lira",
      "code": "TRY",
      "country_code": "TR"
    },
    {
      "name": "Turkmenistan - TMT - Turkmenistan New Manat",
      "code": "TMT",
      "country_code": "TM"
    },
    {
      "name": "Turks and Caicos Islands - USD - US Dollar",
      "code": "USD",
      "country_code": "TC"
    },
    {
      "name": "Tuvalu - AUD - Australian Dollar",
      "code": "AUD",
      "country_code": "TV"
    },
    {
      "name": "Uganda - UGX - Uganda Shilling",
      "code": "UGX",
      "country_code": "UG"
    },
    {
      "name": "Ukraine - UAH - Hryvnia",
      "code": "UAH",
      "country_code": "UA"
    },
    {
      "name": "United Arab Emirates - AED - UAE Dirham",
      "code": "AED",
      "country_code": "AE"
    },
    {
      "name": "United Kingdom - GBP - Pound Sterling",
      "code": "GBP",
      "country_code": "GB"
    },
    {
      "name": "United States - USD - US Dollar",
      "code": "USD",
      "country_code": "US"
    },
    {
      "name": "United States Minor Outlying Islands - USD - US Dollar",
      "code": "USD",
      "country_code": "UM"
    },
    {
      "name": "Uruguay - UYU - Peso Uruguayo",
      "code": "UYU",
      "country_code": "UY"
    },
    {
      "name": "Uzbekistan - UZS - Uzbekistan Sum",
      "code": "UZS",
      "country_code": "UZ"
    },
    {
      "name": "Vanuatu - VUV - Vatu",
      "code": "VUV",
      "country_code": "VU"
    },
    {
      "name": "Venezuela, Bolivarian Republic of - VEF - Bolivar",
      "code": "VEF",
      "country_code": "VE"
    },
    {
      "name": "Viet Nam - VND - Dong",
      "code": "VND",
      "country_code": "VN"
    },
    {
      "name": "Virgin Islands, British - USD - US Dollar",
      "code": "USD",
      "country_code": "VG"
    },
    {
      "name": "Virgin Islands, U.S. - USD - US Dollar",
      "code": "USD",
      "country_code": "VI"
    },
    {
      "name": "Wallis and Futuna - XPF - CFP Franc",
      "code": "XPF",
      "country_code": "WF"
    },
    {
      "name": "Western Sahara - MAD - Moroccan Dirham",
      "code": "MAD",
      "country_code": "EH"
    },
    {
      "name": "Yemen - YER - Yemeni Rial",
      "code": "YER",
      "country_code": "YE"
    },
    {
      "name": "Zambia - ZMW - Zambian Kwacha",
      "code": "ZMW",
      "country_code": "ZM"
    },
    {
      "name": "Zimbabwe - ZWL - Zimbabwe Dollar",
      "code": "ZWL",
      "country_code": "ZW"
    }
]


    var countryInput = $(document).find('.countrypicker');
    var countryList = "";


    //set defaults
    for (i = 0; i < countryInput.length; i++) {

        //check if flag
        flag = countryInput.eq(i).data('flag');

        if (flag) {
            countryList = "";

            //for each build list with flag
            $.each(countries, function (index, country) {
                var flagIcon = "/static/css/flags/" + country.country_code + ".png";
                countryList += "<option data-country-code='" + country.country_code + "' data-tokens='" + country.code+ " " + country.name + " "+ country.country_code +"' style='padding-left:25px; background-position: 4px 7px; background-image:url(" + flagIcon + ");background-repeat:no-repeat;' value='" + country.code + "'>" + country.name + "</option>";
            });

            //add flags to button
            countryInput.eq(i).on('loaded.bs.select', function (e) {
                var button = $(this).closest('.btn-group').children('.btn');
                button.hide();
                var def = $(this).find(':selected').data('country-code');
                var flagIcon = "/static/css/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");
                button.show();
            });

            //change flag on select change
            countryInput.eq(i).on('change', function () {
                button = $(this).closest('.btn-group').children('.btn');
                def = $(this).find(':selected').data('country-code');
                flagIcon = "/static/css/flags/" + def + ".png";
                button.css("background-size", '20px');
                button.css("background-position", '10px 9px');
                button.css("padding-left", '40px');
                button.css("background-repeat", 'no-repeat');
                button.css("background-image", "url('" + flagIcon + "'");

            });
        }else{
            countryList ="";  
            //for each build list without flag
            $.each(countries, function (index, country) {
                countryList += "<option data-country-code='" + country.code + "' data-tokens='" + country.code + " " + country.name + "' value='" + country.code + "'>" + country.name + "</option>";
            });
            
            
        }
         //append country list
        countryInput.eq(i).html(countryList);
        //check if default
        def = countryInput.eq(i).data('default');
        //if there's a default, set it
        if (def) {
            countryInput.eq(i).val(def);
        }
    }
});