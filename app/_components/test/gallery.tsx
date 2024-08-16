"use client";
import { MappingWrapper } from "@/lib/mapping-wrapper";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import Image from "next/image";
const images = [
	"2f9ea7c3-0cc1-43e1-b26d-8ea9dfd855c8",
	"a11d3915-f77a-4445-9b70-a2d218a1c9d2",
	"865a25f0-234f-477b-beff-1a026afb6904",
	"23eebf2e-dbcc-4454-a88f-a08e283c0b96",
	"43f772ae-033d-45c5-8063-5b763278bd7f",
	"e7b26bd4-1aa4-4ab0-b3ff-dedd854e612f",
	"376e46df-3d32-4685-9cde-98a823048534",
	"fc8e0447-b7cf-4cd1-876f-c3464f6ba6b4",
	"b645d9df-5b71-42e4-9775-1bf23bc8f38f",
	"c90d9d45-b333-45fd-9077-cd0c466b51da",
	"180b8bea-b6f9-4ed1-a44d-8ad5cc97d502",
	"367d507f-f79c-47fc-adb4-4e5c342beb5d",
	"31228eb2-3ada-4e92-a387-9325d82551ed",
	"c8685264-7b5d-47e7-af39-3db3d71d15fd",
	"cf87408c-dc75-4151-99db-91c180b83ae8",
	"213daea4-c571-4cf5-98a0-54435e40770c",
	"918c7167-1cee-46bf-bf01-b1acad0a78af",
	"ab3bcc3a-bc76-4df7-ac7a-ea52aa6a7d4f",
	"b7335594-1bb7-49ac-9b6a-91e859a9073c",
	"d6b0f548-3eb9-472b-b5e1-8ab0ca403184",
];
export const Gallery = () => {
	const containerRef = React.useRef<HTMLElement | null>(null);
	const circleRef = React.useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			const items: HTMLDivElement[] = gsap.utils.toArray(".circle--item");
			const numberOfLength = items.length;
			const radians = 2 * Math.PI;
			const angleIncrement = radians / numberOfLength;
			const radius = document.body.offsetWidth > 430 ? 300 : 180;
			const centerX = containerRef.current!.offsetWidth / 2;
			const centerY = containerRef.current!.offsetHeight / 2;
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "top+=20% center",
					scrub: 1,
				},
			});
			let galleryIsOpen = false;

			items.forEach((item, index) => {
				const angle = (index + 1) * angleIncrement - Math.PI / 2;
				console.log({ angle, index });
				const initialRotation = (angle * 180) / Math.PI;
				const x = centerX + radius * Math.cos(angle);
				const y = centerY + radius * Math.sin(angle);
				console.log({ angleIncrement });
				gsap.set(item, { scale: 0 });
				tl.to(
					item,
					{
						left: `${x}px`,
						top: `${y}px`,
						rotation: initialRotation,
						scale: 1,
						duration: 1,
						ease: "power2.out",
					},
					index * 0.1,
				);

				item.addEventListener("click", () => {
					if (!galleryIsOpen) {
						galleryIsOpen = true;
						const duplicate = item.cloneNode(true) as HTMLElement;
						duplicate.style.position = "absolute";
						containerRef.current?.appendChild(duplicate);

						gsap.to(
							Array.from(items).filter((i) => i !== item),
							{
								scale: 0,
								duration: 0.5,
								ease: "power2.in",
								stagger: 0.5,
							},
						);

						const endDuration =
							initialRotation > 180 ? initialRotation - 360 : initialRotation;
						gsap.to([item, duplicate], {
							rotation: endDuration,
							duration: 0.0001,
							onComplete: () => {
								gsap.to([item, duplicate], {
									left: "50%",
									top: "50%",
									transform: "translate(-50%,-50%) scale(5)",
									duration: 1,
									ease: "power2.out",
									delay: 0.25,
								});
							},
						});

						const closeGallery = () => {
							if (galleryIsOpen) {
								gsap.to([item, duplicate], {
									left: `${x}px`,
									top: `${y}px`,
									scale: 1,
									rotation: initialRotation,
									duration: 1,
									ease: "power2.out",
									onComplete: () => {
										duplicate.remove();
										gsap.to(
											Array.from(items).filter((i) => i !== item),
											{
												scale: 1,
												duration: 1,
												stagger: 0.05,
												ease: "power2.out",
											},
										);
									},
								});
								galleryIsOpen = false;
							}
						};

						circleRef.current?.addEventListener("click", closeGallery);
						duplicate.addEventListener("click", closeGallery);
					}
				});
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className="circle--container">
			<div className="gallery origin-center">
				<MappingWrapper
					array={images}
					render={(url, index) => (
						<div key={index} className="circle--item">
							<Image
								src={`https://ucarecdn.com/${url}/IMG-${index}.JPG`}
								alt="pondok kopi"
								width={0}
								height={0}
								sizes="100vh"
								className="h-full w-full object-cover"
							/>
						</div>
					)}
				/>
			</div>
			<h1 className="absolute--center text-4xl text-lush-white lg:text-9xl">
				Gallery
			</h1>
		</section>
	);
};
