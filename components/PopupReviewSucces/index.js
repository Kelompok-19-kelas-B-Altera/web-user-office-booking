import { useSelector, useDispatch } from "react-redux";
import { handleTogglePopupReview } from "../../redux/features/ReviewQuerySlice";

const PopupReviewSucces = () => {
  const isSucces = useSelector((state) => state.reviewQuery.isSubmitSucces);
  const dispatch = useDispatch();

  return (
    <>
      {isSucces === "true" && (
        <div
          className="flex flex-col justify-center items-center bg-white absolute"
          style={{ width: "339px", height: "456px" }}
        >
          <div className="flex flex-col gap-3 items-center w-[208px] mb-[59px]">
            <img src="/submit-succes.svg" alt="submit-succes" width={160} height={160} />
            <h1 className="text-[#4CAF50] text-xl font-semibold">Review Selesai</h1>
            <p className="text-sm text-center text-secondary">
              Terima kasih atas ulasan yang anda berikan
            </p>
          </div>
          <button className="w-[235px] h-[34px] bg-blue text-white rounded-md text-xs mb-2">
            Lihat Review
          </button>
          <p
            className="text-xs text-blue hover:cursor-pointer"
            onClick={() => {
              dispatch(handleTogglePopupReview(""));
            }}
          >
            Kembali
          </p>
        </div>
      )}

      {isSucces === "false" && (
        <div
          className="flex flex-col justify-center items-center bg-white absolute"
          style={{ width: "339px", height: "456px" }}
        >
          <div className="flex flex-col gap-3 items-center w-[208px] mb-[59px]">
            <img src="/submit-failed.svg" alt="submit-succes" width={160} height={160} />
            <h1 className="text-[#e65e49] text-xl font-semibold">Review Gagal</h1>
            <p className="text-sm text-center text-secondary w-[208px] text-sm">
              Anda sudah memeberikan ulasan sebelumnya
            </p>
          </div>
          <button className="w-[235px] h-[34px] bg-blue text-white rounded-md text-xs mb-2">
            Lihat Review
          </button>
          <p
            className="text-xs text-blue hover:cursor-pointer"
            onClick={() => {
              dispatch(handleTogglePopupReview(""));
            }}
          >
            Kembali
          </p>
        </div>
      )}
    </>
  );
};

export default PopupReviewSucces;
