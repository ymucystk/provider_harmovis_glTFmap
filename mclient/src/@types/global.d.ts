declare module "@deck.gl/core" {

  interface LayerProps {
    id?: string;
    data?: any[];
    visible?: boolean;
    pickable?: boolean;
    opacity?: number;
    onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    coordinateSystem?: number;
  }

  class Layer <P extends LayerProps = LayerProps, S = {}> {
    constructor(props: P);
    context: any;
    props: P;
    state: S;
  }

  class CompositeLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class MapController {}
}

declare module "@deck.gl/react" {

  import * as React from 'react';

  export default class DeckGL extends React.Component<any> {}
}

declare module "@deck.gl/layers" {

  import { Layer, LayerProps, CompositeLayer } from '@deck.gl/core';

  class ScatterplotLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class GridCellLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class LineLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class ArcLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class PathLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class PolygonLayer<P extends LayerProps = LayerProps, S = {}> extends CompositeLayer<P, S> {}

  class PointCloudLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class GeoJsonLayer<P extends LayerProps = LayerProps, S = {}> extends CompositeLayer<P, S> {}

  class ColumnLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class TextLayer<P extends LayerProps = LayerProps, S = {}> extends CompositeLayer<P, S> {}

  class IconLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}
}

declare module "@deck.gl/aggregation-layers" {

  import { Layer, LayerProps } from '@deck.gl/core';

  class HexagonLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class GridLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}
}

declare module "@deck.gl/mesh-layers" {

  import { Layer, LayerProps } from '@deck.gl/core';

  class ScenegraphLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}

  class SimpleMeshLayer<P extends LayerProps = LayerProps, S = {}> extends Layer<P, S> {}
}

declare module "@luma.gl/engine" {
  class CubeGeometry{
    constructor(props: any);
  }
}

declare module "@deck.gl/extensions" {

  class PathStyleExtension {
    constructor(props: any);
  }
}

declare module "@loaders.gl/obj" {
  const OBJLoader:any
}

declare module "@loaders.gl/gltf" {
  const GLTFLoader:any
}