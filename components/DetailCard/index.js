import React from "react";
import LiveChat from "../LiveChat";
import Image from "next/image";
import NearbyFacility from "../NearbyFacility";

import styles from "./DetailCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { handleToggleChat } from "../../redux/features/LiveChatSlice";

export default function DetailCard({ nameBuilding, buildingLocation, description, facilities, rating, totalReview }) {
	const [buildingAddress, buildingCity] = buildingLocation;
	const showChat = useSelector((state) => state.liveChat.toggleChat);
	const dispatch = useDispatch();
	return (
		<div className={`${styles.detailCard} absolute`}>
			<div className={`${styles.detailBuilding} bg-white drop-shadow-lg`}>
				<h1 className="text-3xl font-semibold">{nameBuilding}</h1>
				<div className="flex mt-2">
					<img
						src="/location-purpose-building.svg"
						alt="location"
						width={9}
						height={14}
					/>
					<p className="ml-0.5 text-xs">{buildingAddress}, {buildingCity}</p>
				</div>
				<div>
					<p className="mt-3.5 leading-5 text-justify">
						{description}
					</p>
				</div>
				<div>
					<h2 className="mt-6 font-semibold text-2xl">Fasilitas Terdekat</h2>
					<div className="mt-1 flex flex-wrap ">
						<NearbyFacility 
						// facilities={[["rumah sakit", "2 KM"], ["bandara", "2 KM"], ["mall", "2 KM"], ["coffee shop", "2 KM"]]}
						facilities={facilities}
						/>
					</div>
				</div>
				<div className="flex justify-between mt-10">
					<div className="flex">
						<img src="/star.svg" alt="" className="mr-2.5" />
						<p>{rating}</p>
						<p className="text-secondary">{totalReview}</p>
					</div>
					<div className="text-blue">
						<a href="#toReview">Lihat Review</a>
					</div>
				</div>
				<div
					className={`${styles.buttonMobile} bg-blue rounded flex justify-center items-center text-white gap-3 font-semibold text-sm`}
					onClick={() =>
						dispatch(handleToggleChat())
					}
				>
					<Image
						src="/chat-mobile.svg"
						width={24}
						height={24}
						alt="chat-mobile"
					/>
					<p>Sewa Sekarang</p>
				</div>
				{/* <LiveChat/> */}
			</div>
		</div>
	);
}
