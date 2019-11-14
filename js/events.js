AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                const bigToggle = aEntity.getAttribute('big-toggle');
                let increment;
                if(!bigToggle || bigToggle === null || bigToggle === "") {
                    aEntity.setAttribute('big-toggle', "true")
                    increment = 0.5
                }
                else {
                    aEntity.setAttribute('big-toggle', "")
                    increment = -0.5
                }
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + increment);
                aEntity.setAttribute('scale', scale);
            }
        });
}});
