'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const vertexShader = `
  uniform float u_time;
  uniform vec3 u_mouse;
  uniform float u_point_size;

  attribute float a_noise;

  varying float v_dist_to_mouse;

  void main() {
    float breathing = sin(u_time * 0.5 + position.y * 0.5) * 0.2 + 0.8;
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    v_dist_to_mouse = distance(modelPosition.xyz, u_mouse);
    float mouse_factor = 1.0 - smoothstep(0.0, 150.0, v_dist_to_mouse);
    
    // Particle movement reaction
    vec3 direction = normalize(modelPosition.xyz - u_mouse);
    float displacement = mouse_factor * 25.0; // How far particles move
    modelPosition.xyz += direction * displacement;

    float point_size = u_point_size * (1.0 + mouse_factor * 2.0) * breathing;
    
    vec4 mvPosition = viewMatrix * modelPosition;
    gl_PointSize = point_size * (100.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform float u_time;
  varying float v_dist_to_mouse;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float opacity = smoothstep(0.5, 0.3, dist);
    
    float mouse_factor = 1.0 - smoothstep(0.0, 150.0, v_dist_to_mouse);
    
    // Colores más brillantes e intensos
    vec3 color1 = vec3(0.2, 1.0, 0.9); // #33FFE6 - más brillante
    vec3 color2 = vec3(0.1, 0.8, 1.0); // #1ACCFF - más brillante
    
    vec3 final_color = mix(color1, color2, mouse_factor);
    
    // Efecto de resplandor adicional
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    float brightness = 0.25 + mouse_factor * 0.6 + glow * 0.3;
    
    gl_FragColor = vec4(final_color, opacity * brightness);
  }
`;

const StaticFallback = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(0, 255, 209, 0.06) 0%, transparent 45%)',
      }}
    />
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundColor: 'transparent',
      }}
    />
  </div>
);

const PointCloud = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setUseFallback(true);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;
    
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // Ensure canvas stays transparent to avoid flashes
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Slightly reduce point count to improve stability on low-end GPUs
    const pointCount = window.innerWidth < 768 ? 4000 : 10000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const noises = [];
    const radius = 150;

    for (let i = 0; i < pointCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push(x, y, z);
      noises.push(Math.random());
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('a_noise', new THREE.Float32BufferAttribute(noises, 1));

    const uniforms = {
      u_time: { value: 0.0 },
      u_mouse: { value: new THREE.Vector3(10000, 10000, 10000) },
      u_point_size: { value: window.innerWidth < 768 ? 3.5 : 4.5 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mouse = new THREE.Vector2(1, 1);
    const targetMouse = new THREE.Vector3(10000, 10000, 10000);

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      targetMouse.copy(camera.position).add(dir.multiplyScalar(distance));
    };
    
    const onMouseLeave = () => {
      targetMouse.set(10000, 10000, 10000);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_point_size.value = window.innerWidth < 768 ? 3.5 : 4.5;
    };
    window.addEventListener('resize', handleResize);

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(currentMount);
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
      } else {
        const entry = observer.takeRecords()[0];
        isVisible = entry ? entry.isIntersecting : true;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      uniforms.u_time.value = clock.getElapsedTime();
      uniforms.u_mouse.value.lerp(targetMouse, 0.05);
      
      points.rotation.y = clock.getElapsedTime() * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  if (useFallback) {
    return <StaticFallback />;
  }

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default PointCloud;