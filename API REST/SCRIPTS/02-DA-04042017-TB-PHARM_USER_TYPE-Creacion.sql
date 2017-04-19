USE [PRESALE_FARM]
GO
-- =============================================
-- Autor:					diego.as
-- Fecha de Creacion: 		4/4/2017 @ A-Team Sprint  
-- Description:			    Tabla para almacenar los Tipos de Usuarios 

/*
-- Ejemplo de Ejecucion:
        SELECT * FROM [presalefarm].[PHARM_USER_TYPE]
*/
-- =============================================
CREATE TABLE [presalefarm].[PHARM_USER_TYPE] (
	ID INT IDENTITY(1,1)
	, [TYPE] VARCHAR(50) NOT NULL
	, DESCRIPTION_TYPE VARCHAR(250)
	, LAST_UPDATE DATETIME
	, PRIMARY KEY(ID,[TYPE])
)

/*

INSERT INTO [presalefarm].[PHARM_USER_TYPE](TYPE, DESCRIPTION_TYPE, LAST_UPDATE) VALUES('VENDEDOR', 'AGENTE VENDEDOR DE PRODUCTOS',GETDATE())

*/