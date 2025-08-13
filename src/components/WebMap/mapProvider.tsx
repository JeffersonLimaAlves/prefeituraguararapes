import * as React from 'react'
import { Map } from 'ol';


// Cotext
interface IMapStateContext {
  map: Map;
};

const MapStateContext = React.createContext<IMapStateContext | undefined>(undefined);


// HOC
type MapProviderProps = {children: React.ReactNode};

function MapProvider({children}: MapProviderProps) {
  const [map] = React.useState<Map>(new Map({controls: []}));
  const value:IMapStateContext = { map };

  return (
    <MapStateContext.Provider value={value}>
      {children}
    </MapStateContext.Provider>
  )
}


// Custom Component and Custom Hook
const MapInstance = ({...props}) => {
  const context = React.useContext(MapStateContext);
  const element = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!context) {
      throw new Error('MapInstance must be used within a MapProvider');
    }

    if (!element.current) {
      return;
    }

    context.map.setTarget(element.current);

    return () => {
      context.map?.setTarget(undefined);
      if(element.current) {
        element.current.innerHTML = '';
      }
    }

  }, [element.current]);

  return (<div {...props} ref={element}></div>);
}

const useMapInstance = ():Map => {
  const context = React.useContext(MapStateContext)
  if (context === undefined) {
    throw new Error('useMapInstance must be used within a MapProvider');
  }
  return context.map;
}


export { MapProvider, MapInstance, useMapInstance };
