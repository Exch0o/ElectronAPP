const videoElement = document.querySelector('video');
const startBtn = document.getElementById('StartBtn');
const stopBtn = document.getElementById('StopBtn');
const videoSelctionBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;


const { desktopCapturer, remote } = require('electron');

async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window', 'screen']
    });
        
    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            };
        })
    );


    videoOptionsMenu.popup();
}