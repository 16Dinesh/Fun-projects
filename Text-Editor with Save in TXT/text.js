document.addEventListener('DOMContentLoaded', function() {
    let p = document.getElementById('displayText');
    let inp = document.getElementById('textInput');
    let saveBtn = document.getElementById('saveBtn');

    inp.addEventListener('input', function() {
        p.innerText = inp.value;
    });

    saveBtn.addEventListener('click', function() {
        let textToSave = inp.value;
        let blob = new Blob([textToSave], { type: 'text/plain' });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'textfile.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
