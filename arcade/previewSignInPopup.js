var baseURL = "https://ingean.github.io/kystverket-skiltregistrering/bilder/"
var suffix = ".jpg"

var signName = $feature.Type
signName = Replace(signName, ' ', '_')

var url =  baseURL + signName + suffix 
var img = "<img src='" + url +"' />"

return { 
	type : 'text', 
	text : img
}