$urls = @(
    "https://www.olympics.com/es/noticias/mundial-ciclismo-ruta-2024-previa-favoritos-recorridos-calendario-como-ver-en-vivo",
    "https://blog.marti.mx/saltos-en-la-gimnasia-artistica-como-se-evaluan/",
    "https://cdag.com.gt/conociendo-el-deporte-tiro-con-arco/"
)

foreach ($url in $urls) {
    Write-Host "`n=== $url ===" -ForegroundColor Cyan
    try {
        $html = (Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 15).Content
        # Buscar og:image
        $ogMatch = [regex]::Match($html, 'og:image[^>]*content="([^"]+)"')
        if ($ogMatch.Success) {
            Write-Host "og:image: $($ogMatch.Groups[1].Value)" -ForegroundColor Green
        }
        # Buscar src de imagenes jpg/png/webp
        $imgMatches = [regex]::Matches($html, 'src="([^"]+\.(jpg|jpeg|png|webp)[^"]*)"')
        $count = 0
        foreach ($m in $imgMatches) {
            if ($count -ge 5) { break }
            Write-Host "img: $($m.Groups[1].Value)"
            $count++
        }
    } catch {
        Write-Host "Error: $_" -ForegroundColor Red
    }
}
