function copyFunction() {
    let copyText = document.getElementById('email-text').value
    console.log(copyText)
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('copy-button').innerHTML = 'copied'
        document.getElementById('copy-button').style.backgroundColor = 'palegreen'

    });
    
}