let startTime, endTime;
        let imageSize = 0;
        let image = new Image();
        let bitSpeed = document.getElementById("bits-value");
        let kbSpeed = document.getElementById("kbs-value");
        let mbSpeed = document.getElementById("mbs-value");
        let info = document.getElementById("info");

        let totalBitSpeed = 0;
        let totalKbSpeed = 0;
        let totalMbSpeed = 0;
        let numTests = 1;
        let testCompleted = 0;

        let imageApi = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1200px-June_odd-eyed-cat.jpg";

        image.onload = function () {
            endTime = new Date().getTime();
            let timeDuration = (endTime - startTime) / 1000;

            let loadedBits = parseInt(imageSize, 10) * 8;
            let speedInBts = loadedBits / timeDuration;
            let speedInKbs = speedInBts / 1024;
            let speedInMbs = speedInKbs / 1024;

            totalBitSpeed += speedInBts;
            totalKbSpeed += speedInKbs;
            totalMbSpeed += speedInMbs;

            testCompleted++;

            if (testCompleted === numTests) {
                let averageSpeedInBps = (totalBitSpeed / numTests).toFixed(2);
                let averageSpeedInKbps = (totalKbSpeed / numTests).toFixed(2);
                let averageSpeedInMbps = (totalMbSpeed / numTests).toFixed(2);

                bitSpeed.innerHTML = `${averageSpeedInBps}`;
                kbSpeed.innerHTML = `${averageSpeedInKbps}`;
                mbSpeed.innerHTML = `${averageSpeedInMbps}`;
                info.innerHTML = "Test Completed!";
            }
        };

        function init() {
            info.innerHTML = "Testing your internet speed...";
            startTime = new Date().getTime();
            fetch(imageApi).then(response => {
                imageSize = response.headers.get("Content-Length");
                image.src = imageApi; // This triggers the onload event
            });
        }

        window.onload = () => {
            init();
        };