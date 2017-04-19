USE [PRESALE_FARM]
GO
-- =============================================
-- Autor:				diego.as
-- Fecha de Creacion: 	4/4/2017 @ A-TEAM Sprint  
-- Description:			SP que permite hacer el loguin del usuario

/*
-- Ejemplo de Ejecucion:
				EXEC [presalefarm].[PHARM_SP_LOGUIN_USER]
				@USER=''
				,@PASSWORD=''
*/
-- =============================================
CREATE PROCEDURE [presalefarm].[PHARM_SP_LOGUIN_USER](
	@USER VARCHAR(50)
	, @PASSWORD VARCHAR(50)
)
AS
BEGIN
	SET NOCOUNT ON;
	--
	SELECT [ID]
			,[FIRST_NAME]
			,[LAST_NAME]
			,[EMAIL]
			,[TYPE_ID]
			,[USER]
			,[PASSWORD] 
	FROM [presalefarm].[PHARM_USER] AS [PU]
	WHERE [PU].[USER] = @USER
		AND [PU].[PASSWORD] = @PASSWORD
	--
END

GO
