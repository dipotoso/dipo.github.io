        const busStops = [
                [-113.943324, 51.092629],
                [-113.942686, 51.092628],
                [-113.944927, 51.092627],
                [-114.121405, 51.086006],
                [-114.132099, 51.086674],
                [-114.132766, 51.08699],
                [-114.131935, 51.086361],
                [-114.100852, 51.085135],
                [-114.129368, 51.084991],
                [-114.053127, 51.089673],
                [-114.005085, 51.081424],
                [-113.978698, 51.091165],
                [-113.943324, 51.092629]
            ];

            // TODO: add your own access token
            mapboxgl.accessToken =

            // TODO: create the map object using mapboxgl.map() function
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-113.943324, 51.092629],
                zoom: 11,
            });

            // TODO: add a marker to the map
            let marker = new mapboxgl.Marker().setLngLat([-113.943324, 51.092629]).addTo(map);

            // counter here represents the index of the current bus stop
            let counter = 0;
            function move() {
                // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
                // Use counter to access bus stops in the array busStops

                setTimeout(() => {
                    if (counter >= busStops.length) return;
                    marker.setLngLat(busStops[counter]);
                    counter++;
                    move();
                }, 1000);
            }