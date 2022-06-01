import React from 'react';
import {Source, Layer} from 'react-map-gl';

// this geojson polygon can be used to visualize the boundaries of the bounding box
const geojson = {
    type: "FeatureCollection",
    features: [{
        type: "Feature",
        properties: {},
        geometry: {
            type: "Polygon",
            coordinates: [[
                [
                -123.837890625,
                36.35052700542763
                ],
                [
                -112.32421875,
                36.35052700542763
                ],
                [
                -112.32421875,
                43.61221676817573
                ],
                [
                -123.837890625,
                43.61221676817573
                ],
                [
                -123.837890625,
                36.35052700542763
                ]
            ]]
        }
    }]
};

const layerStyle = {
id: 'outline',
type: 'line',
paint: {
    'line-color': '#007cbf',
    'line-width': 3
}
};

function BoundingBox() {
    return (
        <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
        </Source>
    );
};

export default React.memo(BoundingBox);