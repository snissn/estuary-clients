function Get-FunctionsToExport {
    [CmdletBinding()]
    Param (
        [Parameter(Mandatory = $true, ValueFromPipelineByPropertyName = $true)]
        [ValidateNotNullOrEmpty()]
        [Alias('FullName')]
        $Path
    )

    Process {
        $Token = $null
        $ParserErr = $null

        $Ast = [System.Management.Automation.Language.Parser]::ParseFile(
            $Path,
            [ref]$Token,
            [ref]$ParserErr
        )

        if ($ParserErr) {
            throw $ParserErr
        } else {
            foreach ($name in 'Begin', 'Process', 'End') {
	            foreach ($Statement in $Ast."${name}Block".Statements) {
		            if (
                        [String]::IsNullOrWhiteSpace($Statement.Name) -or
                        $Statement.Extent.ToString() -notmatch
                        ('function\W+{0}' -f $Statement.Name)
                    ) {
			            continue
		            }

		            $Statement.Name
	            }
            }
        }
    }
}

$ScriptDir = Split-Path $script:MyInvocation.MyCommand.Path
$ClientPath = ("$ScriptDir\csharp\SwaggerClient" | Resolve-Path).ProviderPath
$FunctionPath = 'API', 'Model' | ForEach-Object {Join-Path "$ScriptDir\src\estuary-client\" $_}
$BinPath = "$ScriptDir\src\estuary-client\Bin"

Start-Process -FilePath "$ClientPath\build.bat" -WorkingDirectory $ClientPath -Wait -NoNewWindow

if (!(Test-Path "$ScriptDir\src\estuary-client\Bin" -PathType Container)) {
    New-Item "$ScriptDir\src\estuary-client\Bin" -ItemType Directory > $null
}

Copy-Item "$ClientPath\bin\*.dll" $BinPath

$Manifest = @{
    Path = "$ScriptDir\src\estuary-client\estuary-client.psd1"

    Author = 'Swagger Codegen Team'
    CompanyName = 'swagger.io'
    Description = 'estuary-client - the PowerShell module for Estuary API'

    RootModule = 'estuary-client.psm1'
    Guid = '{5BAF14B7-78C7-451D-BC2C-FC1A0FA16DA2}' # Has to be static, otherwise each new build will be considered different module

    PowerShellVersion = '3.0'

    RequiredAssemblies = Get-ChildItem "$BinPath\*.dll" | ForEach-Object {
        Join-Path $_.Directory.Name $_.Name
    }

    FunctionsToExport = $FunctionPath | Get-ChildItem -Filter *.ps1 | Get-FunctionsToExport

    VariablesToExport = @()
    AliasesToExport = @()
    CmdletsToExport = @()

    # Should we use prefix to prevent command name collisions?
    # https://www.sapien.com/blog/2016/02/15/use-prefixes-to-prevent-command-name-collision/
    #
    # Kirk Munro recommends against it:
    # https://www.sapien.com/blog/2016/02/15/use-prefixes-to-prevent-command-name-collision/#comment-20820
    #
    # If not, we'd need to generate functions name with prefix.
    #
    # DefaultCommandPrefix = 'PetStore'
}

New-ModuleManifest @Manifest
