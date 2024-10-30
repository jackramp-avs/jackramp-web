"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Color, Fog, PerspectiveCamera, Scene, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
import { genRandomNumbers, hexToRgb } from "@/lib/utils";

declare module "@react-three/fiber" {
    interface ThreeElements {
        threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};

export type GlobeConfig = {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: {
        lat: number;
        lng: number;
    };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
};

interface WorldProps {
    globeConfig: GlobeConfig;
    data: Position[];
}

let numbersOfRings: number[] = [0];

export function Globe({ globeConfig, data }: WorldProps) {
    const [globeData, setGlobeData] = useState<
        {
            size: number;
            order: number;
            color: (t: number) => string;
            lat: number;
            lng: number;
        }[]
    >([]);

    const globeRef = useRef<ThreeGlobe | null>(null);

    const defaultProps = useMemo(
        () => ({
            pointSize: 1,
            atmosphereColor: "#ffffff",
            showAtmosphere: true,
            atmosphereAltitude: 0.1,
            polygonColor: "rgba(255,255,255,0.7)",
            globeColor: "#1d072e",
            emissive: "#000000",
            emissiveIntensity: 0.1,
            shininess: 0.9,
            arcTime: 2000,
            arcLength: 0.9,
            rings: 1,
            maxRings: 3,
            ...globeConfig,
        }),
        [globeConfig]
    );

    const _buildMaterial = useCallback(() => {
        if (!globeRef.current) return;

        const globeMaterial = globeRef.current.globeMaterial() as unknown as {
            color: Color;
            emissive: Color;
            emissiveIntensity: number;
            shininess: number;
        };
        globeMaterial.color = new Color(globeConfig.globeColor);
        globeMaterial.emissive = new Color(globeConfig.emissive);
        globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
        globeMaterial.shininess = globeConfig.shininess || 0.9;
    }, [globeRef, globeConfig]);

    const _buildData = useCallback(() => {
        const points = data.flatMap((arc) => {
            const rgb = hexToRgb(arc.color);
            if (!rgb) return [];
            return [
                {
                    size: defaultProps.pointSize,
                    order: arc.order,
                    color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                    lat: arc.startLat,
                    lng: arc.startLng,
                },
                {
                    size: defaultProps.pointSize,
                    order: arc.order,
                    color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                    lat: arc.endLat,
                    lng: arc.endLng,
                },
            ];
        });

        const filteredPoints = points.filter(
            (v, i, a) =>
                a.findIndex((v2) =>
                    ["lat", "lng"].every((k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"])
                ) === i
        );

        setGlobeData(filteredPoints);
    }, [data, defaultProps]);

    useEffect(() => {
        if (globeRef.current) {
            _buildData();
            _buildMaterial();
        }
    }, [_buildData, _buildMaterial]);

    const startAnimation = useCallback(() => {
        if (!globeRef.current || !globeData) return;

        globeRef.current
            .arcsData(data)
            .arcStartLat((d) => (d as Position).startLat)
            .arcStartLng((d) => (d as Position).startLng)
            .arcEndLat((d) => (d as Position).endLat)
            .arcEndLng((d) => (d as Position).endLng)
            .pointColor((e) => (e as { color: string }).color)
            .arcAltitude((e) => (e as Position).arcAlt)
            .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
            .arcDashLength(defaultProps.arcLength)
            .arcDashInitialGap((e) => (e as Position).order)
            .arcDashGap(15)
            .arcDashAnimateTime(() => defaultProps.arcTime);

        globeRef.current
            .pointsData(data)
            .pointColor((e) => (e as { color: string }).color)
            .pointsMerge(true)
            .pointAltitude(0.0)
            .pointRadius(2);

        globeRef.current
            .ringsData([])
            .pointColor((e) => (e as { color: string }).color)
            .ringMaxRadius(defaultProps.maxRings)
            .ringPropagationSpeed(RING_PROPAGATION_SPEED)
            .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
    }, [globeRef, globeData, data, defaultProps]);

    useEffect(() => {
        if (globeRef.current && globeData) {
            globeRef.current
                .hexPolygonsData(countries.features)
                .hexPolygonResolution(3)
                .hexPolygonMargin(0.7)
                .showAtmosphere(defaultProps.showAtmosphere)
                .atmosphereColor(defaultProps.atmosphereColor)
                .atmosphereAltitude(defaultProps.atmosphereAltitude)
                .hexPolygonColor(() => defaultProps.polygonColor);

            startAnimation();
        }
    }, [globeData, defaultProps, globeRef, startAnimation]);

    useEffect(() => {
        if (!globeRef.current || !globeData) return;

        const interval = setInterval(() => {
            if (!globeRef.current || !globeData) return;

            numbersOfRings = genRandomNumbers(
                0,
                data.length,
                Math.floor((data.length * 4) / 5)
            );

            globeRef.current.ringsData(
                globeData.filter((i) => numbersOfRings.includes(i.order))
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [globeData, data]);

    return <threeGlobe ref={globeRef} />;
}

export function WebGLRendererConfig() {
    const { gl, size } = useThree();

    useEffect(() => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(size.width, size.height);
        gl.setClearColor(0xffaaff, 0);
    }, [gl, size]);

    return null;
}

export function World(props: WorldProps) {
    const { globeConfig } = props;
    const scene = new Scene();
    scene.fog = new Fog(0xffffff, 400, 2000);
    return (
        <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
            <WebGLRendererConfig />
            <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
            <directionalLight
                color={globeConfig.directionalLeftLight}
                position={new Vector3(-400, 100, 400)}
            />
            <directionalLight
                color={globeConfig.directionalTopLight}
                position={new Vector3(-200, 500, 200)}
            />
            <pointLight
                color={globeConfig.pointLight}
                position={new Vector3(-200, 500, 200)}
                intensity={0.8}
            />
            <Globe {...props} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={cameraZ}
                maxDistance={cameraZ}
                autoRotateSpeed={1}
                autoRotate={true}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI - Math.PI / 3}
            />
        </Canvas>
    );
}