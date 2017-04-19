USE [PRESALE_FARM]
GO
-- =============================================
-- Autor:					diego.as
-- Fecha de Creacion: 		4/4/2017 @ A-Team Sprint  
-- Description:			    Tabla para almacenar a los usuarios

/*
-- Ejemplo de Ejecucion:
        SELECT * FROM [presalefarm].[PHARM_USER]
*/
-- =============================================
CREATE TABLE [presalefarm].[PHARM_USER] (
	ID INT IDENTITY(1,1)
	, FIRST_NAME VARCHAR(150) NOT NULL
	, LAST_NAME VARCHAR(250) NOT NULL
	, EMAIL VARCHAR(100) NOT NULL
	, [TYPE_ID] INT NOT NULL
	, [USER] VARCHAR(50) NOT NULL
	, [PASSWORD] VARCHAR(50) NOT NULL
	, PRIMARY KEY([USER])
)

/*
INSERT INTO [presalefarm].[PHARM_USER](FIRST_NAME, LAST_NAME, EMAIL, [TYPE_ID], [USER], [PASSWORD])
VALUES('Adolfo','Adolfo Mazariegos','diego.as@mobilityscm.com',1,(SELECT CONVERT(VARCHAR(50), HashBytes('MD5', 'diego@pharm'), 2)),(SELECT CONVERT(VARCHAR(50), HashBytes('MD5', '123'), 2)))
*/

