import { MapInstance } from './mapProvider';
import { useConfigMap } from './useConfigMap';
import 'ol/ol.css';


const WebMap = ({onLoadedProject}:{onLoadedProject?:() => void}) => {
  
  useConfigMap();

  return (
    <MapInstance
      className="map-container"
      style={{height: '100%', width:'100%'}} />
  );
}

export default WebMap;