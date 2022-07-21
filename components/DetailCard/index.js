import React from "react";
import LiveChat from "../LiveChat";
import Image from "next/image";
import Link from "next/dist/client/link";

import styles from "./DetailCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { handleToggleChat } from "../../redux/features/LiveChatSlice";

export default function DetailCard({ nameBuilding, buildingLocation, description, rating, totalReview }) {
	const [buildingAddress, buildingCity] = buildingLocation;
	const showChat = useSelector((state) => state.liveChat.toggleChat);
	const dispatch = useDispatch();
	return (
		<div className="w-[514px] h-full mt-10 left-[150px]">
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
				<div className="flex justify-between mt-[20.5px]">
					<div className="flex">
						<img src="/star.svg" alt="" className="mr-2.5" />
						<p>{rating}</p>
						<p className="text-secondary ml-1.5">({totalReview} Reviews)</p>
					</div>
					<div className="text-blue">
						<Link href="#Review">
							<a>Lihat Review</a>
						</Link>
					</div>
				</div>
				<div
					className="mt-[39.5px] mb-4 w-full h-[50px] bg-blue rounded flex justify-center items-center text-white gap-3 font-semibold text-sm hover:cursor-pointer"
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
			</div>
		</div>
	);
}
