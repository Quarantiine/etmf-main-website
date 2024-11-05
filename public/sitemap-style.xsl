<!-- public/sitemap-style.xsl -->
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" />
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Sitemap</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h1 { color: #333; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
                    th { background-color: #f4f4f4; }
                </style>
            </head>
            <body>
                <h1>XML Sitemap</h1>
                <table>
                    <tr>
                        <th>URL</th>
                        <th>Last Modified</th>
                        <th>Change Frequency</th>
                        <th>Priority</th>
                    </tr>
                    <xsl:for-each select="urlset/url">
                        <tr>
                            <td><xsl:value-of select="loc" /></td>
                            <td><xsl:value-of select="lastmod" /></td>
                            <td><xsl:value-of select="changefreq" /></td>
                            <td><xsl:value-of select="priority" /></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
