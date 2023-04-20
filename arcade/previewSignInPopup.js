var baseURL = "https://ingean.github.io/kystverket-skiltregistrering/bilder/"
var suffix = ".jpg"

var symbolImgUrls = {
  "Fartsgrense": "https://ingean.github.io/kystverket-skiltregistrering/bilder/Fartsgrense_blank.jpg",
  "Horisontal_klaring": "https://ingean.github.io/kystverket-skiltregistrering/bilder/Horisontal_klaring_blank.jpg",
  "Vertikal_klaring": "https://ingean.github.io/kystverket-skiltregistrering/bilder/Vertikal_klaring_blank.jpg",
  "Underskilt": "https://ingean.github.io/kystverket-skiltregistrering/bilder/Underskilt_liten.jpg",
}

var symbolStyles = {
  "Fartsgrense": `font-weight:bold;
                 font-size: 60px;
                 text-align: center;
                 padding: 0px 0px;
                 width:94px;height:94px;
                 box-sizing:border-box;
                 background-image: url(${symbolImgUrls["Fartsgrense"]});
                 background-repeat: no-repeat;`,
  "Horisontal_klaring": `font-weight:bold;
                         font-size: 30px;
                         text-align: center;
                         padding: 25px 0px;
                         width:94px;height:94px;
                         box-sizing:border-box;
                         background-image: url(${symbolImgUrls["Horisontal_klaring"]});
                         background-repeat: no-repeat;`,
  "Vertikal_klaring": `font-weight:bold;
                       font-size: 30px;
                       text-align: center;
                       padding: 25px 0px;
                       width:94px;height:94px;
                       box-sizing:border-box;
                       background-image: url(${symbolImgUrls["Vertikal_klaring"]});
                       background-repeat: no-repeat;`,
  "Underskilt": `font-weight:bold;
                 font-size: 10px;
                 text-align: center;
                 padding: 5px 0px;
                 width:94px;height:28px;
                 box-sizing:border-box;
                 background-image: url(${symbolImgUrls["Underskilt"]});
                 background-repeat: no-repeat;`,
}

function createTextSignHTML(f, signType) {
  var signText = f.Tekst
  Console(signText)
  return `<div style='${symbolStyles[signType]}'>${signText}</div>`
}

function createImgSignHTML(signType, height) {
  var url =  baseURL + signType + suffix 
  return "<img src='" + url +"' height='" + height + "' />"
}

function escapeSignType(signType) {
  signType = Replace(signType, ' ', '_')
  return Replace(signType, ',', '')
}

function createSignHTML(f, height) {
  var html = ""
  var signType = escapeSignType(f.Type)
  if (HasKey(symbolStyles, signType)) {
    html = createTextSignHTML(f, signType)
  } else {
    html = createImgSignHTML(signType, height)
  }  
return html
}

var html = createSignHTML($feature, 94)

return { 
	type : 'text', 
	text : html
}