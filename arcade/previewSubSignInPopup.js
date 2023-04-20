var imgURL = "https://ingean.github.io/kystverket-skiltregistrering/bilder/Underskilt_liten.jpg"
var style = `font-weight:bold;
             font-size: 10px;
             text-align: center;
             padding: 5px 0px;
             width:94px;height:28px;
             box-sizing:border-box;
             background-image: url(${imgURL});
             background-repeat: no-repeat;`


var signText = $feature.Tekst

var html = `<div style='${style}'>${signText}</div>`

return { 
	type : 'text', 
	text : html
}