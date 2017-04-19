USE [PRESALE_FARM]
GO
-- =============================================
-- Autor:				diego.as
-- Fecha de Creacion: 	4/4/2017 @ A-TEAM Sprint  
-- Description:			Sp que obtiene TODOS los SKU's o Uno en especifico

/*
-- Ejemplo de Ejecucion:
				EXEC [presalefarm].[PHARM_GET_SKU]
				--
				[presalefarm].[PHARM_GET_SKU]
				@CODE_SKU = '10001'
*/
-- =============================================
CREATE PROCEDURE [presalefarm].[PHARM_GET_SKU](
	@CODE_SKU VARCHAR(150) = NULL	
)
AS
BEGIN
	SET NOCOUNT ON;
	--
	SELECT [ID]
			,[CODE_SKU]
			,[DESCRIPTION_SKU]
			,[HANDLE_SERIAL] 
	FROM [presalefarm].[PRODUCT_CATALOG] AS P
	WHERE @CODE_SKU IS NULL OR P.[CODE_SKU] = @CODE_SKU
END

GO
