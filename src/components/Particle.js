import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function Particle() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Stardust Geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800; // Reduced for a less crowded effect
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // X position (wider dispersion)
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Z position (depth effect)

      // Soft space colors (whites, blues, purples)
      const colorMix = Math.random();
      colors[i * 3] = colorMix * 0.6 + 0.2; // Subtle warm white/pink
      colors[i * 3 + 1] = colorMix * 0.6 + 0.2; // Soft blue glow
      colors[i * 3 + 2] = 1; // Cool spacey blue
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Stardust Material
    const particlesMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.03, // Smaller particles
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending, // Softer glow
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 6;

    // Subtle animation & parallax effect
    const animateParticles = () => {
      requestAnimationFrame(animateParticles);

      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;
      particles.material.opacity = 0.5 + Math.sin(Date.now() * 0.0005) * 0.2; // Flickering effect

      renderer.render(scene, camera);
    };

    animateParticles();

    // Mouse-based Parallax Effect
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;

      particles.rotation.x = mouseY * 0.1;
      particles.rotation.y = mouseX * 0.1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle Resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        filter: "blur(1px)", // Softens the effect even more
      }}
    />
  );
}

export default Particle;
