-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Maio-2022 às 16:14
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `solutions`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadfunc`
--

CREATE TABLE `cadfunc` (
  `Id_Usuario` int(10) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Cargo` varchar(30) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Matricula` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estoque`
--

CREATE TABLE `estoque` (
  `Id_Produto` int(10) NOT NULL,
  `Produto` varchar(25) NOT NULL,
  `Quantidade` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `listaos`
--

CREATE TABLE `listaos` (
  `Id_Os` int(10) NOT NULL,
  `Id_Func` int(10) NOT NULL,
  `Assunto` varchar(30) NOT NULL,
  `Descricao` varchar(100) NOT NULL,
  `data` date NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadfunc`
--
ALTER TABLE `cadfunc`
  ADD PRIMARY KEY (`Id_Usuario`);

--
-- Índices para tabela `estoque`
--
ALTER TABLE `estoque`
  ADD PRIMARY KEY (`Id_Produto`);

--
-- Índices para tabela `listaos`
--
ALTER TABLE `listaos`
  ADD PRIMARY KEY (`Id_Os`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
