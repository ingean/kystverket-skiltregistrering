var baseURL = "https://ingean.github.io/kystverket-skiltregistrering/bilder/"
var suffix = ".jpg"

var dir = $feature.Oppsett
var tag = IIf(dir == 'Vertikalt', '</tr><tr>', '')

var signFeatures = FeatureSetByRelationshipName($feature, "Hovedskilt")

function createIMG(signType, height) {
  signType = Replace(signType, ' ', '_')
  signType = Replace(signType, ',', '')
  
  var url =  baseURL + signType + suffix 
  return "<img src='" + url +"' height='" + height + "' />"
}

function createSubSignHTML(f) {
  var imgURL = "https://ingean.github.io/kystverket-skiltregistrering/bilder/Underskilt_liten.jpg"
  var style = `font-weight:bold;
             font-size: 10px;
             text-align: center;
             padding: 5px 0px;
             width:94px;height:28px;
             background-image: url(${imgURL});
             background-repeat: no-repeat;`


  var signText = f.Tekst
  return `<div style='${style}'>${signText}</div>`
}

var html = "<table><tr>"

for (var sign in signFeatures) {
  html += "<td><table><tr><td>" + createIMG(sign.Type, 94) + "</td></tr>"

  var subsignFeatures = FeatureSetByRelationshipName(sign, "Underskilt")

  for (var subsign in subsignFeatures) {
    html += "<tr><td>" + createSubSignHTML(subsign) + "</td></tr>"
  }

  html += "</table></td>" + tag
}

html += "</tr></table>"

return { 
	type : 'text', 
	text : html
}