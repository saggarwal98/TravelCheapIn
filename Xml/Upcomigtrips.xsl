<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/catalog">
  <html>
  <body>
  <h2>Upcoming Trips</h2>
  <table border="1">
    <tr bgcolor="grey">
      <th>City</th>
      <th>Trip Length</th>
      <th>Package Cost</th>
    </tr>
    <xsl:for-each select="cd">
    <tr>
      <td><xsl:value-of select="city"/></td>
      <td><xsl:value-of select="duration"/></td>
      <td><xsl:value-of select="packcost"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>