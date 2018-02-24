--
-- Table structure `APP_AUDIT`
--

CREATE TABLE IF NOT EXISTS `APP_AUDIT` (
  `TAS_UID` varchar(32) NOT NULL,
  `APP_DATA` mediumtext NOT NULL,
  `DYN_CONTENT` mediumtext NOT NULL,
  `APP_UID` varchar(32) NOT NULL,
  PRIMARY KEY (`TAS_UID`,`APP_UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
