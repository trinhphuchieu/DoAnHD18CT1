-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 04, 2022 lúc 10:44 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `hd_18ct1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `country`
--

CREATE TABLE `country` (
  `country_code` varchar(10) NOT NULL,
  `country_name` varchar(255) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `currency_name` varchar(255) NOT NULL,
  `dial` varchar(10) NOT NULL,
  `iso3` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `country`
--

INSERT INTO `country` (`country_code`, `country_name`, `currency`, `currency_name`, `dial`, `iso3`) VALUES
('AD', 'Andorra', 'EUR', 'Euro', '376', 'AND'),
('AE', 'United Arab Emirates', 'AED', 'UAE Dirham', '971', 'ARE'),
('AF', 'Afghanistan', 'AFN', 'Afghani', '93', 'AFG'),
('AG', 'Antigua and Barbuda', 'XCD', 'East Caribbean Dollar', '1-268', 'ATG'),
('AI', 'Anguilla', 'XCD', 'East Caribbean Dollar', '1-264', 'AIA'),
('AL', 'Albania', 'ALL', 'Lek', '355', 'ALB'),
('AM', 'Armenia', 'AMD', 'Armenian Dram', '374', 'ARM'),
('AO', 'Angola', 'AOA', 'Kwanza', '244', 'AGO'),
('AQ', 'Antarctica', '', 'No universal currency', '672', 'ATA'),
('AR', 'Argentina', 'ARS', 'Argentine Peso', '54', 'ARG'),
('AS', 'American Samoa', 'USD', 'US Dollar', '1-684', 'ASM'),
('AT', 'Austria', 'EUR', 'Euro', '43', 'AUT'),
('AU', 'Australia', 'AUD', 'Australian Dollar', '61', 'AUS'),
('AW', 'Aruba', 'AWG', 'Aruban Florin', '297', 'ABW'),
('AX', 'Åland Islands', 'EUR', 'Euro', '358', 'ALA'),
('AZ', 'Azerbaijan', 'AZN', 'Azerbaijanian Manat', '994', 'AZE'),
('BA', 'Bosnia and Herzegovina', 'BAM', 'Convertible Mark', '387', 'BIH'),
('BB', 'Barbados', 'BBD', 'Barbados Dollar', '1-246', 'BRB'),
('BD', 'Bangladesh', 'BDT', 'Taka', '880', 'BGD'),
('BE', 'Belgium', 'EUR', 'Euro', '32', 'BEL'),
('BF', 'Burkina Faso', 'XOF', 'CFA Franc BCEAO', '226', 'BFA'),
('BG', 'Bulgaria', 'BGN', 'Bulgarian Lev', '359', 'BGR'),
('BH', 'Bahrain', 'BHD', 'Bahraini Dinar', '973', 'BHR'),
('BI', 'Burundi', 'BIF', 'Burundi Franc', '257', 'BDI'),
('BJ', 'Benin', 'XOF', 'CFA Franc BCEAO', '229', 'BEN'),
('BL', 'Saint Barthélemy', 'EUR', 'Euro', '590', 'BLM'),
('BM', 'Bermuda', 'BMD', 'Bermudian Dollar', '1-441', 'BMU'),
('BN', 'Brunei Darussalam', 'BND', 'Brunei Dollar', '673', 'BRN'),
('BO', 'Bolivia, Plurinational State of', 'BOB', 'Boliviano', '591', 'BOL'),
('BQ', 'Bonaire, Sint Eustatius and Saba', 'USD', 'US Dollar', '599', 'BES'),
('BR', 'Brazil', 'BRL', 'Brazilian Real', '55', 'BRA'),
('BS', 'Bahamas', 'BSD', 'Bahamian Dollar', '1-242', 'BHS'),
('BT', 'Bhutan', 'INR', 'Indian Rupee', '975', 'BTN'),
('BV', 'Bouvet Island', 'NOK', 'Norwegian Krone', '47', 'BVT'),
('BW', 'Botswana', 'BWP', 'Pula', '267', 'BWA'),
('BY', 'Belarus', 'BYR', 'Belarussian Ruble', '375', 'BLR'),
('BZ', 'Belize', 'BZD', 'Belize Dollar', '501', 'BLZ'),
('CA', 'Canada', 'CAD', 'Canadian Dollar', '1', 'CAN'),
('CC', 'Cocos (Keeling) Islands', 'AUD', 'Australian Dollar', '61', 'CCK'),
('CD', 'Congo, the Democratic Republic of the', 'CDF', 'Congolese Franc', '243', 'COD'),
('CF', 'Central African Republic', 'XAF', 'CFA Franc BEAC', '236', 'CAF'),
('CG', 'Congo', 'XAF', 'CFA Franc BEAC', '242', 'COG'),
('CH', 'Switzerland', 'CHF', 'Swiss Franc', '41', 'CHE'),
('CI', 'Côte d\'Ivoire', 'XOF', 'CFA Franc BCEAO', '225', 'CIV'),
('CK', 'Cook Islands', 'NZD', 'New Zealand Dollar', '682', 'COK'),
('CL', 'Chile', 'CLP', 'Chilean Peso', '56', 'CHL'),
('CM', 'Cameroon', 'XAF', 'CFA Franc BEAC', '237', 'CMR'),
('CN', 'China', 'CNY', 'Yuan Renminbi', '86', 'CHN'),
('CO', 'Colombia', 'COP', 'Colombian Peso', '57', 'COL'),
('CR', 'Costa Rica', 'CRC', 'Costa Rican Colon', '506', 'CRI'),
('CU', 'Cuba', 'CUP', 'Cuban Peso', '53', 'CUB'),
('CV', 'Cape Verde', 'CVE', 'Cabo Verde Escudo', '238', 'CPV'),
('CW', 'Curaçao', 'ANG', 'Netherlands Antillean Guilder', '599', 'CUW'),
('CX', 'Christmas Island', 'AUD', 'Australian Dollar', '61', 'CXR'),
('CY', 'Cyprus', 'EUR', 'Euro', '357', 'CYP'),
('CZ', 'Czech Republic', 'CZK', 'Czech Koruna', '420', 'CZE'),
('DE', 'Germany', 'EUR', 'Euro', '49', 'DEU'),
('DJ', 'Djibouti', 'DJF', 'Djibouti Franc', '253', 'DJI'),
('DK', 'Denmark', 'DKK', 'Danish Krone', '45', 'DNK'),
('DM', 'Dominica', 'XCD', 'East Caribbean Dollar', '1-767', 'DMA'),
('DO', 'Dominican Republic', 'DOP', 'Dominican Peso', '1-809', 'DOM'),
('DZ', 'Algeria', 'DZD', 'Algerian Dinar', '213', 'DZA'),
('EC', 'Ecuador', 'USD', 'US Dollar', '593', 'ECU'),
('EE', 'Estonia', 'EUR', 'Euro', '372', 'EST'),
('EG', 'Egypt', 'EGP', 'Egyptian Pound', '20', 'EGY'),
('EH', 'Western Sahara', 'MAD', 'Moroccan Dirham', '212', 'ESH'),
('ER', 'Eritrea', 'ERN', 'Nakfa', '291', 'ERI'),
('ES', 'Spain', 'EUR', 'Euro', '34', 'ESP'),
('ET', 'Ethiopia', 'ETB', 'Ethiopian Birr', '251', 'ETH'),
('FI', 'Finland', 'EUR', 'Euro', '358', 'FIN'),
('FJ', 'Fiji', 'FJD', 'Fiji Dollar', '679', 'FJI'),
('FK', 'Falkland Islands (Malvinas)', 'FKP', 'Falkland Islands Pound', '500', 'FLK'),
('FM', 'Micronesia, Federated States of', 'USD', 'US Dollar', '691', 'FSM'),
('FO', 'Faroe Islands', 'DKK', 'Danish Krone', '298', 'FRO'),
('FR', 'France', 'EUR', 'Euro', '33', 'FRA'),
('GA', 'Gabon', 'XAF', 'CFA Franc BEAC', '241', 'GAB'),
('GB', 'United Kingdom', 'GBP', 'Pound Sterling', '44', 'GBR'),
('GD', 'Grenada', 'XCD', 'East Caribbean Dollar', '1-473', 'GRD'),
('GE', 'Georgia', 'GEL', 'Lari', '995', 'GEO'),
('GF', 'French Guiana', 'EUR', 'Euro', '594', 'GUF'),
('GG', 'Guernsey', 'GBP', 'Pound Sterling', '44', 'GGY'),
('GH', 'Ghana', 'GHS', 'Ghana Cedi', '233', 'GHA'),
('GI', 'Gibraltar', 'GIP', 'Gibraltar Pound', '350', 'GIB'),
('GL', 'Greenland', 'DKK', 'Danish Krone', '299', 'GRL'),
('GM', 'Gambia', 'GMD', 'Dalasi', '220', 'GMB'),
('GN', 'Guinea', 'GNF', 'Guinea Franc', '224', 'GIN'),
('GP', 'Guadeloupe', 'EUR', 'Euro', '590', 'GLP'),
('GQ', 'Equatorial Guinea', 'XAF', 'CFA Franc BEAC', '240', 'GNQ'),
('GR', 'Greece', 'EUR', 'Euro', '30', 'GRC'),
('GS', 'South Georgia and the South Sandwich Islands', '', 'No universal currency', '500', 'SGS'),
('GT', 'Guatemala', 'GTQ', 'Quetzal', '502', 'GTM'),
('GU', 'Guam', 'USD', 'US Dollar', '1-671', 'GUM'),
('GW', 'Guinea-Bissau', 'XOF', 'CFA Franc BCEAO', '245', 'GNB'),
('GY', 'Guyana', 'GYD', 'Guyana Dollar', '592', 'GUY'),
('HK', 'Hong Kong', 'HKD', 'Hong Kong Dollar', '852', 'HKG'),
('HM', 'Heard Island and McDonald Islands', 'AUD', 'Australian Dollar', '672', 'HMD'),
('HN', 'Honduras', 'HNL', 'Lempira', '504', 'HND'),
('HR', 'Croatia', 'HRK', 'Croatian Kuna', '385', 'HRV'),
('HT', 'Haiti', 'USD', 'US Dollar', '509', 'HTI'),
('HU', 'Hungary', 'HUF', 'Forint', '36', 'HUN'),
('ID', 'Indonesia', 'IDR', 'Rupiah', '62', 'IDN'),
('IE', 'Ireland', 'EUR', 'Euro', '353', 'IRL'),
('IL', 'Israel', 'ILS', 'New Israeli Sheqel', '972', 'ISR'),
('IM', 'Isle of Man', 'GBP', 'Pound Sterling', '44', 'IMN'),
('IN', 'India', 'INR', 'Indian Rupee', '91', 'IND'),
('IO', 'British Indian Ocean Territory', 'USD', 'US Dollar', '246', 'IOT'),
('IQ', 'Iraq', 'IQD', 'Iraqi Dinar', '964', 'IRQ'),
('IR', 'Iran, Islamic Republic of', 'IRR', 'Iranian Rial', '98', 'IRN'),
('IS', 'Iceland', 'ISK', 'Iceland Krona', '354', 'ISL'),
('IT', 'Italy', 'EUR', 'Euro', '39', 'ITA'),
('JE', 'Jersey', 'GBP', 'Pound Sterling', '44', 'JEY'),
('JM', 'Jamaica', 'JMD', 'Jamaican Dollar', '1-876', 'JAM'),
('JO', 'Jordan', 'JOD', 'Jordanian Dinar', '962', 'JOR'),
('JP', 'Japan', 'JPY', 'Yen', '81', 'JPN'),
('KE', 'Kenya', 'KES', 'Kenyan Shilling', '254', 'KEN'),
('KG', 'Kyrgyzstan', 'KGS', 'Som', '996', 'KGZ'),
('KH', 'Cambodia', 'KHR', 'Riel', '855', 'KHM'),
('KI', 'Kiribati', 'AUD', 'Australian Dollar', '686', 'KIR'),
('KM', 'Comoros', 'KMF', 'Comoro Franc', '269', 'COM'),
('KN', 'Saint Kitts and Nevis', 'XCD', 'East Caribbean Dollar', '1-869', 'KNA'),
('KP', 'Korea, Democratic People\'s Republic of', 'KPW', 'North Korean Won', '850', 'PRK'),
('KR', 'Korea, Republic of', 'KRW', 'Won', '82', 'KOR'),
('KW', 'Kuwait', 'KWD', 'Kuwaiti Dinar', '965', 'KWT'),
('KY', 'Cayman Islands', 'KYD', 'Cayman Islands Dollar', '1-345', 'CYM'),
('KZ', 'Kazakhstan', 'KZT', 'Tenge', '7', 'KAZ'),
('LA', 'Lao People\'s Democratic Republic', 'LAK', 'Kip', '856', 'LAO'),
('LB', 'Lebanon', 'LBP', 'Lebanese Pound', '961', 'LBN'),
('LC', 'Saint Lucia', 'XCD', 'East Caribbean Dollar', '1-758', 'LCA'),
('LI', 'Liechtenstein', 'CHF', 'Swiss Franc', '423', 'LIE'),
('LK', 'Sri Lanka', 'LKR', 'Sri Lanka Rupee', '94', 'LKA'),
('LR', 'Liberia', 'LRD', 'Liberian Dollar', '231', 'LBR'),
('LS', 'Lesotho', 'ZAR', 'Rand', '266', 'LSO'),
('LT', 'Lithuania', 'EUR', 'Euro', '370', 'LTU'),
('LU', 'Luxembourg', 'EUR', 'Euro', '352', 'LUX'),
('LV', 'Latvia', 'EUR', 'Euro', '371', 'LVA'),
('LY', 'Libya', 'LYD', 'Libyan Dinar', '218', 'LBY'),
('MA', 'Morocco', 'MAD', 'Moroccan Dirham', '212', 'MAR'),
('MC', 'Monaco', 'EUR', 'Euro', '377', 'MCO'),
('MD', 'Moldova, Republic of', 'MDL', 'Moldovan Leu', '373', 'MDA'),
('ME', 'Montenegro', 'EUR', 'Euro', '382', 'MNE'),
('MF', 'Saint Martin (French part)', 'EUR', 'Euro', '590', 'MAF'),
('MG', 'Madagascar', 'MGA', 'Malagasy Ariary', '261', 'MDG'),
('MH', 'Marshall Islands', 'USD', 'US Dollar', '692', 'MHL'),
('MK', 'Macedonia, the Former Yugoslav Republic of', 'MKD', 'Denar', '389', 'MKD'),
('ML', 'Mali', 'XOF', 'CFA Franc BCEAO', '223', 'MLI'),
('MM', 'Myanmar', 'MMK', 'Kyat', '95', 'MMR'),
('MN', 'Mongolia', 'MNT', 'Tugrik', '976', 'MNG'),
('MO', 'Macao', 'MOP', 'Pataca', '853', 'MAC'),
('MP', 'Northern Mariana Islands', 'USD', 'US Dollar', '1-670', 'MNP'),
('MQ', 'Martinique', 'EUR', 'Euro', '596', 'MTQ'),
('MR', 'Mauritania', 'MRO', 'Ouguiya', '222', 'MRT'),
('MS', 'Montserrat', 'XCD', 'East Caribbean Dollar', '1-664', 'MSR'),
('MT', 'Malta', 'EUR', 'Euro', '356', 'MLT'),
('MU', 'Mauritius', 'MUR', 'Mauritius Rupee', '230', 'MUS'),
('MV', 'Maldives', 'MVR', 'Rufiyaa', '960', 'MDV'),
('MW', 'Malawi', 'MWK', 'Kwacha', '265', 'MWI'),
('MX', 'Mexico', 'MXN', 'Mexican Peso', '52', 'MEX'),
('MY', 'Malaysia', 'MYR', 'Malaysian Ringgit', '60', 'MYS'),
('MZ', 'Mozambique', 'MZN', 'Mozambique Metical', '258', 'MOZ'),
('NA', 'Namibia', 'ZAR', 'Rand', '264', 'NAM'),
('NC', 'New Caledonia', 'XPF', 'CFP Franc', '687', 'NCL'),
('NE', 'Niger', 'XOF', 'CFA Franc BCEAO', '227', 'NER'),
('NF', 'Norfolk Island', 'AUD', 'Australian Dollar', '672', 'NFK'),
('NG', 'Nigeria', 'NGN', 'Naira', '234', 'NGA'),
('NI', 'Nicaragua', 'NIO', 'Cordoba Oro', '505', 'NIC'),
('NL', 'Netherlands', 'EUR', 'Euro', '31', 'NLD'),
('NO', 'Norway', 'NOK', 'Norwegian Krone', '47', 'NOR'),
('NP', 'Nepal', 'NPR', 'Nepalese Rupee', '977', 'NPL'),
('NR', 'Nauru', 'AUD', 'Australian Dollar', '674', 'NRU'),
('NU', 'Niue', 'NZD', 'New Zealand Dollar', '683', 'NIU'),
('NZ', 'New Zealand', 'NZD', 'New Zealand Dollar', '64', 'NZL'),
('OM', 'Oman', 'OMR', 'Rial Omani', '968', 'OMN'),
('PA', 'Panama', 'USD', 'US Dollar', '507', 'PAN'),
('PE', 'Peru', 'PEN', 'Nuevo Sol', '51', 'PER'),
('PF', 'French Polynesia', 'XPF', 'CFP Franc', '689', 'PYF'),
('PG', 'Papua New Guinea', 'PGK', 'Kina', '675', 'PNG'),
('PH', 'Philippines', 'PHP', 'Philippine Peso', '63', 'PHL'),
('PK', 'Pakistan', 'PKR', 'Pakistan Rupee', '92', 'PAK'),
('PL', 'Poland', 'PLN', 'Zloty', '48', 'POL'),
('PM', 'Saint Pierre and Miquelon', 'EUR', 'Euro', '508', 'SPM'),
('PN', 'Pitcairn', 'NZD', 'New Zealand Dollar', '870', 'PCN'),
('PR', 'Puerto Rico', 'USD', 'US Dollar', '1', 'PRI'),
('PS', 'Palestine, State of', '', 'No universal currency', '970', 'PSE'),
('PT', 'Portugal', 'EUR', 'Euro', '351', 'PRT'),
('PW', 'Palau', 'USD', 'US Dollar', '680', 'PLW'),
('PY', 'Paraguay', 'PYG', 'Guarani', '595', 'PRY'),
('QA', 'Qatar', 'QAR', 'Qatari Rial', '974', 'QAT'),
('RE', 'Réunion', 'EUR', 'Euro', '262', 'REU'),
('RO', 'Romania', 'RON', 'New Romanian Leu', '40', 'ROU'),
('RS', 'Serbia', 'RSD', 'Serbian Dinar', '381', 'SRB'),
('RU', 'Russian Federation', 'RUB', 'Russian Ruble', '7', 'RUS'),
('RW', 'Rwanda', 'RWF', 'Rwanda Franc', '250', 'RWA'),
('SA', 'Saudi Arabia', 'SAR', 'Saudi Riyal', '966', 'SAU'),
('SB', 'Solomon Islands', 'SBD', 'Solomon Islands Dollar', '677', 'SLB'),
('SC', 'Seychelles', 'SCR', 'Seychelles Rupee', '248', 'SYC'),
('SD', 'Sudan', 'SDG', 'Sudanese Pound', '249', 'SDN'),
('SE', 'Sweden', 'SEK', 'Swedish Krona', '46', 'SWE'),
('SG', 'Singapore', 'SGD', 'Singapore Dollar', '65', 'SGP'),
('SH', 'Saint Helena, Ascension and Tristan da Cunha', 'SHP', 'Saint Helena Pound', '290', 'SHN'),
('SI', 'Slovenia', 'EUR', 'Euro', '386', 'SVN'),
('SJ', 'Svalbard and Jan Mayen', 'NOK', 'Norwegian Krone', '47', 'SJM'),
('SK', 'Slovakia', 'EUR', 'Euro', '421', 'SVK'),
('SL', 'Sierra Leone', 'SLL', 'Leone', '232', 'SLE'),
('SM', 'San Marino', 'EUR', 'Euro', '378', 'SMR'),
('SN', 'Senegal', 'XOF', 'CFA Franc BCEAO', '221', 'SEN'),
('SO', 'Somalia', 'SOS', 'Somali Shilling', '252', 'SOM'),
('SR', 'Suriname', 'SRD', 'Surinam Dollar', '597', 'SUR'),
('SS', 'South Sudan', 'SSP', 'South Sudanese Pound', '211', 'SSD'),
('ST', 'Sao Tome and Principe', 'STD', 'Dobra', '239', 'STP'),
('SV', 'El Salvador', 'USD', 'US Dollar', '503', 'SLV'),
('SX', 'Sint Maarten (Dutch part)', 'ANG', 'Netherlands Antillean Guilder', '1-721', 'SXM'),
('SY', 'Syrian Arab Republic', 'SYP', 'Syrian Pound', '963', 'SYR'),
('SZ', 'Swaziland', 'SZL', 'Lilangeni', '268', 'SWZ'),
('TC', 'Turks and Caicos Islands', 'USD', 'US Dollar', '1-649', 'TCA'),
('TD', 'Chad', 'XAF', 'CFA Franc BEAC', '235', 'TCD'),
('TF', 'French Southern Territories', 'EUR', 'Euro', '262', 'ATF'),
('TG', 'Togo', 'XOF', 'CFA Franc BCEAO', '228', 'TGO'),
('TH', 'Thailand', 'THB', 'Baht', '66', 'THA'),
('TJ', 'Tajikistan', 'TJS', 'Somoni', '992', 'TJK'),
('TK', 'Tokelau', 'NZD', 'New Zealand Dollar', '690', 'TKL'),
('TL', 'Timor-Leste', 'USD', 'US Dollar', '670', 'TLS'),
('TM', 'Turkmenistan', 'TMT', 'Turkmenistan New Manat', '993', 'TKM'),
('TN', 'Tunisia', 'TND', 'Tunisian Dinar', '216', 'TUN'),
('TO', 'Tonga', 'TOP', 'Pa’anga', '676', 'TON'),
('TR', 'Turkey', 'TRY', 'Turkish Lira', '90', 'TUR'),
('TT', 'Trinidad and Tobago', 'TTD', 'Trinidad and Tobago Dollar', '1-868', 'TTO'),
('TV', 'Tuvalu', 'AUD', 'Australian Dollar', '688', 'TUV'),
('TW', 'Taiwan, Province of China', 'TWD', 'New Taiwan Dollar', '886', 'TWN'),
('TZ', 'Tanzania, United Republic of', 'TZS', 'Tanzanian Shilling', '255', 'TZA'),
('UA', 'Ukraine', 'UAH', 'Hryvnia', '380', 'UKR'),
('UG', 'Uganda', 'UGX', 'Uganda Shilling', '256', 'UGA'),
('UM', 'United States Minor Outlying Islands', 'USD', 'US Dollar', '1', 'UMI'),
('UNDEFINED', '', '', '', '', ''),
('US', 'United States', 'USD', 'US Dollar', '1', 'USA'),
('UY', 'Uruguay', 'UYU', 'Peso Uruguayo', '598', 'URY'),
('UZ', 'Uzbekistan', 'UZS', 'Uzbekistan Sum', '998', 'UZB'),
('VA', 'Holy See (Vatican City State)', 'EUR', 'Euro', '39-06', 'VAT'),
('VC', 'Saint Vincent and the Grenadines', 'XCD', 'East Caribbean Dollar', '1-784', 'VCT'),
('VE', 'Venezuela, Bolivarian Republic of', 'VEF', 'Bolivar', '58', 'VEN'),
('VG', 'Virgin Islands, British', 'USD', 'US Dollar', '1-284', 'VGB'),
('VI', 'Virgin Islands, U.S.', 'USD', 'US Dollar', '1-340', 'VIR'),
('VN', 'Viet Nam', 'VND', 'Dong', '84', 'VNM'),
('VU', 'Vanuatu', 'VUV', 'Vatu', '678', 'VUT'),
('WF', 'Wallis and Futuna', 'XPF', 'CFP Franc', '681', 'WLF'),
('WS', 'Samoa', 'WST', 'Tala', '685', 'WSM'),
('YE', 'Yemen', 'YER', 'Yemeni Rial', '967', 'YEM'),
('YT', 'Mayotte', 'EUR', 'Euro', '262', 'MYT'),
('ZA', 'South Africa', 'ZAR', 'Rand', '27', 'ZAF'),
('ZM', 'Zambia', 'ZMW', 'Zambian Kwacha', '260', 'ZMB'),
('ZW', 'Zimbabwe', 'ZWL', 'Zimbabwe Dollar', '263', 'ZWE');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `money`
--

CREATE TABLE `money` (
  `id` int(255) NOT NULL,
  `country_code` varchar(10) NOT NULL,
  `money_price` varchar(50) NOT NULL,
  `money_type` varchar(255) NOT NULL,
  `money_size` varchar(255) NOT NULL,
  `money_feature` text NOT NULL,
  `money_release` date NOT NULL,
  `money_sound` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `money`
--

INSERT INTO `money` (`id`, `country_code`, `money_price`, `money_type`, `money_size`, `money_feature`, `money_release`, `money_sound`) VALUES
(1, 'VN', '100', 'cotton', '120mm x 59mm', '{\r\n \"mauChuDao\": \"Nâu đen\",\r\n  \"matTruoc\": \"Quốc huy\",\r\n  \"matSau\": \"Chùa Phổ Minh\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc01K\",\r\n  \"hinhMatSau\": \"/totien/matSau01K\"\r\n}', '1992-05-02', ''),
(2, 'VN', '200', 'cotton', '130mm x 65mm', '{\r\n \"mauChuDao\": \"Nâu đỏ\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Sản xuất nông nghiệp\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc02K\",\r\n  \"hinhMatSau\": \"/totien/matSau02K\"\r\n}', '1987-09-30', ''),
(3, 'VN', '500', 'cotton', '130mm × 65mm', '{\r\n \"mauChuDao\": \"Đỏ cánh sen\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Cảng Hải Phòng\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc05K\",\r\n  \"hinhMatSau\": \"/totien/matSau05K\"\r\n}', '1989-08-15', ''),
(4, 'VN', '1000', 'cotton', '134mm × 65mm', '{\r\n \"mauChuDao\": \"Xanh nhạt, vàng\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Tây Nguyên\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc1K\",\r\n  \"hinhMatSau\": \"/totien/matSau1K\"\r\n}', '1989-10-20', ''),
(5, 'VN', '2000', 'cotton', '134mm x 65mm', '{\r\n \"mauChuDao\": \"Nâu sẫm\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Nhà máy dệt Nam Định\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc2K\",\r\n  \"hinhMatSau\": \"/totien/matSau2K\"\r\n}', '1989-10-20', ''),
(6, 'VN', '5000', 'cotton', '134mm x 65mm', '{\n \"mauChuDao\": \"Xanh lơ sẫm\",\n  \"matTruoc\": \"Hồ Chí Minh\",\n  \"matSau\": \"Nhà máy thủy điện Trị An\",\n  \"hinhMatTruoc\": \"/totien/matTruoc5K\",\n  \"hinhMatSau\": \"/totien/matSau5K\"\n}', '0000-00-00', ''),
(7, 'VN', '10000', 'polymer', '132mm x 60mm', '{\n \"mauChuDao\": \"Nâu đậm trên nền vàng\",\n  \"matTruoc\": \"Hồ Chí Minh\",\n  \"matSau\": \"Mỏ dầu Bạch Hổ\",\n  \"hinhMatTruoc\": \"/totien/matTruoc10K\",\n  \"hinhMatSau\": \"/totien/matSau10K\"\n}', '2006-08-30', ''),
(8, 'VN', '20000', 'polymer', '136mm x 65mm', '{\r\n \"mauChuDao\": \"Xanh lơ đậm\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Chùa Cầu\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc20K\",\r\n  \"hinhMatSau\": \"/totien/matSau20K\"\r\n}', '2006-05-17', ''),
(9, 'VN', '50000', 'polymer', '140mm x 65mm', '{\n \"mauChuDao\": \"Nâu tím đỏ\",\n  \"matTruoc\": \"Hồ Chí Minh\",\n  \"matSau\": \"Nghênh Lương Đình - Phu Văn Lâu\",\n  \"hinhMatTruoc\": \"/totien/matTruoc50K\",\n  \"hinhMatSau\": \"/totien/matSau50K\"\n}', '2003-12-17', ''),
(10, 'VN', '100000', 'polymer', '144mm x 65mm', '{\r\n \"mauChuDao\": \"Xanh lá cây đậm\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Quốc Tử Giám\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc100K\",\r\n  \"hinhMatSau\": \"/totien/matSau100K\"\r\n}', '2004-09-01', ''),
(11, 'VN', '200000', 'polymer', '148mm x 65mm', '{\r\n \"mauChuDao\": \"Đỏ nâu\",\r\n  \"matTruoc\": \"Hồ Chí Minh\",\r\n  \"matSau\": \"Vịnh Hạ Long\",\r\n  \"hinhMatTruoc\": \"/totien/matTruoc200K\",\r\n  \"hinhMatSau\": \"/totien/matSau200K\"\r\n}', '2006-08-30', ''),
(12, 'VN', '500000', 'polymer', '152mm x 65mm', '{\n \"mauChuDao\": \"Xanh lơ tím sẫm\",\n  \"matTruoc\": \"Hồ Chí Minh\",\n  \"matSau\": \"Ngôi nhà tranh 5 gian tại Làng Sen, Kim Liên, Nam Đàn, Nghệ An\",\n  \"hinhMatTruoc\": \"/totien/matTruoc500K\",\n  \"hinhMatSau\": \"/totien/matSau500K\"\n}', '2003-12-17', '');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_code`);

--
-- Chỉ mục cho bảng `money`
--
ALTER TABLE `money`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_country_code` (`country_code`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `money`
--
ALTER TABLE `money`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `money`
--
ALTER TABLE `money`
  ADD CONSTRAINT `fk_country_code` FOREIGN KEY (`country_code`) REFERENCES `country` (`country_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
