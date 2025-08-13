import { useEffect } from 'react';
import { useMapInstance } from './mapProvider';
import { boundingExtent, getCenter } from 'ol/extent';
import { inAndOut } from 'ol/easing';
import { Map, View } from 'ol';
import { apply } from 'ol-mapbox-style';

import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

const useConfigMap = () => {

  const map = useMapInstance();

  useEffect(() => {

    const initialExtent = [
      [-8236579.5, -3995440.25],
      [-3211304.5, 587688.5]
    ];

    const view = new View({
      center: getCenter(boundingExtent(initialExtent)),
      zoom: 5
    });
    
    view.setProperties({ initialExtent: initialExtent });

    map.setView(view);

    const defaultBaseMapUrl = 'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery?type=style&token=AAPK3dc4084a0fd54cb68c2b15859df2d949uMP1DXyxn_JDBHNixH7MxFslVPd2VqZo4KogeYY4ml2FHopukPtroCOhppj_XkXC';

    apply(map, defaultBaseMapUrl).then((nmap) => {
      const vectorSource = new VectorSource({
        format: new GeoJSON(),
        url: `${import.meta.env.BASE_URL}/guararapes.geojson`,
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        // Optional: Add a style for your features here
        // style: yourFeatureStyleFunction,
      });

      const map = nmap as Map;

      const basemapLayers = map.getLayers().getArray();
      map.setLayers([...basemapLayers, vectorLayer]);

      const guarararapesExtent = [[-5684699.97, -2471550.68], [-5594908.97, -2377480.22]];

      map.getView().setProperties({ initialExtent: guarararapesExtent })
      map.getView().fit(boundingExtent(guarararapesExtent), {
        duration: 250,
        easing: inAndOut
      });
    });
  }, []);

}

export { useConfigMap };
