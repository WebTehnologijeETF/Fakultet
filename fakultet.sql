-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 17, 2015 at 08:16 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `fakultet`
--

-- --------------------------------------------------------

--
-- Table structure for table `komentar`
--

CREATE TABLE IF NOT EXISTS `komentar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vijest` int(11) NOT NULL,
  `autor` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vijest` (`vijest`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `komentar`
--

INSERT INTO `komentar` (`id`, `vijest`, `autor`, `tekst`, `vrijeme`, `email`) VALUES
(2, 3, 'Dina', 'Čestitke :)', '2015-05-27 09:58:43', 'dahmic1@etf.unsa.ba'),
(7, 2, 'Dina', 'Sretno!', '2015-05-27 11:16:56', 'dahmic1@etf.unsa.ba');

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE IF NOT EXISTS `korisnik` (
  `username` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_slovenian_ci NOT NULL,
  `tip` varchar(13) COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`username`, `password`, `email`, `tip`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3', 'dahmic1@etf.unsa.ba', 'administrator'),
('dina', 'e274648aed611371cf5c30a30bbe1d65', 'dahmic1@etf.unsa.ba', 'administrator');

-- --------------------------------------------------------

--
-- Table structure for table `novost`
--

CREATE TABLE IF NOT EXISTS `novost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naslov` varchar(100) COLLATE utf8_slovenian_ci NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `autor` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `detaljnije` text COLLATE utf8_slovenian_ci,
  `slika` varchar(50) COLLATE utf8_slovenian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `novost`
--

INSERT INTO `novost` (`id`, `naslov`, `tekst`, `autor`, `vrijeme`, `detaljnije`, `slika`) VALUES
(1, 'KONKURS ZA IZBOR AKADEMSKOG OSOBLJA', 'IT Fakultet raspisuje \r\nKonkurs za izbor akademskog osoblja za I i II ciklus studija.\r\n\r\nUvjeti:\r\nPored općih zakonskih uvjeta, kandidat treba da ispunjava uvjete utvrđene Zakonom o visokom obrazovanju.', 'Dina Ahmić', '2015-05-26 19:11:49', 'Pored općih zakonskih uvjeta, kandidat treba da ispunjava uvjete utvrđene Zakonom o visokom obrazovanju.\r\nPored općih zakonskih uvjeta, kandidat treba da ispunjava uvjete utvrđene Zakonom o visokom obrazovanju.\r\nPored općih zakonskih uvjeta, kandidat treba da ispunjava uvjete utvrđene Zakonom o visokom obrazovanju.', 'slike/_novost3_final.jpg'),
(2, 'ODBRANA MAGISTARSKOG RADA', 'IT Fakultet obavještava \r\n20. aprila 2015. godine, sa početkom u 10 sati, u prostorijama fakulteta, sala S1, kandidat A.A. će braniti magistarski rad...', 'Dina Ahmić', '2015-05-26 20:31:22', NULL, 'slike/_novost1_final.jpg'),
(3, 'ODBRANA MAGISTARSKOG RADA', 'IT Fakultet obavještava \r\n20. juna 2015. godine, sa početkom u 10 sati, u prostorijama fakulteta, sala S1, kandidat D.D. će braniti magistarski rad...', 'Dina Ahmić', '2015-05-26 20:32:07', NULL, 'slike/_novost1_final.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `komentar`
--
ALTER TABLE `komentar`
  ADD CONSTRAINT `komentar_ibfk_1` FOREIGN KEY (`vijest`) REFERENCES `novost` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
