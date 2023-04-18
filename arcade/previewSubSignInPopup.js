var imgURL = "https://ingean.github.io/kystverket-skiltregistrering/Underskilt_liten.jpg"
var style = `font-weight:bold;
             padding: 3px 10px 3px 10px;
             width:94px;height:28px;
             background-image: url(${imgURL});
             background-repeat: no-repeat;`


var signText = $feature.Tekst

var html = `<div style='${style}'>${signText}</div>`

return { 
	type : 'text', 
	text : html
}