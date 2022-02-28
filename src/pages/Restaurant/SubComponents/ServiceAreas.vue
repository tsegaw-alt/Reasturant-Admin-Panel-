<template>
    <div>
                    <l-map
                        style="height: 400px; width:100%" 
                        ref="map"
                        :zoom="zoom"
                        :center="center"
                        @update:zoom="zoomUpdated"
                        @update:center="centerUpdated"
                        @update:bounds="boundsUpdated"
                      >
                       
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                    </l-map>

                  <div class="form-row">

                  <div class="col-md-3 mb-3">
                        <h5>Add City</h5>
                        <p>Fill up all forms for confirmtion</p>
                      <div>
                        <h7>POSTCODE</h7>
                        <input type="text" class="form-control" id="input" v-model="serviceAreaData.postCode" placeholder="22865258"   >
                       </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <div class="city-div2">   
                      <h2>+</h2>
                    </div>
                    <div class="city-div"><h7>CITY</h7>
                      <input type="text" class="form-control" id="input" v-model="serviceAreaData.street" placeholder="Hamburg">
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <h5>Selected Area</h5>
                    <p>Fill up all forms for confirmtion</p>
                    <p><strong>Selected Areas:</strong> Minimun Price <input type="text" placeholder="$25" v-model="serviceAreaData.price"/></p> 
                    <p ><u id="city">City or Postcode:</u> Minmum service price</p>
                  
                  </div>
                </div>
    </div>
</template>
<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import LDrawToolbar from "vue2-leaflet-draw-toolbar";
import LDraw from 'leaflet-draw';

export default {
    name: 'ServiceAreas',
    components: {
        LMap,
        LTileLayer,
        LDrawToolbar,
        LDraw
    },
    props: {
        restaurantInformationData: Object,
        serviceAreaData: Object
    }, 
    data(){
        return {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 5,
            center: [47.313220, -1.319482],
        }
    },
     mounted() {

      this.$nextTick(() => {
      const map = this.$refs.map.mapObject;
      // Leaflet Draw
      // Add new FeatureGroup from leaflet for Draw objects on map
    
      const editableLayers = new window.L.FeatureGroup().addTo(map);
      const drawControl = new window.L.Control.Draw({
        position: 'bottomright',
        draw: {
          polygon:  {
            allowIntersection: false, // Restricts shapes to simple polygons
            drawError: {
              color: 'red',
              timeout: 2000,
              message: '<strong>Error Happen<strong>',
            },
            showArea: true,
            metric: true, //m2
            repeatMode: false,
            shapeOptions: {
              polylineID: false,
              color: '#000000',
              fillColor: '#F85F73',
              weight: 2,
              fillOpacity: 0.7,
              lineCap: 'round',
              lineJoin: 'bevel',
              dashArray: '',
              opacity: 1,
            },
          },
          polyline: false,
          rectangle: false,
          circle: false,
          marker: false
        },
        edit: {
          featureGroup: editableLayers,
          remove: true
        }
      });

      map.addControl(drawControl);

      map.on(window.L.Draw.Event.CREATED, (e) => {
        // const type = e.layerType;
        const layer = e.layer;
        const geoJson = layer.toGeoJSON(14)
        // const serviceArea = {}
        // serviceArea['postCode'] = this.postCode
        // serviceArea['street'] = this.street
        // serviceArea['price'] = this.price
        // serviceArea['feature'] = geoJson
        console.log(geoJson);
        this.serviceAreaData.feature = geoJson
        console.log(this.serviceAreaData)
        // this.restaurantInformationData.deliveryAreas.push(serviceArea);
       
        editableLayers.addLayer(layer);
      });
    });
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }

}
</script>
<style src="../sass/AddRestaurantInfo.scss" lang="scss" scoped />
