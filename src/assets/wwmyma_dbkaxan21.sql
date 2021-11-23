-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2021 a las 17:20:47
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wwmyma_dbkaxan21`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_regadmin`
--

CREATE TABLE `tbl_regadmin` (
  `nId` int(11) NOT NULL,
  `cCorreo` varchar(200) NOT NULL,
  `cPassword` varchar(20) NOT NULL,
  `cCodigo` varchar(10) NOT NULL,
  `cFecha` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_regadmin`
--

INSERT INTO `tbl_regadmin` (`nId`, `cCorreo`, `cPassword`, `cCodigo`, `cFecha`) VALUES
(1, 'brandon@gmail.com', '234ASas@', '40121', ''),
(2, 'bandon1@gmial.com', '234ASas@3', '14322', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_registro`
--

CREATE TABLE `tbl_registro` (
  `nId` int(11) NOT NULL,
  `cTipoLogin` varchar(10) NOT NULL,
  `cNombre` varchar(100) NOT NULL,
  `cApellidos` varchar(100) NOT NULL,
  `cUsuario` varchar(20) NOT NULL,
  `cCorreo` varchar(50) NOT NULL,
  `cContrasena` varchar(20) NOT NULL,
  `cFechaNac` varchar(10) NOT NULL,
  `cEdad` varchar(3) NOT NULL,
  `cGenero` varchar(20) NOT NULL,
  `cTelefono` varchar(15) NOT NULL,
  `cCelular` varchar(15) NOT NULL,
  `cCalle` varchar(50) NOT NULL,
  `cNumExt` varchar(5) NOT NULL,
  `cNumInt` varchar(5) NOT NULL,
  `cColonia` varchar(80) NOT NULL,
  `cCodpos` varchar(7) NOT NULL,
  `cEstado` varchar(80) NOT NULL,
  `cAlcaldia` varchar(80) NOT NULL,
  `cImagen` varchar(80) NOT NULL,
  `cAviso` varchar(2) NOT NULL,
  `cTercon` varchar(2) NOT NULL,
  `cTipoUser` varchar(15) NOT NULL,
  `cDia` varchar(10) NOT NULL,
  `cFecha` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_registro`
--

INSERT INTO `tbl_registro` (`nId`, `cTipoLogin`, `cNombre`, `cApellidos`, `cUsuario`, `cCorreo`, `cContrasena`, `cFechaNac`, `cEdad`, `cGenero`, `cTelefono`, `cCelular`, `cCalle`, `cNumExt`, `cNumInt`, `cColonia`, `cCodpos`, `cEstado`, `cAlcaldia`, `cImagen`, `cAviso`, `cTercon`, `cTipoUser`, `cDia`, `cFecha`) VALUES
(1, 'web', 'uriel', 'yepez', 'nuyc', 'brandon@gmail.com', 'asd', '', '', '', '', '', '', '', '', '', '', '', '', 'nuyc.jpg', '', '', 'SA', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_regadmin`
--
ALTER TABLE `tbl_regadmin`
  ADD PRIMARY KEY (`nId`);

--
-- Indices de la tabla `tbl_registro`
--
ALTER TABLE `tbl_registro`
  ADD PRIMARY KEY (`nId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_regadmin`
--
ALTER TABLE `tbl_regadmin`
  MODIFY `nId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tbl_registro`
--
ALTER TABLE `tbl_registro`
  MODIFY `nId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
