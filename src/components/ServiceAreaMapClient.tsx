"use client";

import { useEffect, useState } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { divIcon, type LatLngBoundsExpression } from "leaflet";
import { whatsappLink } from "@/lib/site";

const INDIA_BOUNDS: LatLngBoundsExpression = [
    [6, 68],
    [37.5, 98],
];

const NCR_CENTER: [number, number] = [28.55, 77.24];

const locations: Record<
    string,
    {
        position: [number, number];
        description: string;
    }
> = {
    "South Delhi": {
        position: [28.5245, 77.2066],
        description: "Enquire about home-visit availability in South Delhi.",
    },
    Gurugram: {
        position: [28.4595, 77.0266],
        description: "Enquire about home-visit availability in Gurugram.",
    },
    Noida: {
        position: [28.5355, 77.391],
        description: "Enquire about home-visit availability in Noida.",
    },
    Ghaziabad: {
        position: [28.6692, 77.4538],
        description: "Enquire about home-visit availability in Ghaziabad.",
    },
};

const mapPinIcon = divIcon({
    className: "motionwell-map-pin",
    html: `
    <span class="motionwell-map-pin-shape">
      <svg viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 2C10 2 3 9.8 3 19.2C3 30.4 20 46 20 46S37 30.4 37 19.2C37 9.8 30 2 20 2Z"
          fill="#65a30d"
          stroke="#365314"
          stroke-width="2"
        />
        <circle cx="20" cy="19" r="7" fill="#ffffff" />
      </svg>
    </span>
  `,
    iconSize: [40, 48],
    iconAnchor: [20, 46],
    popupAnchor: [0, -42],
});

function IndiaMapSetup() {
    const map = useMap();

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            map.invalidateSize({ pan: false });
            map.fitBounds(INDIA_BOUNDS, { padding: [16, 16] });
        });

        const container = map.getContainer();

        const observer = new ResizeObserver(() => {
            map.invalidateSize({ pan: false });
        });

        observer.observe(container);

        return () => {
            window.cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, [map]);

    return null;
}

function ServiceAreaMarkers({ areas }: { areas: string[] }) {
    const map = useMap();
    const [zoom, setZoom] = useState(map.getZoom());

    useMapEvents({
        zoomend: () => setZoom(map.getZoom()),
    });

    // At India-wide zoom, show one prominent Delhi NCR pin.
    // Zooming in reveals the individual service-area pins.
    if (zoom < 8) {
        return (
            <Marker position={NCR_CENTER} icon={mapPinIcon}>
                <Popup>
                    <div className="motionwell-map-popup">
                        <strong>Delhi NCR</strong>

                        <p>
                            Explore our listed home-visit enquiry areas.
                            Availability must be confirmed for your locality.
                        </p>

                        <button
                            type="button"
                            onClick={() => map.flyTo(NCR_CENTER, 11, { duration: 0.8 })}
                            className="motionwell-map-popup-button"
                        >
                            Explore service areas
                        </button>
                    </div>
                </Popup>
            </Marker>
        );
    }

    return (
        <>
            {areas.map((area) => {
                const location = locations[area];

                if (!location) return null;

                return (
                    <Marker
                        key={area}
                        position={location.position}
                        icon={mapPinIcon}
                    >
                        <Popup>
                            <div className="motionwell-map-popup">
                                <strong>{area}</strong>

                                <p>{location.description}</p>

                                <a
                                    href={whatsappLink(
                                        `Hello MotionWell Physiotherapy, please check home-visit availability in ${area}.`
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="motionwell-map-popup-button"
                                >
                                    Enquire on WhatsApp
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </>
    );
}

export default function ServiceAreaMap({
    areas = [],
}: {
    areas?: string[];
}) {
    const availableAreas = (
        Array.isArray(areas) ? areas : []
    ).filter(
        (area) =>
            typeof area === "string" && Boolean(locations[area])
    );

    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-lime-700">
                    India service area overview
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Explore our home-visit coverage
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Start with the India-wide view. Select the Delhi NCR pin
                    or zoom in to explore the listed areas and enquire about
                    home-visit availability.
                </p>
            </div>

            <MapContainer
                center={[22.9734, 78.6569]}
                zoom={5}
                zoomAnimation={false}
                fadeAnimation={false}
                markerZoomAnimation={false}
                minZoom={4}
                maxZoom={12}
                zoomSnap={0.5}
                maxBounds={INDIA_BOUNDS}
                maxBoundsViscosity={1}
                scrollWheelZoom={true}
                zoomControl={true}
                className="motionwell-service-map"
                style={{
                    height: "500px",
                    minHeight: "500px",
                    width: "100%",
                    display: "block",
                    position: "relative",
                    background: "#eef2e8",
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    subdomains={["a", "b", "c"]}
                    keepBuffer={4}
                />

                <IndiaMapSetup />

                <ServiceAreaMarkers areas={availableAreas} />
            </MapContainer>

            <div className="flex flex-wrap gap-2 p-4 sm:p-5">
                {availableAreas.map((area) => (
                    <span
                        key={area}
                        className="rounded-full border border-lime-200 bg-lime-50 px-3 py-1.5 text-sm font-medium text-lime-900"
                    >
                        {area}
                    </span>
                ))}
            </div>
        </section>
    );
}